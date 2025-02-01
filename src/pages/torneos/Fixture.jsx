import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bull } from '../../lib/icons'
import FixtureFilter from './FixtureFilter'
import TeamItem from '../../components/TeamItem'

const Fixture = ({ data, type }) => {
  const [filters, setFilters] = useState('all')
  const filteredData = data.filter(item => item.winner === filters || filters === 'all')

  return (
    <section className='fade-in'>
      {+type !== 1 && (
        <div>
          <h1 className='italic text-primary text-center mb-2'>Fixture</h1>
          <FixtureFilter
            filters={filters}
            setFilters={setFilters}
          />
        </div>
      )}

      <div className='overflow-x-auto text-sm'>
        <table
          className='table w-full'
          summary='Fixture'
        >
          {filteredData.length > 0 && (
            <thead>
              <tr>
                <th
                  scope='col'
                  width='50'
                  className='pl-0'
                >
                  Fecha
                </th>
                <th
                  scope='col'
                  width='50'
                >
                  Hora
                </th>
                <th
                  scope='col'
                  width='260'
                >
                  Local
                </th>
                <th
                  scope='col'
                  className='text-center'
                >
                  Score
                </th>
                <th scope='col'>Visitante</th>
                <th scope='col'>Serie</th>
              </tr>
            </thead>
          )}

          <tbody>
            {filteredData.map(item => (
              <tr
                key={item.id}
                className={item.winner || item.status === 2 ? 'opacity-50 grayscale' : ''}
              >
                <td
                  scope='row'
                  className='pl-0'
                >
                  <div className='flex gap-x-2 items-center'>
                    {item.winner || item.status === 2 ? <Bull /> : null}
                    <span className='font-semibold'>{item.date}</span>
                  </div>
                </td>
                <td>{item.hour}</td>
                <td className='lg:whitespace-normal'>
                  <TeamItem
                    id={item.home_id}
                    name={item.home_name}
                    image={item.home_image}
                  />
                </td>
                <td className='text-center'>
                  {item.winner ? (
                    <Link
                      to={`/series/${item.id}`}
                      className='hover:text-primary font-bold'
                    >
                      {item.score_home}-{item.score_away}
                    </Link>
                  ) : item.status === 1 ? (
                    <span className='bg-base-300 p-1 text-xs rounded-md'>REV</span>
                  ) : item.status === 2 ? (
                    <span className='bg-primary p-1 text-white text-xs rounded-md'>SUS</span>
                  ) : (
                    '-'
                  )}
                </td>
                <td className='lg:whitespace-normal'>
                  <TeamItem
                    id={item.away_id}
                    name={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td>
                  <Link
                    to={`/series/${item.id}`}
                    className='hover:text-primary'
                  >
                    {item.id}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filters !== null && filteredData.length === 0 && (
          <div className='text-center text-primary mb-3 font-bold'>No hay series 🥲</div>
        )}
      </div>
    </section>
  )
}

export default Fixture
