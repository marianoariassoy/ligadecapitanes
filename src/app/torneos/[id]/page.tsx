import Title from "@/components/Title";
import Campeon from "./campeon";
import Groups from "./groups";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Fixture from "./fixture";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `${data[0].name} ${data[0].season}`,
    description: `Torneo ${data[0].name} ${data[0].season} de la Liga de Capitanes`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://ligadecapitanes.com.ar/torneos/${id}`,
      title: `${data[0].name} ${data[0].season}`,
      description: `Torneo ${data[0].name} ${data[0].season} de la Liga de Capitanes`,
      images: [
        {
          url: "/assets/ligadecapitanes.jpg",
          width: 500,
          height: 500,
          alt: data[0].name,
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tournaments/${id}`
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
      <Title title={data[0].name + " " + data[0].season} emoji="🏆" />

      {data[0].team_champion_id ? <Campeon data={data[0]} /> : null}

      <Suspense fallback={<Loader />}>
        <Groups id_tournament={id} />
      </Suspense>

      <Suspense fallback={<Loader />}>
        <Fixture title={true} id_tournament={id} />
      </Suspense>
    </section>
  );
};

export default Page;
