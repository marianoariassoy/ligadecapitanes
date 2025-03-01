import Image from "next/image";
import Estadisticas from "./estadisticas";
import Singles from "./singles";
import Doubles from "./dobles";
import Equipos from "./equipos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: data[0].name,
    description: `Perfil del jugador ${data[0].name} de la Liga de Capitanes`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://ligadecapitanes.com.ar/jugadores/${id}`,
      title: data[0].name,
      description: `Perfil del jugador ${data[0].name} de la Liga de Capitanes`,
      images: [
        {
          url: data[0].image,
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
    `${process.env.NEXT_PUBLIC_API_URL}/players/${id}`
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
        <div className="w-28 h-28 rounded-full overflow-hidden bg-white/10">
          {data[0].image && (
            <Image
              src={data[0].image}
              alt={data[0].name}
              width={112}
              height={112}
              className="object-cover h-full w-full"
            />
          )}
        </div>
        <div className="text-center">
          <h1 className="font-semibold text-primary">{data[0].name}</h1>
          <h2 className="text-secondary text-sm">
            {data[0].age ? data[0].age : null}
          </h2>
        </div>
      </header>

      <Estadisticas id={id} />
      <Singles id={id} />
      <Doubles id={id} />
      <Equipos id={id} />
    </section>
  );
};

export default Page;
