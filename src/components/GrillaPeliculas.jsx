import TarjetaMini from './TarjetaMini'

// DESAFÍO 7 — Completá la composición.
//
// Este componente recibe:
//   - peliculas    (array de objetos con: id, titulo, año, genero)
//   - onSeleccionar (función) — se llama al hacer click en una película
//
// El map ya está armado. Tu tarea: dentro del <div> del map,
// usá el componente <TarjetaMini> pasándole los datos de cada película.
// Cuando se clickee, llamar a onSeleccionar con la película correspondiente.

function GrillaPeliculas({ peliculas, onSeleccionar }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px' }}>
      {peliculas.map((p) => (
        <div key={p.id} onClick={() => onSeleccionar(p)} style={{ cursor: 'pointer' }}>
          {/* TODO: usar <TarjetaMini> con los datos de la película */}
        </div>
      ))}
    </div>
  )
}

export default GrillaPeliculas
