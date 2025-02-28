import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactGA from 'react-ga4'
import Layout from './layout/Layout'
import Welcome from './pages/home'
import Tournaments from './pages/torneos'
import Teams from './pages/equipos'
import Series from './pages/series'
import OrdenDeJuego from './pages/torneos/OrdenDeJuego'
import Clubes from './pages/clubes'
import JugadoresProfile from './pages/jugadores/Perfil'
// import RankingJugadores from './pages/rankings/Jugadores'
import RankingCampeones from './pages/rankings/Campeones'
import Jugadores from './pages/jugadores'
// import TorneosAnteriores from './pages/torneos-anteriores'
import Reglamento from './pages/reglamento'
import Nosotros from './pages/nosotros'
import RegistrarUsuario from './pages/usuarios/RegistrarUsuario'
import RestablecerPassword from './pages/usuarios/RestablecerPassword'
import Presentacion from './pages/presentacion'
import Soon from './pages/Soon'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  ReactGA.initialize('G-0ZMTELW8GH')

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/presentacion'
            element={<Presentacion />}
          />
          <Route
            path='/'
            element={<Welcome />}
          />
          <Route
            path='/torneos/:id'
            element={<Tournaments />}
          />
          <Route
            path='/equipos/:id'
            element={<Teams />}
          />
          <Route
            path='/series/:id'
            element={<Series />}
          />
          {/*
          <Route
            path='/ranking/jugadores'
            element={<RankingJugadores />}
          />
         */}
          {/* <Route
            path='/torneos-anteriores'
            element={<TorneosAnteriores />}
          /> */}

          <Route
            path='/reglamento'
            element={<Reglamento />}
          />
          <Route
            path='/clubes/:id'
            element={<Clubes />}
          />
          <Route
            path='/ranking/campeones'
            element={<RankingCampeones />}
          />
          <Route
            path='/orden-de-juego'
            element={<OrdenDeJuego />}
          />
          <Route
            path='/jugadores/:id'
            element={<JugadoresProfile />}
          />
          <Route
            path='/jugadores'
            element={<Jugadores />}
          />
          <Route
            path='/nosotros'
            element={<Nosotros />}
          />
          <Route
            path='/bienvenido'
            element={<RegistrarUsuario />}
          />
          <Route
            path='/usuarios/restablecer-password'
            element={<RestablecerPassword />}
          />
          <Route
            path='/soon'
            element={<Soon />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
