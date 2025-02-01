import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import confetti from 'canvas-confetti'
import Image from '../../components/Image'

const TornamentsChampion = ({ id, name, image }) => {
  useEffect(() => {
    confetti()
  }, [id])

  return (
    <div className='avatar flex flex-col gap-y-2 items-center mb-6 text-center'>
      <div className='w-24 rounded-full'>
        <Link
          to={`/equipos/${id}`}
          className='hover:opacity-70 transition-all'
        >
          <Image
            src={image}
            alt={name}
          />
        </Link>
      </div>
      <h1 className='font-bold text-primary text-sm lg:text-base'>{name} ⭐</h1>
    </div>
  )
}

export default TornamentsChampion
