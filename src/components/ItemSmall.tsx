import Link from "next/link";

interface Item {
  image: string;
  title: string;
  link: string;
}

const TitleRow = ({ image, title, link }: Item) => {
  return (
    <div className="flex items-center gap-x-2">
      <div className="w-10 h-10 md:w-10 md:h-10 rounded-full overflow-hidden">
        {image ? (
          <Link href={link}>
            <img
              src={image}
              alt={title}
              width={48}
              height={48}
              className="object-cover h-full w-full hover:opacity-70 transition-opacity"
            />
          </Link>
        ) : null}
      </div>
      <Link href={link} className="hover:text-primary font-semibold pr-3">
        {title}
      </Link>
    </div>
  );
};

export default TitleRow;
