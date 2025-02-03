import { Helmet } from 'react-helmet'
import Header from '../../components/Header'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <Header
        title='¡Hola!'
        emoji='👋'
      />

      <div className='flex flex-col gap-y-3 text-sm [&>p>span]:text-primary'>
        <p>
          Somos un <span>grupo de capitanes unidos</span> por la pasión, la amistad y la competencia. Creamos este
          torneo para quienes viven y disfrutan el tenis como nosotros. Cada detalle está pensado para que te sientas
          parte de esta comunidad, bajo la consigna: <span>tus canchas, tus pelotas, tu torneo.</span>
        </p>
        <p>
          No es solo una competencia, es una experiencia hecha a tu medida, donde cada punto, cada set y cada partido
          reflejan todo lo que amamos de este deporte.
        </p>
        <p>
          Sabemos que el tenis es más que un juego; es esfuerzo, estrategia y emoción en cada golpe. Por eso, queremos
          que disfrutes de un torneo auténtico, donde puedas desafiarte, mejorar tu nivel y{' '}
          <span>compartir grandes momentos con otros jugadores </span> que, como tú, entienden lo que significa estar en
          la cancha y al mismo tiempo, disfrutan todo lo que este maravilloso deporte nos brinda fuera de ella.
        </p>
        <p>
          Así que preparate para vivir el torneo en su máxima expresión. Trae tu mejor juego, deja todo en la cancha y
          demostrá que este es tu momento. ¡El desafío comienza ahora!
        </p>
        <p>
          <span>¡Bienvenido a la Liga que realmente te pertenece!</span> Sumate y sé parte de nuestra comunidad,
          <span> para tenistas y por tenistas.</span>
        </p>
      </div>

      <Helmet>
        <title>Nosotros - Liga de Capitanes</title>
      </Helmet>
    </section>
  )
}

export default Nosotros
