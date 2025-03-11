import Link from "next/link";
import { WhatsApp, Info } from "@/lib/icons";
import Jugadores from "./jugadores";
import Fixture from "./fixtures";
import { Suspense } from "react";
import Loader from "@/components/Loader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data.name,
    description: `Perfil del equipo ${data.name} de la Liga de Capitanes`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://ligadecapitanes.com.ar/equipos/${id}`,
      title: data.name,
      description: `Perfil del equipo ${data.name} de la Liga de Capitanes`,
      images: [
        {
          url: data.image,
          width: 500,
          height: 500,
          alt: data.name,
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/teams/${id}`
  );
  const data = await response.json();
  if (!data) return null;
  return data;
}

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const data = await getServerSideProps(id);
  if (!data) return null;

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <header className="items-center flex flex-col gap-y-2">
        <Link href={`/clubes/${data.club_id}`}>
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <img
              src={data.image}
              alt={data.name}
              width={80}
              height={80}
              className="object-cover h-full w-full hover:opacity-80 transition-opacity"
            />
          </div>
        </Link>
        <div className="text-center">
          <h1 className="font-semibold text-primary">{data.name}</h1>
          <h2>
            <Link
              href={`/torneos/${data.tournament_id}`}
              className="font-medium hover:underline"
            >
              {data.tournament_name}
            </Link>
          </h2>
        </div>

        <div className="flex justify-center gap-x-4 items-center text-sm">
          <Link
            href={`/clubes/${data.club_id}`}
            className="flex gap-x-1 font-medium items-center text-primary hover:underline"
          >
            <Info />
            Info de la sede
          </Link>
          <a
            href={`https://wa.me/${data.captain_phone}`}
            target="_blank"
            className="flex gap-x-1 font-medium items-center text-primary hover:underline"
          >
            <WhatsApp />
            WhatsApp
          </a>
        </div>
      </header>

      <Suspense fallback={<Loader />}>
        <Jugadores id={id} captain_name={data.captain_name} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Fixture id={id} />
      </Suspense>
    </section>
  );
};

export default Page;
