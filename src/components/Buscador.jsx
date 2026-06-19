// DESAFÍO 3a — Pasar datos al padre
// Este componente tiene un input de texto.
// Tu tarea:
//   1. Recibir una prop llamada 'onBuscar' (que será una función).
//   2. En el evento onChange del input, ejecutar esa función pasándole
//      el valor actual del input (e.target.value).

function Buscador(props) {
	return (
		<div className="card" style={{ padding: '16px', background: '#f8fafc', marginBottom: '16px' }}>
			<h3 style={{ marginBottom: '8px', fontSize: '1.1rem' }}>Búsqueda</h3>
			<input
				type="text"
				placeholder="Buscar películas o cursos..."
				style={{ padding: '8px', width: '100%', boxSizing: 'border-box', borderRadius: '4px', border: '1px solid #cbd5e1' }}
			// TODO: Agregar el evento onChange acá y ejecutar onBuscar(e.target.value)
			/>
		</div>
	)
}

export default Buscador
