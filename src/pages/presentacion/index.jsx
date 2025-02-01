import { Helmet } from 'react-helmet'
import Item from './Item'
import Counter from '../Counter'
import Whatsapp from '../../components/Whatsapp'

const Presentacion = () => {
  const data = [
    {
      title: '🤔 ¿Qué necesito para realizar la inscripción?',
      text: `Para inscribirte necesitás leer la información completa de cómo se lleva adelante el torneo y armar tu equipo con un máximo de 20 jugadores. Tener o alquilar 3 canchas de tenis de la misma superficie para poder hacer de local.`
    },
    {
      title: '📅 Fechas',
      text: `Inicio del torneo: <strong>Sábado 8 de Marzo.</strong><br />
Cierre de Inscripción: <strong>Sábado 1 de Marzo.</strong>`
    },
    {
      title: '🏆 ¿Cómo es el formato de juego y del torneo?',
      text: `En todas las categorías se disputarán <strong >1 single y 2 dobles.</strong> 
      Todos los partidos se disputarán al mejor de 3 sets, con tie break. El tercer set será Super Tie break a 10 puntos con diferencia de dos.<br/>
      Todos los resultados y el reglamento general podrán ser vistos en este sitio web.`
    },
    {
      title: '⭐ ¿En qué categorías puedo inscribirme?',
      text: `Intermedia +35 y Segunda +35.`
    },
    {
      title: '🌍 ¿Dónde se juega?',
      text: `Cada equipo <strong >representa a un club o barrio</strong> que jugará de local reservando o alquilando cancha según corresponda. Zonas de juego: Zona Norte.`
    },
    {
      title: '🕛 ¿Qué día y horario se juega por categoría?',
      text: `Sábados de <strong>13 a 17 hs.</strong> <br/>
      Cada equipo puede elegir el horario cuando actúa de local.`
    },
    {
      title: '🤔 ¿Hay un mínimo de encuentros o series a disputar?',
      text: `No podemos saber con exactitud cuantas series se disputarán por categoría pero garantizamos 10 series por equipo.`
    },
    {
      title: '🎾 Pelotas',
      text: `Las pelotas serán responsabilidad del <strong >equipo visitante</strong>, deben ser nuevas o con un solo uso reciente, puediendo ser sueltas o de tubo presurizado.`
    },
    {
      title: '💵 ¿Cuál es el valor y como abonar la inscripción por cada equipo?',
      text: `
      <strong>Hasta el 1 de Marzo $180.000.- </strong><br/><br/>
      Cominucate con el área administrativa al WhatsApp +54 9 11 3017-1475 <br/>
      Consulta descuentos por cantidad de equipos.`
    },
    {
      title: '😀 ¿Cómo llevo adelante la inscripción?',
      text: `Cada equipo deberá tener un capitán responsable, quien será el encargado de realizar la inscripción y de enviar la lista de buena fe de su equipo hasta la fecha indicada. `
    }
  ]

  return (
    <section className='fade-in flex flex-col gap-y-6 max-w-2xl m-auto'>
      <div className='flex flex-col items-center -mb-2'>
        <div className='text-3xl text-center'>🏆</div>
        <Counter />
      </div>
      <div className='aspect-square lg:aspect-video'>
        <img
          className='w-full h-full object-cover'
          src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGR4c3cwejBvZ3B6aGZqNGp3dWQxcDVvdnhoaXlwb28yNjZrZmhubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tF1ZsBWuQZLeTguoxL/giphy.gif'
        />
      </div>

      <article className='text-sm flex flex-col gap-y-3'>
        <p>
          Llega el <span className='text-primary font-medium'>Torneo Apertura 2025 </span>a la Liga de Capitanes.
          <br />
          Representá a tu barrio o club en un torneo donde el tenis, la amistad y la competencia se encuentran cada fin
          de semana. Disfrutá de cada partido en un ambiente organizado, con rankings actualizados y un{' '}
          <span className='text-primary font-medium'>cierre de temporada lleno de premios y reconocimientos.</span>
          <br />
          Vas a jugar en <span className='text-primary font-medium'>tus canchas, con tus pelotas, en tu torneo</span> y
          también conocer nuevos lugares y jugadores, sumándote a una comunidad que comparte la pasión por el tenis.{' '}
          <br />
          ¡No te quedes afuera de esta gran liga amateur{' '}
          <span className='text-primary font-medium'>para tenistas hecha por tenistas!</span>
        </p>
      </article>
      {data.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          text={item.text}
        />
      ))}
      <div className='text-primary text-sm'>
        Inscribite o consultanos al <span className='font-semibold'>WhatsApp</span>{' '}
        <a
          href='https://wa.me/5491130171475'
          className='hover:underline font-semibold'
          target='_blank'
        >
          +54 9 11 3017-1475
        </a>
      </div>
      <div className='text-primary font-semibold text-sm'>Tus canchas, tus pelotas, tu torneo</div>
      <div className='aspect-square lg:aspect-video overflow-hidden'>
        <img
          className='w-full h-full object-cover block'
          src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3ZlN240OTZtNjg4cmpzM2QzZzR2c2w3Y2g0ZmM2MmRoM2t0eWQxNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y1MeqfciK2QBPQ8AOR/giphy.gif'
        />
      </div>
      <Helmet>
        <title>Liga de Capitanes Presentación</title>
      </Helmet>
      <Whatsapp />
    </section>
  )
}

export default Presentacion
