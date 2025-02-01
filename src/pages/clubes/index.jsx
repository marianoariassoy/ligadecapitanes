import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Teams from './Teams'
const ClubesContainer = () => {
  let { id } = useParams()
  const { data, loading } = useFetch(`/clubes/${id}`)
  if (loading) return <Loader />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <div className='text-sm text-center flex flex-col gap-y-1 items-center'>
        <div className='avatar'>
          <div className='w-20 rounded-full'>
            <img
              src={data[0].image}
              alt={data[0].name}
              width='112'
              height='112'
            />
          </div>
        </div>
        <h1 className='font-semibold text-base text-primary'>{data[0].name}</h1>
        <div>
          <p>{data[0].location}</p>
          {data[0].phone && <p className='font-medium'>Tel. {data[0].phone}</p>}
        </div>
        <div>
          {data[0].googlemaps && (
            <p className='font-medium'>
              <a
                href={data[0].googlemaps}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Google Map
              </a>
            </p>
          )}
          {data[0].whatsapp && (
            <p className='font-medium'>
              <a
                href={`https://wa.me/${data[0].whatsapp}`}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                WhatsApp
              </a>
            </p>
          )}
          {data[0].instagram && (
            <p className='font-medium'>
              <a
                href={data[0].instagram}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Instagram
              </a>
            </p>
          )}
          {data[0].facebook && (
            <p className='font-medium'>
              <a
                href={data[0].facebook}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Facebook
              </a>
            </p>
          )}
          {data[0].web && (
            <p className='font-medium'>
              <a
                href={data[0].web}
                target='_blank'
                rel='noopener noreferrer'
                className='text-primary link-hover'
              >
                Web
              </a>
            </p>
          )}
        </div>
      </div>

      <Teams id={id} />

      <Helmet>
        <title>IML Tenis {data[0].name}</title>
      </Helmet>
    </section>
  )
}

export default ClubesContainer
