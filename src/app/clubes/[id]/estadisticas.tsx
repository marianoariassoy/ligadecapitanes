import { Cup } from "@/lib/icons";

interface data {
  id: number;
  image: string;
  name: string;
  club_id: number;
  gold: number;
  silver: number;
  supercopa: number;
  finals: number;
}

const estadisticas = async ({ id }: { id: string }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/clubes/champions`
  );
  const data = (await response.json()) as data[];
  if (!data) return null;
  const stadistics = data.filter((x) => x.club_id === +id);
  if (stadistics.length === 0) return null;

  return (
    (stadistics[0].gold ||
      stadistics[0].silver ||
      stadistics[0].supercopa ||
      stadistics[0].finals) && (
      <div className="flex justify-center gap-x-2 text-sm p-4 lg:p-6 bg-black/10 rounded-xl">
        <span className="text-primary mt-1 lg:mt-0">
          <Cup />
        </span>
        <span>
          {stadistics[0].gold ? (
            <>
              {stadistics[0].gold}
              {stadistics[0].gold > 1
                ? " copas Gaudio ganadas"
                : " copa Gaudio ganada"}
            </>
          ) : null}
          {stadistics[0].silver ? (
            <>
              {stadistics[0].gold ? ", " : null}
              {stadistics[0].silver}
              {stadistics[0].silver > 1 ? " copas Coria" : " copa Coria"}
            </>
          ) : null}
          {stadistics[0].supercopa ? (
            <>
              {(stadistics[0].gold || stadistics[0].silver > 0) && ", "}
              {stadistics[0].supercopa}
              {stadistics[0].supercopa > 1 ? " supercopas" : " supercopa"}
            </>
          ) : null}
          {stadistics[0].finals ? (
            <>
              {(stadistics[0].gold || stadistics[0].silver > 0) && " y "}
              {stadistics[0].finals}
              {stadistics[0].finals > 1
                ? " finales disputadas"
                : " final disputada"}
            </>
          ) : null}
          .
        </span>
      </div>
    )
  );
};

export default estadisticas;
