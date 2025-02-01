import { Helmet } from 'react-helmet'

const Soon = () => {
  return (
    <div className='fade-in flex flex-col gap-y-3 items-center justify-center h-full'>
      <h1 className='text-3xl'>🚀</h1>
      <span className='text-primary text-center text-sm font-semibold'>¡Muy pronto!</span>

      <Helmet>
        <title>Liga de Capitanes</title>
      </Helmet>
    </div>
  )
}

export default Soon
