import Link from "next/link";

interface Item {
  num?: number;
  image: string;
  title: string;
  link: string;
  active?: boolean;
}

const TitleRow = ({ num, image, title, link, active }: Item) => {
  return (
    <div className="flex items-center gap-x-2">
      {num && (
        <div className={`font-bold mr-2 ${active ? "text-primary" : ""}`}>
          {num}
        </div>
      )}

      <div className="w-14 h-14 md:w-15 md:h-15 rounded-full overflow-hidden bg-white/10">
        {image ? (
          <Link href={link}>
            <img
              src={image}
              alt={title}
              width={64}
              height={64}
              className="w-full h-full object-cover hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>

      <Link
        href={link}
        className={`hover:text-primary font-semibold text-nowrap pr-3 ${
          active ? "text-primary" : ""
        }`}
      >
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
