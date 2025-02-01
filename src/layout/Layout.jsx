import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky top-0 z-50 mb-3'>
        <Header />
        <Menu />
      </header>
      <main className='mx-auto px-4 max-w-4xl w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
