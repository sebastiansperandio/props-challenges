// DESAFÍO 3b — Múltiples funciones como props
// Este componente muestra un mensaje y dos botones.
// Tu tarea:
//   1. Recibir las props 'onAceptar' y 'onCancelar' (ambas deben ser funciones).
//   2. Asignarlas al evento onClick de los botones correspondientes.

function ConfirmacionAccion(props) {
	const { accion } = props // Desestructuramos 'accion' para mostrar el mensaje

	return (
		<div className="card" style={{ borderLeft: '4px solid #ef4444' }}>
			<h3 style={{ marginBottom: '8px' }}>Confirmar acción</h3>
			<p style={{ color: '#666', marginBottom: '16px' }}>
				¿Estás seguro que querés {accion}?
			</p>
			<div style={{ display: 'flex', gap: '8px' }}>
				<button 
					style={{ padding: '6px 16px', borderRadius: '4px', background: '#ef4444', color: 'white', border: 'none', cursor: 'pointer' }}
					// TODO: Agregar onClick para ejecutar onAceptar
				>
					Aceptar
				</button>
				<button 
					style={{ padding: '6px 16px', borderRadius: '4px', background: '#e2e8f0', color: '#334155', border: 'none', cursor: 'pointer' }}
					// TODO: Agregar onClick para ejecutar onCancelar
				>
					Cancelar
				</button>
			</div>
		</div>
	)
}

export default ConfirmacionAccion
