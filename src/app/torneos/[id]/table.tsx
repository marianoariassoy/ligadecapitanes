import Labels from "@/components/Labels";
import Item from "@/components/Item";
import { Bull } from "@/lib/icons";
import { Group, Table } from "@/types";
import Info from "./info";

const Tabla = async ({ group, type }: { group: Group; type: number }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/${
      type === 3 ? "groups-stage2" : "groups"
    }/teams/${group.id}`
  );
  const data = (await response.json()) as Table[];
  if (!data) return null;

  const labels = [
    {
      name: "Equipo",
      value: "",
    },
    {
      name: "SG",
      value: "Series ganadas",
    },
    {
      name: "P",
      value: "Parciales ganados",
    },

    {
      name: "DS",
      value: "Diferencia de sets",
    },
    {
      name: "DG",
      value: "Diferencia de games",
    },
    {
      name: "SJ",
      value: "Series jugadas",
    },
    {
      name: "Ult. 5 series",
      value: "",
    },
  ];

  return (
    <section className="flex flex-col gap-y-3">
      <div className="overflow-x-auto text-sm whitespace-nowrap">
        <table className="w-full table mb-3">
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index < group.winners ? "text-primary" : ""}`}
              >
                <td>
                  <Item
                    num={index + 1}
                    image={item.image}
                    title={item.name}
                    link={`/equipos/${item.id}`}
                  />
                </td>
                <td>
                  <span className="font-bold">{item.series_won}</span>
                </td>
                <td>{item.match_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.series_total}</td>
                <td>
                  <div className="flex gap-x-2">
                    {item.series.map((item, index) => (
                      <span key={index}>
                        {item ? (
                          <span className="text-primary">
                            <Bull />
                          </span>
                        ) : (
                          <span className="text-white/30">
                            <Bull />
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      {group.tournament_description ? (
        <Info text={group.tournament_description} />
      ) : null}
    </section>
  );
};

export default Tabla;
