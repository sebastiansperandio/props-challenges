// Componente provisto — no necesitás modificarlo.
// Acepta: icono, titulo y children.
// Tu tarea está en App.jsx: usarlo tres veces con contenido diferente adentro.
function Bloque(props) {
	const { icono, titulo, children } = props
	return (
		<div className="card" style={{ marginBottom: '12px' }}>
			<div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
				{icono}
				<h4 style={{ margin: 0, color: '#374151' }}>{titulo}</h4>
			</div>
			{children}
		</div>
	)
}

export default Bloque
