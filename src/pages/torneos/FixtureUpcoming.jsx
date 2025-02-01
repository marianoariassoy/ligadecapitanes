import { Link } from 'react-router-dom'
import TeamItem from '../../components/TeamItem'

const Fixture = ({ data }) => {
  return (
    <section className='fade-in'>
      <div className='overflow-x-auto text-sm'>
        <table
          className='table w-full'
          summary='Fixture'
        >
          <thead>
            <tr>
              <th scope='col'>Fecha</th>
              <th scope='col'>Hora</th>
              <th scope='col'>Local</th>
              <th scope='col'>Visitante</th>
              <th scope='col'>Categoría</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td scope='row'>
                  <div className='flex gap-x-2 items-center'>
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
                <td className='lg:whitespace-normal'>
                  <TeamItem
                    id={item.away_id}
                    name={item.away_name}
                    image={item.away_image}
                  />
                </td>
                <td>
                  <Link
                    to={`/torneos/${item.tournament_id}`}
                    className='hover:text-primary'
                  >
                    {item.tournament_name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Fixture
