import Title from "@/components/Title";
import Item from "@/components/Item";
import Labels from "@/components/Labels";

export const metadata = {
  title: "Ranking de Campeones",
  description: "Ranking de campeones de la Liga de Capitanes",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ligadecapitanes.com.ar/rankings/campeones",
    title: "Ranking de Campeones",
    description: "Ranking de campeones de la Liga de Capitanes",
    images: [
      {
        url: "https://ligadecapitanes.com.ar/assets/ligadecapitanes.jpg",
        width: 500,
        height: 500,
        alt: "Liga de Capitanes",
      },
    ],
  },
};

interface data {
  id: string;
  image: string;
  name: string;
  club_id: string;
  gold: string;
  silver: string;
  supercopa: string;
  finals: string;
}

const page = async () => {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/clubes/champions",
    { cache: "no-cache" }
  );
  const data = (await response.json()) as data[];

  const labels = [
    {
      name: "Club",
      value: "",
    },
    {
      name: "Gaudio",
      value: "Copas Gaudio",
    },
    {
      name: "Coria",
      value: "Copas de Coria",
    },

    {
      name: "Finales",
      value: "Finales disputadas",
    },
  ];

  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Ranking de Campeones" emoji="👑" />

      <div className="w-full overflow-x-auto text-sm">
        <table className="table w-full mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className={`${index === 0 && "text-primary"}`}>
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/clubes/${item.club_id}`}
                  />
                </td>
                <td className="font-bold">{item.gold}</td>
                <td>{item.silver}</td>
                <td>{item.finals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  );
};

export default page;
