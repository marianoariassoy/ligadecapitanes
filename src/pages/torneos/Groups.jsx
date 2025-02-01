import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'
import { Bull } from '../../lib/icons'

const TournamentsGroup = ({ group }) => {
  const { data, loading } = useFetch(`/${group.type == 3 ? 'groups-stage2' : 'groups'}/teams/${group.id}`)
  if (loading) return <Loader />

  const labels = [
    {
      name: 'Equipo',
      value: ''
    },
    {
      name: 'Pts.',
      value: 'Puntos (parciales)'
    },
    {
      name: 'SG',
      value: 'Series ganadas'
    },
    {
      name: 'DS',
      value: 'Diferencia de sets'
    },
    {
      name: 'DG',
      value: 'Diferencia de games'
    },
    {
      name: 'SJ',
      value: 'Series jugadas'
    },
    {
      name: 'Ult. 5 series',
      value: ''
    }
  ]

  return (
    <section className='flex flex-col mb-6'>
      <div className='overflow-x-auto text-sm mb-3'>
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
                className={`${index < group.winners ? 'text-primary' : ''}`}
              >
                <TitleRow
                  num={index + 1}
                  image={`https://imltenis.com.ar/images/${item.image ? item.image : item.club_image}`}
                  title={item.name}
                  link={`/equipos/${item.id}`}
                />
                <td>
                  <span className='font-bold'>{item.match_won}</span>
                </td>
                <td>{item.series_won}</td>
                <td>{item.sets}</td>
                <td>{item.games}</td>
                <td>{item.series_total}</td>
                <td>
                  <div className='flex gap-x-2'>
                    {item.series.map((item, index) => (
                      <span key={index}>
                        {item ? (
                          <span className='text-primary'>
                            <Bull />
                          </span>
                        ) : (
                          <span className='text-white/30'>
                            <Bull />
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Labels labels={labels} />

      <div className='text-center text-sm mt-3'>
        🚀 <span className='opacity-70 whitespace-break-spaces'>{group.tournament_description}</span>
      </div>
    </section>
  )
}

export default TournamentsGroup
