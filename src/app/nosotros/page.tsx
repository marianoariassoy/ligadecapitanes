import Title from "@/components/Title";

export const metadata = {
  title: "Nosotros",
};

const page = () => {
  return (
    <section className="fade-in flex flex-col gap-y-3 text-sm">
      <Title title="¡Hola!" emoji="👋" />

      <div className="flex flex-col gap-y-3 text-sm [&>p>span]:text-primary [&>p>span]:block [&>p>span]:font-bold mb-6">
        <p>
          Nuestra Liga está conformada por un grupo de jugadores de tenis de
          Clubes, Barrios y Countries de Zona Norte de Buenos Aires, reunidos
          con el objeto de disfrutar y compartir un espacio para la práctica
          competitiva y amateur de nuestro deporte, principalmente en el marco
          de los siguientes valores:
        </p>
        <p>
          <span>Organización Propia</span> La organización de los Torneos está
          conformada y dirigida exclusivamente por los Capitanes de los equipos
          participantes, reunidos en una Comisión Directiva. Todos los Capitanes
          pueden formar parte de la Comisión, en tanto y en cuanto sus equipos
          participen de los Torneos. La Comisión Directiva establece los
          criterios de la liga, los reglamentos de juego, y la organización y
          seguimiento de los torneos. Al estar conformada por capitanes de los
          equipos participantes garantiza que las decisiones se basen en
          experiencias de primera mano en la competencia.
        </p>
        <p>
          <span>Camaradería y Buena Fe Deportiva</span>
          Promovemos que la Buena Fe Deportiva sea la base para el armado de los
          equipos, las series, y demás interacciones. Más que simples partidos
          de tenis, promovemos encuentros en los que prime la camaradería, y en
          los que el cordial intercambio del tercer tiempo ayude a consolidar la
          comunidad que estamos construyendo.
        </p>
        <p>
          <span> Nivel Competitivo Continuo </span>
          Bajo el criterio de “se juega por algo hasta el final”, se arman
          torneos de duración larga (4 meses aproximadamente), con formatos tipo
          “round robin”, playoffs, ronda de ganadores y perdedores, y demás
          mecanismos que ayuden a mantener el interés e involucramiento de los
          jugadores a lo largo de todo el torneo.
        </p>
        <p>
          <span> Ausencia de Lucro</span>
          El total de lo recaudado en concepto de inscripciones o aportes de
          sponsors se destina a los gastos del torneo (entrega de premios y
          trofeos, organización y catering de eventos finales, provisión de
          pelotas para cada final, sistema de información, horas hombre
          administrativas, regalos y sorteos). De esta manera, todos los
          ingresos retornan a los jugadores, dado que la organización de esta
          Liga no persigue lucro alguno, y a modo de garantía mantiene una
          apertura total y continua de los ingresos y egresos.
        </p>
      </div>
    </section>
  );
};

export default page;
