// DESAFÍO 3c — Pasar un objeto (múltiples datos) al padre
// Este componente simula un formulario para crear una tarea.
// Tu tarea:
//   1. Recibir la prop 'onGuardar' (que es una función).
//   2. Dentro de la función 'manejarEnvio', armar un objeto con el título y la descripción.
//   3. Llamar a 'onGuardar' pasándole ese objeto como parámetro.

function FormularioNuevaTarea(props) {

	function manejarEnvio(e) {
		e.preventDefault() // Evita que recargue la página

		// Obtenemos los valores de los inputs
		const valorTitulo = e.target.titulo.value
		const valorDescripcion = e.target.descripcion.value

		// TODO: Armar un objeto (ej: nuevaTarea) con 'titulo' y 'descripcion'
		
		// TODO: Ejecutar la prop onGuardar pasándole ese objeto
		
	}

	return (
		<div className="card" style={{ padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0' }}>
			<h3 style={{ marginBottom: '12px', fontSize: '1.1rem', color: '#166534' }}>Nueva Tarea</h3>
			<form onSubmit={manejarEnvio} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
				<input 
					name="titulo" 
					placeholder="Título de la tarea" 
					style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
				/>
				<input 
					name="descripcion" 
					placeholder="Descripción corta" 
					style={{ padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
				/>
				<button 
					type="submit" 
					style={{ padding: '8px', background: '#22c55e', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
				>
					Guardar Tarea
				</button>
			</form>
		</div>
	)
}

export default FormularioNuevaTarea
