import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Item from './Item'
import Buscar from './Buscar'
import Header from '../../components/Header'

const Reglamento = () => {
  const [filterText, setFilterText] = useState(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const data = [
    {
      title: '',
      text: `El presente reglamento pretende dejar aclaradas algunas situaciones y factores de ordenamiento a lo largo de los torneos. No obstante, ratificamos que respetar el objeto y los valores fundacionales tal como "la buena fe deportiva" en la declaración de aptitud o nivel de cada jugador, así como en el armado de los equipos, supera cualquier norma que pretendamos establecer.`
    },
    {
      title: 'Inscripción de Equipos y Formaciones',
      text: `Como norma general, los equipos deben estar integrados por jugadores +35 (mayores de 35 años o que cumplan esa edad durante el año calendario en el que se desarrolle el torneo). No obstante, se podrán incluir en la lista de buena fe jugadores menores de 35 años, siempre que sean +30 y en la medida que para integrar alguna formación cumplan con las siguientes condiciones:
a) Solo podrán participar en uno de los tres puntos en juego de cada serie;
b) Con carácter previo al inicio de los partidos, el capitán del equipo que haga uso de esta excepción deberá notificar al capitán del equipo rival en cuál de los tres puntos de la formación, participará/n el/los jugador/es comprendido/s en dicha franja etaria (+30 y sub35). Esa elección será libremente decidida por del capitán del equipo al que pertenecen los jugadores exceptuados;
c) Las restantes posiciones de esa formación tendrán que ser cubiertas con jugadores +35;
No se fijan topes respecto de la cantidad de jugadores que, bajo estas condiciones, se inscriban por equipo dentro de su lista de buena fe.

Ningún jugador podrá estar incluido en forma simultánea en la lista de buena fe de dos o más equipos distintos dentro de un mismo torneo. No obstante, un jugador que participa en una categoría inferior podrá jugar en otra inmediata superior -dentro del mismo calendario del torneo-, solo para completar la formación de un equipo que represente al mismo barrio, club o country al que pertenece su equipo original. Nunca el reemplazo podrá realizarse en sentido inverso, es decir de la categoría más alta a la más baja. A los fines de su registración sistémica, los suplentes naturales provenientes de una categoría más baja, además de figurar en la nómina inscripta para su equipo original, deberán agregarse a continuación del último jugador que conforma la lista de buena fe del equipo participante en la categoría más alta.

Los equipos que participen por primera vez podrán anotarse en la categoría que crean que es la adecuada a su nivel de juego. Sin perjuicio de ello, la organización podrá recomendar, conforme a la expectativa de fixture a armar y en conocimiento del nivel de juego de cada torneo, la inscripción en una categoría diferente. Para la conformación de las zonas al momento del sorteo del fixture, si fuese necesaria la inclusión de algún equipo, se tendrá en cuenta el historial de torneos anteriores.

Tal el espíritu fundacional de esta Liga basado en la “Buena fe deportiva”, se apela a la “Buena formación”, en cuanto a la declaración de competitividad de cada jugador integrante de un equipo como a la conformación del equipo para cada jornada y su participación en la categoría más acorde a su nivel real, por lo que una buena formación es aquella en la que se sigan las siguientes reglas:

- Como singlista o como doblistas pueden presentarse cualquiera de los cinco jugadores listados para participar de una serie, en la medida que cumplan con el requisito de partidos mínimos jugados previamente, en caso de que ello corresponda a la instancia que se está disputando.

- En caso de incluirse a un jugador +30 pero menor de 35, su capitán podrá ubicarlo en cualquiera de los tres partidos correspondientes a la serie en disputa (Single, Doble 1 o Doble 2), previa notificación de su decisión al capitán del equipo rival. Solo podrá hacerse uso de esta excepción en uno y solo uno de los tres puntos en juego. Esto implica que como máximo, solo dos jugadores menores de 35 podrán ser de la partida dentro de la formación de su equipo para una serie en particular.

- Los restantes jugadores podrán ubicarse en cualquiera de las posiciones no especificadas.

- Las edades a computar a los fines de verificar los requisitos previos, serán las que se cumplan dentro del año calendario en el que se está desarrollando el torneo.

Los jugadores de los equipos que se presenten para jugar la Final y la Semifinal de cada categoría o copa deberán haber jugado como mínimo una fecha durante las etapas previas del torneo, y las listas con la integración de su formación para esos cruces deberán ser presentadas a la Organización con 24 horas de antelación al inicio de la serie, en la fase de definición de los “playoff”. Los capitanes de esos equipos tendrán derecho a requerir la formación declarada por sus rivales, por lo que -encontrándose anoticiados de la misma- una vez iniciado el primero de los partidos perderán toda posibilidad de reclamo o impugnación.

Similar procedimiento deberá cumplirse al inicio de las restantes series que se jueguen en las fases de “round robin” y en las de “play off” anteriores a las semifinales y finales de cada copa: al momento de presentarse en cancha -y previo al inicio de los partidos- los capitanes de cada equipo deberán intercambiar una planilla con el detalle de los jugadores seleccionados para integrar sus formaciones, con las formalidades que la Organización establezca. 

Todo jugador que haya sido o sea jugador de primera o profesor debe estar declarado en la etapa de inscripción y su inclusión será sometida a aprobación de la Organización antes del inicio del torneo. De ser autorizado, no podrá jugar el punto de singles y solo podrá participar en la categoría más alta habilitada.

En la etapa de inscripción y al momento de completarse la lista de buena fe, deberán incluirse los datos completos de cada jugador (nombre, DNI, fecha de nacimiento, celular y correo electrónico). En la medida que el sistema lo permita, se podrá requerir también acompañar dicha información con una foto de cada inscripto.

Cuando un equipo quede imposibilitado o con dificultad de armar y presentar su formación completa para una serie, por razones de fuerza mayor, y su capitán considere que tiene jugadores que no han participado y/o que no continuarán jugando el torneo, podrá solicitar a la Organización su reemplazo por jugadores suplentes, reemplazo que será definitivo durante el torneo en curso.

Si algún equipo se retirase antes del sorteo del fixture, se le reintegrará el importe abonado en concepto de inscripción. Con posterioridad a esa fecha, la Organización podrá desestimar cualquier reclamo por devolución total o parcial del monto recibido. 

En el momento del sorteo se establecerá para cada equipo la cantidad de partidos que jugará como local y visitante, los que en tal sentido deberán ser, en la medida de lo posible, por partes iguales.`
    },

    {
      title: 'Provisión de pelotas',
      text: `Para cada serie se deberán usar pelotas nuevas, en tubos o sueltas, salvo acuerdo en contrario entre los capitanes. El equipo visitante será el encargado de proveer las pelotas para cada encuentro.

En caso de acordarlo entre capitanes, los tubos o pelotas sueltas que no sean a estrenar, podrán contar con hasta con un uso, entendiendo a tal fin que deben mantener la presión y el pique de una pelota nueva, mientras que la felpa debe permitir que se aprecien con absoluta claridad e integridad el logotipo y/o el isotipo de la marca.

Se recomienda que el capitán del equipo visitante envíe imágenes a su par local que den cuenta del real estado de las pelotas antes de su visita al club o barrio anfitrión, llevando siempre al encuentro tres juegos de tres pelotas nuevas como alternativa en caso que al momento de comenzar a jugar no se cumplan las condiciones indicadas en el párrafo anterior, y el capitán del equipo local así lo solicite.
`
    },
    {
      title: 'Modalidad de los partidos',
      text: `El resultado de cada encuentro o cruce del fixture se definirá en favor del equipo que resulte ganador en al menos dos de los tres parciales a jugar en esa fecha. Estos parciales son los partidos que se jugarán de acuerdo a la siguiente modalidad: un (1) single y dos (2) dobles.

Todos los partidos se disputarán a dos (2) sets, cada uno con definición en Tie Break a siete (7) puntos con diferencia de dos (2). En caso de empate en un set por lado se dará una definición por Super Tie Break a diez (10) puntos con diferencia de dos.

La clasificación general o de alguna zona dentro de una etapa específica de la competencia se definirá a favor del equipo que haya ganado mayor cantidad de series. Todo empate en puntos dentro de esa clasificación se resolverá de acuerdo a la mayor cantidad de parciales (partidos de cada serie) ganados dentro de esa etapa en primer lugar, o dentro de toda la competencia en general, en caso de persistir la igualdad. De mantenerse la paridad, se considerará la cantidad de sets ganados, en primer término, y la de los games ganados si subsiste la condición de igualdad. A estos fines, los super tie breaks jugados se considerarán equivalentes a un set. Si considerados todos los criterios anteriores no se logra desempatar la situación, se atenderá al último resultado directo entre los equipos igualados, salvo que el empate se de entre más de dos equipos y los resultados directos entre ellos arrojen idéntico número de victorias, caso en el que deberá recurrirse al sorteo como método de definición.

La forma de definición y los criterios para establecer los ascensos y descensos entre categorías, dependerán de la cantidad de equipos inscriptos en cada edición y serán detallados en el anexo respectivo que forma parte integrante del presente reglamento, reservándose la Organización -con carácter previo al inicio de cada competencia-, la potestad de ascender o descender de categoría a equipos o jugadores, tanto de oficio como a pedido de sus capitanes (Anexo I: El Campeonato).

En el caso que un equipo se presente incompleto, podrá jugar dos de los tres parciales dando por perdido el Doble 2 o el Single. Recomendamos en principio el acuerdo entre los capitanes sobre qué partido se da de baja, la regla como tal aplica si no hay acuerdo.

Los tres partidos de una fecha deben jugarse simultáneamente y en el mismo lugar, siendo el día de la semana previsto para ello el sábado por la tarde, en el horario que el equipo local informó antes del inicio del torneo. Si por algún motivo el comienzo de la serie se retrasa, no es necesario que los tres puntos comiencen en simultáneo, eligiendo el equipo visitante cuál de los puntos comienza primero. Como en todos los casos recomendamos la voluntad de acordar entre los capitanes de dicho encuentro la solución más viable a fin de que la fecha pueda jugarse con normalidad.

Como excepción a la regla anterior, se permitirá disputar una serie en dos tandas (las que deberán jugarse una inmediatamente a continuación de la otra) cuando el equipo local cuente con solamente dos canchas disponibles -y haya notificado con suficiente anterioridad a la Organización de esta limitación-, descartándose de plano la posibilidad de que cualquier jugador dispute más de un partido dentro de una misma serie.

La serie suspendida o interrumpida por causa de fuerza mayor, debe reprogramarse de común acuerdo entre los capitanes en cuanto a la fecha y hora en que se jugará o completará. Se recomienda su realización lo más pronto posible para llegar a completar el torneo de acuerdo con los plazos previstos. En caso que la razón alegada no alcanzara para considerarse de fuerza mayor, recomendamos la buena voluntad entre los equipos para poder darle un tratamiento similar al de aquellos supuestos en que sí lo fuera.

Las reprogramaciones generales de fechas se harán al final del calendario originalmente previsto para cada torneo, sin perjuicio de la posibilidad de adelantar alguna serie que, por acuerdo entre los capitanes, pueda jugarse en día domingo o feriado, entre semana por la noche, o aprovechando cualquier fecha libre del cronograma.  

En el caso que la definición de una serie no pueda concretarse dentro de los plazos previstos para la finalización del torneo o de la etapa correspondiente, la Organización podrá establecer su resolución por sorteo.

Se deberá dar aviso con la mayor anticipación sobre la posible suspensión de fecha por quien la solicitara (48 horas como mínimo). En todos los casos deberá comunicarse a los capitanes restantes de modo de reordenar el torneo. Un tratamiento similar recomendamos que se otorgue en caso de que deba cambiarse el horario de una fecha, o ante la imposibilidad de presentar una formación completa.

La programación de partidos en fines de semana largos queda a criterio de la organización. Como se mencionara previamente, es una ocasión propicia para reprogramar partidos suspendidos y recuperar fechas atrasadas.

La serie reprogramada que no hubiera comenzado al momento de su suspensión por razones de fuerza mayor, será considerará como una serie nueva a todos los fines, pudiendo modificarse tanto la selección de los jugadores como la formación de cada equipo. En cambio, si hubieran sido suspendidos luego de ya iniciados, al momento de la reprogramación deberán reiniciarse con los resultados parciales, los jugadores participantes y la misma formación con la que comenzaron originalmente. El partido en el que un equipo a la fecha de reprogramación no pueda presentar alguno de los jugadores que fueron de la partida inicial, le será dado por perdido computando el resultado registrado hasta ese momento.

Si un equipo local se encontrara frente a la necesidad suspender un partido por compromisos que afecten la posibilidad de seguir utilizando sus canchas, se computará el resultado hasta ese momento y abandono local.

En cualquiera de los casos mencionados en los dos párrafos previos, al equipo ganador se le sumarán todos los sets y games restantes que resulten necesarios para completar el tanteador a su favor.
`
    },
    {
      title: 'Roles del Capitán de Equipo',
      text: `Cada equipo nombrará a uno de sus integrantes como Capitán. Este será el referente del Equipo y tendrá las siguientes tareas:

- Explicar a sus jugadores los principios fundacionales y espíritu del Torneo, así como las reglas de juego y de participación
- Elaborar las listas de buena fe y cargarlas en la web
- Inscribir el equipo en la categoría que corresponda 
- Abonar la inscripción correspondiente
- Informar a la Organización el horario en el que se programarán los partidos de su equipo a jugarse en condición de local
- Verificar que se cumplan todas las condiciones reglamentarias tanto de local como de visitante
- Cumplir y hacer cumplir todos los protocolos previos al encuentro
- Cargar los resultados de cada serie (Equipo ganador) y confirmarlos (Equipo perdedor) como máximo hasta 3 días luego de realizado el encuentro, a fin de no complicar el buen desarrollo del torneo
- Ambos capitanes deberán enviar fotos del juego durante la serie, así como de ambos equipos reunidos al final o comienzo del partido, para ser publicados en las redes sociales de la liga.

En caso de considerarlo necesario, la Organización podrá requerir el cambio de capitanía o bien, solicitar la designación de un subcapitán, a efectos de facilitar la comunicación y gestionar de manera más diligente las cuestiones organizativas de cada serie a desarrollarse. Es requisito para ello que el subcapitán sea un integrante de la lista de buena fe del equipo al que se le efectúe este planteo.

Se recomienda que, durante el desarrollo del juego, no se intercambie con los jugadores pareceres, comentarios y/o se efectúen directivas. Toda interacción entre el capitán y sus jugadores deberá realizarse en los momentos en que el juego, por su propia dinámica, se encuentre detenido, por ejemplo, durante los cambios de lado, debiendo ser siempre efectuadas en tono discreto, respetuoso y sin distraer o molestar a ninguno de los jugadores que se hallan disputando el encuentro en esa cancha u otras aledañas.

Salvo acuerdo en contrario entre los capitanes, no está permitido el ingreso dentro de la cancha de los capitanes o de terceros ajenos a los jugadores designados a la misma -excepto para atención médica o fisioterapéutica-, en ningún momento del partido, ni siquiera durante los cambios de lados.
`
    },
    {
      title: 'Tercer Tiempo',
      text: `A fin de consolidar los valores explicitados de esta Liga, se incentiva fervientemente a mantener la costumbre del Tercer Tiempo luego de cada encuentro. La idea es compartir un momento de distensión y camaradería, un cordial intercambio para poder compartir experiencias y socializar. Se recomienda mantener la simplicidad de la ocasión, y dividir los costos en partes iguales.`
    },
    {
      title: 'Reglas de Juego',
      text: `Los partidos se regirán por las reglas de juego aprobadas por la Asociación Argentina de Tenis (AAT) y este Reglamento. El Torneo se iniciará en todas sus categorías y divisiones en las fechas que semestralmente se establezcan.

Cuando un Barrio o Club tenga dos o más equipos en la misma división, éstos se considerarán como Equipos distintos. Los jugadores de estos equipos no podrán jugar en ningún otro de la misma división a la que pertenezcan.

La Organización se encuentra facultada para sancionar y/o advertir a cualquier jugador o equipo que incumpla las reglas de la Liga, o que desarrolle conductas que atenten contra el armonioso y pacífico desenvolvimiento de las series. Cualquier inconveniente surgido durante el partido deberá ser resuelto por los participantes del mismo, y en caso de no lograr una solución, se permitirá la intervención de terceros, siempre y cuando exista un acuerdo previo entre los capitanes de los equipos involucrados.

Cualquier reclamo que verse sobre situaciones que puedan darse desde el comienzo de la competición y hasta su finalización, y que a criterio de alguna de las partes deba considerase que infringe este reglamento, deberá ser expresado a la Organización dentro de las 48 horas de finalizada la serie en cuestión. Caso contrario, el reclamo quedará sin efecto.

La Organización se reserva el derecho a modificar el presente reglamento cuando sea imperioso establecer, regular o fijar conductas o acciones que puedan generar conflictos o diversas interpretaciones, con el objeto de conducir a un mejor desenvolvimiento de las diversas competiciones. Frente a aspectos que no se encuentren específicamente normados o que razonablemente pudieran prestarse a una ambigua interpretación, se tomará una determinación que resuelva la cuestión en conflicto en base a la opinión mayoritaria de los capitanes integrantes de la Comisión Directiva convocados a tratar el tema, notificando su decisión a los capitanes de los equipos afectados, la cual será inapelable y generará un precedente a considerar ante otros conflictos asimilables y futuras modificaciones de este reglamento.
`
    }
  ]

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const dataFiltered = filterText
    ? data.filter(item => item.text.toLowerCase().includes(filterText.toLowerCase()))
    : data

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title='Reglamento Apertura 2025'
        emoji='📝'
      />

      <div>
        <Buscar
          filterText={filterText}
          handleFilterChange={handleFilterChange}
        />
      </div>
      <div className='md:columns-2 gap-8 text-sm'>
        {dataFiltered.map((item, index) => (
          <Item
            key={index}
            data={item}
          />
        ))}
      </div>

      <Helmet>
        <title>Reglamento - Liga de Capitanes</title>
      </Helmet>
    </section>
  )
}

export default Reglamento
