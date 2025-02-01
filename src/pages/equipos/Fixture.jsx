import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Fixture from '../torneos/Fixture'

const TeamsFixture = ({ id }) => {
  const { data, loading } = useFetch(`/teams/${id}/fixture`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <Fixture
      data={data}
      type={2}
    />
  )
}

export default TeamsFixture
