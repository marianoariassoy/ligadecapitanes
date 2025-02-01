import { Helmet } from 'react-helmet'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import FixtureUpcoming from './FixtureUpcoming'
import Header from '../../components/Header'
import Messages from '../../components/Messages'

const OrdenDeJuego = () => {
  const { data, loading } = useFetch(`/series/upcoming`)
  const [filterText, setFilterText] = useState('')

  if (loading) return <Loader />
  if (!data) return <Messages text='No hay series por disputar 🥲' />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const filteredData = filterText
    ? data.filter(
        item =>
          item.home_name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.away_name.toLowerCase().includes(filterText.toLowerCase())
      )
    : data

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header title={`Próximas Series (${filteredData.length})`} />

      <input
        type='text'
        placeholder='Buscar equipo'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm max-w-md mx-auto'
      />

      <FixtureUpcoming data={filteredData} />

      <Helmet>
        <title>Liga de Capitanes Orden de juego</title>
      </Helmet>
    </section>
  )
}

export default OrdenDeJuego
