"use client";
import { categories } from "@/lib/data";
import Link from "next/link";

const Filter = ({ category }: { category: string }) => {
  return (
    <div
      className="flex justify-center gap-y-2 gap-x-2 mb-3 flex-wrap max-w-xl m-auto
     [&>span:last-child>span]:hidden"
    >
      {categories.map((item) => (
        <span key={item.id} className="flex gap-x-2">
          <Link
            href={`/rankings/jugadores/${item.slug}`}
            className={
              category === item.slug
                ? "text-primary font-semibold"
                : "text-secondary hover:text-primary font-semibold"
            }
          >
            {item.name}
          </Link>
          <span>&bull;</span>
        </span>
      ))}
    </div>
  );
};

export default Filter;
