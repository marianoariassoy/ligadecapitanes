interface data {
  title: string;
  text: string;
}

const Item = ({ data }: { data: data }) => {
  return (
    <article className="mb-6">
      {data.title && <h2 className="font-bold text-primary">{data.title}:</h2>}
      <span className="whitespace-pre-line">{data.text}</span>
    </article>
  );
};

export default Item;
