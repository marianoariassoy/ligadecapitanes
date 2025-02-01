import { Helmet } from 'react-helmet'
import Header from '../../components/Header'

const Nosotros = () => {
  return (
    <section className='fade-in text-center max-w-2xl m-auto flex flex-col gap-y-6'>
      <Header
        title='¡Hola!'
        emoji='👋'
      />

      <div className='flex flex-col gap-y-3 text-sm'>
        <p>
          Creamos este torneo pensado para quienes viven y disfrutan el tenis como nosotros. Cada detalle está diseñado
          para que vivas <span className='text-primary'>tus canchas, tus pelotas, tu torneo.</span> <br />
          No es solo una competencia, es una experiencia hecha a tu medida, donde cada punto, cada set y cada partido
          reflejan la pasión que compartimos por este deporte.
        </p>

        <p>
          Sabemos que el tenis es más que un juego; es esfuerzo, estrategia y emoción en cada golpe. Por eso, queremos
          que disfrutes de un torneo auténtico, donde puedas desafiarte, mejorar tu nivel y compartir grandes momentos
          con otros jugadores que, como tú, entienden lo que significa estar en la cancha.
        </p>

        <p>
          Así que preparaté para vivir el torneo en su máxima expresión. Trae tu mejor juego, deja todo en la cancha y
          demostrá que este es tu momento. Bienvenido a la competencia que realmente te pertenece. ¡Nos vemos en la
          cancha!
        </p>
      </div>

      <Helmet>
        <title>Liga de Capitanes Nosotros</title>
      </Helmet>
    </section>
  )
}

export default Nosotros
