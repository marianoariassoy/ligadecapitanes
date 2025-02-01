import { NavLink } from 'react-router-dom'
import { menu, categories } from '../lib/data'

const Menu = () => {
  const openMenu = () => {
    const menu = document.querySelector('nav')
    menu.classList.toggle('hidden')
    menu.classList.toggle('grid')
  }

  return (
    <nav
      className='fade-in fixed top-0 left-0 w-full bg-black/40 h-screen content-center text-center backdrop-blur-md hidden'
      onClick={openMenu}
    >
      <ul className='italic text-lg mb-3'>
        {categories.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.url}
              className='nav-link text-primary'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <ul className='text-white/70 flex flex-col font-medium lg:text-base'>
        {menu.map((item, index) => (
          <li key={index + 12}>
            <NavLink
              to={item.url}
              className='nav-link'
            >
              {item.name}
            </NavLink>
          </li>
        ))}
        {/* <li>
          <a
            href='https://usuarios.imltenis.com.ar/'
            target='_blank'
            rel='noopener noreferrer'
            className='nav-link'
          >
            Capitanes
          </a>
        </li> */}
      </ul>
    </nav>
  )
}

export default Menu
