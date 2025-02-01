import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Loader from '../../components/Loader'
import useFetch from '../../hooks/useFetch'
import { rankingOptions } from '../../lib/data'
import Labels from '../../components/Labels'
import TitleRow from '../../components/TitleRow'
import Header from '../../components/Header'

const JugadoresRanking = () => {
  const { data, loading } = useFetch(`/players/ranking/4`)
  const [filter, setFilter] = useState(9)

  if (loading) return <Loader />

  const filteredPlayers = data.filter(player => +player.tournament_category === filter || filter === 'all')

  const labels = [
    {
      name: 'Nombre',
      value: ''
    },
    {
      name: 'Equipo',
      value: ''
    },

    {
      name: 'Pts.',
      value: 'Puntos'
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
      name: 'PJ',
      value: 'Parciales jugados'
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title='Ranking Headshoes'
        description='Clausura 2024'
      />

      <div className='row flex gap-3 justify-center text-sm flex-wrap max-w-xl m-auto'>
        {rankingOptions.map(item => (
          <button
            key={item.category}
            className={`btn-filter ${
              item.category === filter ? 'text-primary' : 'opacity-70 hover:text-primary hover:opacity-100'
            } `}
            onClick={() => setFilter(item.category)}
          >
            {item.name}
          </button>
        ))}
      </div>

      {filteredPlayers.length === 0 ? (
        <p className='text-center text-sm text-primary'>No hay jugadores para mostrar</p>
      ) : (
        <>
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
                {filteredPlayers.slice(0, 30).map((item, index) => (
                  <tr
                    key={item.id}
                    className={`${index === 0 && 'text-primary'}`}
                  >
                    <TitleRow
                      num={index + 1}
                      image={item.image}
                      title={item.name}
                      link={`/jugadores/${item.id}`}
                    />
                    <td>
                      <Link
                        to={`/equipos/${item.team_id}`}
                        className='hover:text-primary font-bold'
                      >
                        {item.team_name}
                      </Link>
                    </td>
                    <td>
                      <span className='font-bold'>{item.matches_won}</span>
                    </td>
                    <td>{item.sets}</td>
                    <td>{item.games}</td>
                    <td>{item.matches_total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Labels labels={labels} />
        </>
      )}

      <Helmet>
        <title>IML Tenis Ranking de Jugadores Headshoes</title>
      </Helmet>
    </section>
  )
}

export default JugadoresRanking
