// DESAFÍO 5 — Completá el render condicional dentro de este componente.
//
// Props:
//   - nombre     (string)
//   - instructor (string)
//   - horas      (number)
//   - inscripto  (boolean)
//
// Tu tarea: donde dice TODO, mostrar según "inscripto":
//   - true  → "✓ Ya estás inscripto" (en verde)
//   - false → un botón "Inscribirme"

function TarjetaCurso({ nombre, instructor, horas, inscripto }) {
  return (
    <div className="card" style={{ marginBottom: '10px' }}>
      <h3 style={{ marginBottom: '4px' }}>{nombre}</h3>
      <p style={{ color: '#666', marginBottom: '4px' }}>Instructor: {instructor}</p>
      <p style={{ color: '#666', marginBottom: '10px' }}>{horas}hs</p>
      <div>
        {/* TODO: mostrar contenido diferente según el valor de "inscripto" */}
      </div>
    </div>
  )
}

export default TarjetaCurso
