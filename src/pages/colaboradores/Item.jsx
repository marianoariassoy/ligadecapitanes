import { Instagram } from '../../lib/icons'

const Item = ({ item }) => {
  return (
    <article className='flex flex-col items-start gap-y-1 justify-start text-sm'>
      <div>
        <h2 className='text-primary font-bold'>{item.title}</h2>
        <h3>{item.text}</h3>
      </div>

      <div>
        {item.url && (
          <a
            href={item.url}
            target='_blank'
            rel='noreferrer'
            className='text-primary hover:opacity-70 text-xs'
          >
            <Instagram />
          </a>
        )}
      </div>
    </article>
  )
}

export default Item
