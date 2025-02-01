import FixtureContainer from './FixtureContainer'

const Playoffs = ({ playoffs }) => {
  return playoffs.map((item, index) => (
    <div
      className='text-center mb-3'
      key={index}
    >
      <h1 className='italic text-primary mb-3'>{item.name}</h1>
      <FixtureContainer
        group_id={item.id}
        type={item.type}
      />
    </div>
  ))
}

export default Playoffs
