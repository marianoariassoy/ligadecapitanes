import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'
import Header from '../../components/Header'

const Champions = () => {
  const { data, loading } = useFetch(`/clubes/champions`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Club',
      value: ''
    },
    {
      name: 'Oro',
      value: 'Copas de oro'
    },
    {
      name: 'Plata',
      value: 'Copas de plata'
    },
    {
      name: 'SC',
      value: 'Supercopas'
    },
    {
      name: 'Finales',
      value: 'Finales disputadas'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <Header
        title='Ranking de Campeones'
        emoji='👑'
      />

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full'>
          <thead>
            <tr>
              {labels.map((item, index) => (
                <th key={index}>{item.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={item.id}
                className={`${index === 0 && 'text-primary'}`}
              >
                <TitleRow
                  num={index + 1}
                  image={item.image}
                  title={item.name}
                  link={`/clubes/${item.club_id}`}
                />

                <td>{item.gold}</td>
                <td>{item.silver}</td>
                <td>{item.supercopa}</td>
                <td>{item.finals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <Helmet>
        <title>IML Tenis Ranking de Campeones</title>
      </Helmet>
    </section>
  )
}

export default Champions
