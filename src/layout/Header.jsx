import { Link } from 'react-router-dom'
import { Bars, Instagram } from '../lib/icons'

const Header = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <div className='navbar w-full px-5 bg-base-100/90 backdrop-blur'>
      <div className='navbar-start'>
        <div
          className='dropdown'
          onClick={openMenu}
        >
          <label className='cursor-pointer hover:text-primary text-secondary'>
            <Bars />
          </label>
        </div>
      </div>
      <div className='navbar-center text-primary logo-main transition-all text-base'>
        <Link to='/'>
          <img
            src='/assets/images/logo.png'
            alt='logo'
            className='h-20 w-auto'
          />
        </Link>
      </div>
      <div className='navbar-end text-secondary'>
        <a
          href='https://www.instagram.com/ligadecapitanes'
          target='_blank'
          rel='noopener noreferrer'
          className='hover:text-primary'
        >
          <Instagram />
        </a>
      </div>
    </div>
  )
}

export default Header
