// DESAFÍO 1 — Implementá este componente desde cero.
//
// Debe recibir y mostrar:
//   - titulo      (string)
//   - director    (string)
//   - duracion    (number, en minutos)
//   - esEstreno   (boolean) → mostrar "🆕 Estreno" o "📽 En catálogo"
//   - generos     (array de strings) → mostrarlos separados por coma
//   - detalles    (objeto con: clasificacion y idioma)
//
// Usá la clase "card" para el contenedor.
export default function TarjetaPelicula(props) {
	const pelicula = props.pelicula
	const { titulo, director, duracion, esEstreno, generos, detalles } = pelicula
	const { clasificacion, idioma } = detalles

	return (
		<div className="card">
			<h2>{titulo}</h2>
			<p>Director: {director}</p>
			<p>Duracion: {duracion} minutos</p>
			<p>
				{esEstreno ? "🆕 Estreno" : "📽 En catálogo"}
			</p>
			<p>Generos: {generos.join(', ')}</p>
			<p>Clasificacion: {clasificacion}</p>
			<p>Idioma: {idioma}</p>
		</div>
	)
}
