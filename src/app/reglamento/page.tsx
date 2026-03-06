import Title from "@/components/Title";
import Filter from "./Filter";
import { reglamento } from "@/data/reglamento-apertura2026";

export const metadata = {
  title: "Reglamento",
};

const page = () => {
  return (
    <section className="fade-in flex flex-col gap-y-6">
      <Title title="Reglamento Clausura 2025" emoji="🤝" description="" />
      <Filter data={reglamento} />
    </section>
  );
};

export default page;
