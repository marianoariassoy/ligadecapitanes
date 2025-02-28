import { WhatsApp } from '../lib/icons'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='p-6 mt-6'>
      <div className='text-sm text-center flex flex-col justify-center items-center'>
        <div>
          <span className='font-bold'>Liga de capitanes {year}</span>
        </div>
        <div className='flex gap-x-1 items-center flex-wrap justify-center'>
          <span>
            <a
              href='https://wa.me/5491130171475'
              className='hover:underline flex items-center gap-x-2'
            >
              <WhatsApp />
              <span>11 3017 1475</span>
            </a>
          </span>
          <span>-</span>
          <span>
            <a
              href='mailto:hola@imltenis.com.ar'
              className='hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              hola@ligadecapitanes.com.ar
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
