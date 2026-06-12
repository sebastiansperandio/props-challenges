// DESAFÍO 3 — Este componente está listo visualmente.
// El botón "Contactar" existe pero no hace nada al clickearlo.
//
// Tu tarea:
//   1. Hacé que al clickear el botón, el PADRE pueda decidir qué pasa.
//   2. En App.jsx, cuando se contacte un anuncio, mostrar un alert
//      con el título del anuncio.

function TarjetaAnuncio(props) {
	const { titulo, precio, descripcion, funcionDesdeProp } = props

	return (
		<div className="card">
			<h3>{titulo}</h3>
			<p style={{ color: '#666', marginBottom: '8px' }}>
				{descripcion}
			</p>
			<p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#16a34a' }}>
				${precio}
			</p>

			<button
				onClick={funcionDesdeProp}
				style={{ marginTop: '8px', padding: '6px 16px', borderRadius: '6px', border: '1px solid #ccc', cursor: 'pointer' }}
			>
				Contactar
			</button>
		</div>
	)
}

export default TarjetaAnuncio
