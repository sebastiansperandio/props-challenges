// DESAFÍO 6 — Completá el spread de props.
//
// Props explícitas: icono (emoji/string) y texto (string).
// El resto de las props (onClick, disabled, style, type...) deben llegar
// directamente al elemento <button>.
//
// Tu tarea: hacé que todas las props extra que recibe este componente
// lleguen al <button> sin listarlas una por una.

function BotonIcono({ icono, texto, ...rest }) {
  return (
    <button
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '8px 16px', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer', marginRight: '8px' }}
    >
      {/* TODO: el <button> de arriba necesita recibir todas las props extra */}
      <span>{icono}</span>
      {texto}
    </button>
  )
}

export default BotonIcono
