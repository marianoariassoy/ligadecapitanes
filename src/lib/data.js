export const categories = [
  { name: 'Intermedia +35', url: '/torneos/2' },
  { name: 'Segunda +35', url: '/torneos/1' }
]

export const menu = [
  { name: 'Ranking Jugadores', url: '/soon' },
  { name: 'Ranking de Campeones', url: '/ranking/campeones' },
  { name: 'Orden de juego', url: '/orden-de-juego' },
  { name: 'Jugadores', url: '/jugadores' },
  { name: 'Reglamento', url: '/reglamento' },
  { name: 'Nosotros', url: '/nosotros' },
  { name: 'Regístrate', url: '/bienvenido' }
]

export const rankingOptions = [
  {
    name: 'Intermedia +35',
    category: 1
  },
  {
    name: 'Segunda +35',
    category: 2
  }
]

export const texts = {
  error: 'Se produjo un error al enviar el formulario.',
  required: 'Completá este dato',
  thanks: '¡Ya estas registrado en nuestro sistema!'
}

export const days = []
for (let i = 1; i <= 31; i++) {
  days.push(i)
}
export const months = []
for (let i = 1; i <= 12; i++) {
  months.push(i)
}
export const years = []
for (let i = 1930; i <= 2020; i++) {
  years.push(i)
}
