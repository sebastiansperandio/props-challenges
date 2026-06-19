// DESAFÍO 2 — Implementá este componente desde cero.
//
// Debe recibir:
//   - nombre (string)
//   - color  (string, un color CSS válido)
//
// Debe mostrar el nombre como una etiqueta/badge con el color de fondo recibido.
// Aplicale estilos para que se vea como una etiqueta:
// <div style={{}}>
//	Tecnología
// </div>
/* style={{
		display: 'inline-block',
		color: '#fff',
		padding: '3px 10px',
		borderRadius: '999px',
		fontSize: '0.8rem',
		fontWeight: 'bold',
		marginRight: '6px',
		marginBottom: '6px',
	  }} */

function EtiquetaCategoria(props) {
	const { nombre, color } = props

	return (
		<div style={{
			display: 'inline-block',
			color: '#fff',
			backgroundColor: color,
			padding: '3px 10px',
			borderRadius: '999px',
			fontSize: '0.8rem',
			fontWeight: 'bold',
			marginRight: '6px',
			marginBottom: '6px',
		}}>
			{nombre}
		</div>
	)
}

export default EtiquetaCategoria
