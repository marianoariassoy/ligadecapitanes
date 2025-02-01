import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Header from '../../components/Header'

const Torneos = () => {
  const { data, loading } = useFetch(`/tournaments`)

  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title='Torneos Anteriores'
        emoji='👴'
      />

      <section className='flex flex-col gap-y-1 items-center font-medium text-sm'>
        {data &&
          data
            .filter(item => item.season !== 5)
            .map(item => (
              <Link
                key={item.id}
                to={`/torneos/${item.id}`}
                className='link-hover'
              >
                <span>{item.name}</span> {item.season_name}
              </Link>
            ))}
      </section>

      <Helmet>
        <title>IML Tenis Torneos Anteriores</title>
      </Helmet>
    </section>
  )
}

export default Torneos
