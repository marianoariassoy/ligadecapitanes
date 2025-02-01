const FixtureFilter = ({ filters, setFilters }) => {
  const options = [
    {
      name: 'Todo',
      value: 'all'
    },
    {
      name: 'Por jugar',
      value: false
    },
    {
      name: 'Jugados',
      value: true
    }
  ]

  return (
    <div className='grid grid-cols-3 text-center text-sm mb-1 lg:mb-3 m-auto w-60'>
      {options.map((item, index) => (
        <button
          key={index}
          className={`font-medium ${
            filters === item.value ? 'text-primary' : 'opacity-50 hover:opacity-100  hover:text-primary'
          }`}
          onClick={() => setFilters(item.value)}
        >
          {item.name}
        </button>
      ))}
    </div>
  )
}

export default FixtureFilter
