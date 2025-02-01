import Groups from './Groups'
import FixtureContainer from './FixtureContainer'

const Tournaments = ({ data }) => {
  return (
    <>
      <Groups
        group={data}
        tournament={data.id}
      />

      <FixtureContainer
        group_id={data.id}
        type={data.type}
      />
    </>
  )
}

export default Tournaments
