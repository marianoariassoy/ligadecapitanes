import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Matches from './Matches'
import TeamItem from './Team'

const Series = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/series/${id}`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-center'>
        <h1 className='font-bold text-primary lg:text-xl'>{data.date + ' ' + data.hour}</h1>
        <Link
          to={`/torneos/${data.tournament_id}`}
          className='link-hover opacity-70'
        >
          {data.tournament_name}
        </Link>
      </div>

      <div className='flex justify-center'>
        <div className='flex text-center w-full max-w-xl justify-center gap-x-3'>
          <TeamItem
            id={data.home_id}
            name={data.home_name}
            image={data.home_image}
            type='Local'
          />
          <div className='flex items-center justify-center whitespace-nowrap'>
            {data.winner > 0 ? <h1 className='text-2xl font-semibold'>{data.score}</h1> : <span>⚡</span>}
          </div>
          <TeamItem
            id={data.away_id}
            name={data.away_name}
            image={data.away_image}
            type='Visitante'
          />
        </div>
      </div>

      {data.winner > 0 && <Matches id={id} />}

      <Helmet>
        <title>{data.date + ' ' + data.hour} - Liga de Capitanes</title>
      </Helmet>
    </section>
  )
}

export default Series
