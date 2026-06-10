// Componente provisto — no necesitás modificarlo.
// Lo vas a usar dentro de GrillaProductos en el Desafío 7.

function TarjetaMini({ titulo, año, genero }) {
  return (
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', background: '#fff' }}>
      <p style={{ fontWeight: 'bold', marginBottom: '4px' }}>{titulo}</p>
      <p style={{ color: '#6b7280', fontSize: '0.85rem', marginBottom: '2px' }}>{genero}</p>
      <p style={{ color: '#9ca3af', fontSize: '0.8rem' }}>{año}</p>
    </div>
  )
}

export default TarjetaMini
