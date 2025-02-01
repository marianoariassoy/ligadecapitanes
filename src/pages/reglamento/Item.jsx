const Item = ({ data }) => {
  return (
    <article className='mb-6'>
      {data.title && <h2 className='font-bold text-primary inline-block mr-2'>{data.title}:</h2>}
      <span className='text-balance whitespace-pre-line'>{data.text}</span>
    </article>
  )
}

export default Item
