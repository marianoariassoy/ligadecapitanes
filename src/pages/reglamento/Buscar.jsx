import React from 'react'

const Buscar = ({ filterText, handleFilterChange }) => {
  return (
    <div className='max-w-md m-auto'>
      <input
        type='text'
        placeholder='Buscar'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm'
      />
    </div>
  )
}

export default Buscar
