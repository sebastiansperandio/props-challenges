// DESAFÍO 4a — La prop children para inyectar acciones
// Este componente muestra una fila con información a la izquierda
// y un espacio a la derecha para botones o acciones.
// Tu tarea:
//   1. Recibir la prop especial 'children'.
//   2. Renderizar {children} adentro del div que actualmente dice "ACCIONES".

function FilaLista({ titulo, subtitulo /* TODO: Recibir children acá */ }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderBottom: '1px solid #e2e8f0' }}>
			<div>
				<h4 style={{ margin: 0, fontSize: '1rem', color: '#1e293b' }}>{titulo}</h4>
				<p style={{ margin: 0, fontSize: '0.875rem', color: '#64748b' }}>{subtitulo}</p>
			</div>
			
			<div style={{ display: 'flex', gap: '8px' }}>
				{/* TODO: Reemplazar el texto "ACCIONES" por {children} */}
				ACCIONES
			</div>
		</div>
	)
}

export default FilaLista
