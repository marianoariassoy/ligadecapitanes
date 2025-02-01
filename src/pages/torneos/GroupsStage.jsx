import { useState } from 'react'
import TournamentsItem from './TournamentsItem'

const GroupsStage1 = ({ groups }) => {
  const [group, setGroup] = useState(0)

  const arrayReverse = groups.filter(objeto => objeto).reverse()

  return (
    <section>
      <div className='text-center lg:mb-3'>
        <div className='flex gap-x-3 justify-center items-center'>
          {arrayReverse.map((item, index) => (
            <div
              key={index}
              className='flex gap-x-3 justify-center items-center'
            >
              <button
                className={`italic ${
                  index === group ? 'text-primary' : 'opacity-50 hover:text-primary hover:opacity-100'
                }`}
                onClick={() => setGroup(index)}
              >
                {item.name}
              </button>
              {index !== groups.length - 1 && <span className=' w-6 h-[1px] bg-primary'></span>}
            </div>
          ))}
        </div>

        <span className='font-medium opacity-70 text-sm lg:text-base '>Posiciones</span>
      </div>

      {arrayReverse.map((item, index) => (
        <div
          key={index}
          className={index === group ? 'block' : 'hidden'}
        >
          <TournamentsItem data={item} />
        </div>
      ))}
    </section>
  )
}

export default GroupsStage1
