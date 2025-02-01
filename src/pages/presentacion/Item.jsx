import HTMLTEXT from '../../hooks/useHTML'

const Item = ({ title, text }) => {
  return (
    <article className='flex flex-col gap-y-3 p-5 bg-zinc-700 text-white text-sm'>
      <h2 className='font-bold'>{title}</h2>
      <div className='opacity-70'>
        <HTMLTEXT text={text} />
      </div>
    </article>
  )
}

export default Item
