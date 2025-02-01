import { Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'

const ClubesTeams = ({ id }) => {
  const { data, loading } = useFetch(`/clubes/${id}/teams`)
  if (loading) return <Loader />
  if (!data) return null

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'Torneo',
      value: ''
    },
    {
      name: 'SJ',
      value: 'Series jugadas'
    },
    {
      name: 'SG',
      value: 'Series ganadas'
    },
    {
      name: 'PG',
      value: 'Parciales ganados'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-center text-primary font-bold'>Equipos</h1>

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
            {data.map(item => (
              <tr key={item.id}>
                <td>
                  <Link
                    to={`/equipos/${item.id}`}
                    className='link-hover text-primary font-medium'
                  >
                    {item.name}
                  </Link>
                </td>
                <td>
                  <Link
                    to={`/torneos/${item.tournament_id}`}
                    className='hover:text-primary'
                  >
                    {item.tournament_name}
                  </Link>
                </td>
                <td>{item.series_total}</td>
                <td>{item.series_won}</td>
                <td>{item.match_won}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />
    </section>
  )
}

export default ClubesTeams
