import Title from "@/components/Title";
import Link from "next/link";
import Item from "@/components/ItemTeam";
import Juegos from "./juegos";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/series/${id}`
  );
  const data = await response.json();
  if (!data) return null;

  return {
    title: `Encuentro entre ${data.home_name} y ${data.away_name} del día ${data.date}`,
    description: `Encuentro entre ${data.home_name} y ${data.away_name} del día ${data.date} ${data.hour} de la Liga de Capitanes`,
    openGraph: {
      type: "website",
      locale: "es_AR",
      url: `https://ligadecapitanes.com.ar/series/${id}`,
      title: `${data.home_name} y ${data.away_name} del ${data.date}`,
      description: `Encuentro entre ${data.home_name} y ${data.away_name} del día ${data.date} ${data.hour} de la Liga de Capitanes`,
      images: [
        {
          url: `/assets/ligadecapitanes.jpg`,
          width: 500,
          height: 500,
          alt: `Liga de Capitanes`,
        },
      ],
    },
  };
}

async function getServerSideProps(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/series/${id}`
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
      <header className="flex flex-col items-center">
        <Title title={`${data.date} ${data.hour}`} />
        <Link
          href={`/torneos/${data.tournament_id}`}
          className="hover:underline font-medium"
        >
          {data.tournament_name}
        </Link>
      </header>

      <div className="flex justify-center items-start gap-x-4 text-center">
        <Item
          link={`/equipos/${data.home_id}`}
          title={data.home_name}
          image={data.home_image}
          subtitle="Local"
        />
        <div className="flex items-center justify-center font-semibold text-2xl pt-8 text-primary">
          {data.winner > 0 ? <span>{data.score}</span> : <div>⚡️</div>}
        </div>
        <Item
          link={`/equipos/${data.away_id}`}
          title={data.away_name}
          image={data.away_image}
          subtitle="Visitante"
        />
      </div>

      {data.winner > 0 ? <Juegos id={id} /> : null}
    </section>
  );
};

export default Page;
