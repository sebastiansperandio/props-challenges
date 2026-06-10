import './App.css'
import EtiquetaCategoria from './components/EtiquetaCategoria'
import TarjetaAnuncio from './components/TarjetaAnuncio'
import Bloque from './components/Bloque'
import TarjetaCurso from './components/TarjetaCurso'
import BotonIcono from './components/BotonIcono'
import GrillaPeliculas from './components/GrillaPeliculas'

const peliculas = [
	{ id: 1, titulo: 'Interstellar', director: 'Christopher Nolan', duracion: 169, esEstreno: false, generos: ['Ciencia ficción', 'Drama', 'Aventura'], detalles: { clasificacion: 'ATP', idioma: 'Inglés' } },
	{ id: 2, titulo: 'Alien: Romulus', director: 'Fede Álvarez', duracion: 119, esEstreno: true, generos: ['Terror', 'Ciencia ficción'], detalles: { clasificacion: '+16', idioma: 'Inglés' } },
]

const anuncios = [
	{ id: 1, titulo: 'Guitarra acústica', precio: 180, descripcion: 'Guitarra en buen estado, poco uso.' },
	{ id: 2, titulo: 'Bicicleta de montaña', precio: 250, descripcion: 'Rodado 29, frenos hidráulicos.' },
	{ id: 3, titulo: 'Mesa de madera', precio: 90, descripcion: 'Mesa de pino, 6 personas.' },
]

const cursos = [
	{ id: 1, nombre: 'React Avanzado', instructor: 'Ana García', horas: 12, inscripto: true },
	{ id: 2, nombre: 'Node.js desde cero', instructor: 'Carlos López', horas: 8, inscripto: false },
	{ id: 3, nombre: 'CSS Grid & Flexbox', instructor: 'María Torres', horas: 5, inscripto: false },
]

const catalogo = [
	{ id: 1, titulo: 'Dune: Parte 2', año: 2024, genero: 'Ciencia ficción' },
	{ id: 2, titulo: 'Oppenheimer', año: 2023, genero: 'Drama histórico' },
	{ id: 3, titulo: 'Everything Everywhere', año: 2022, genero: 'Comedia dramática' },
	{ id: 4, titulo: 'Spider-Man: No Way Home', año: 2021, genero: 'Acción' },
]

function App() {

	// ── Desafío 7 ───────────────────────────────────────────────────────────────
	function handleSeleccionarPelicula(pelicula) {
		// TODO: mostrar alert con el título y el año de la película seleccionada
	}

	return (
		<main style={{ maxWidth: '720px', margin: '0 auto', padding: '24px', fontFamily: 'sans-serif' }}>
			<h1>💪 Props — Desafíos</h1>

			{/* ── Desafío 1 ── */}
			<section>
				<h2>Desafío 1 — Crear TarjetaPelicula (diferentes tipos de datos)</h2>
				<p style={{ color: '#555' }}>
					Abrí <code>TarjetaPelicula.jsx</code> e implementá el componente para que
					muestre toda la información de cada película.
				</p>
				{/* TODO: Usar componente y datos al inicio del archivo */}
				<p>Tarjeta pelicula 1</p>
				<p>Tarjeta pelicula 2</p>
			</section>

			<hr />

			{/* ── Desafío 2 ── */}
			<section>
				<h2>Desafío 2 — Crear EtiquetaCategoria (prop de color)</h2>
				<p style={{ color: '#555' }}>
					Abrí <code>EtiquetaCategoria.jsx</code> e implementá el componente
					para que muestre el nombre como una etiqueta con el color de fondo recibido.
				</p>
				<EtiquetaCategoria nombre="Tecnología" color="#6366f1" />
				<EtiquetaCategoria nombre="Diseño" color="#ec4899" />
				<EtiquetaCategoria nombre="Negocios" color="#f97316" />
				<EtiquetaCategoria nombre="Ciencia" color="#14b8a6" />
			</section>

			<hr />

			{/* ── Desafío 3 ── */}
			<section>
				<h2>Desafío 3 — Funciones como props</h2>
				<p style={{ color: '#555' }}>
					Los anuncios se muestran pero el botón "Contactar" no hace nada.
					Abrí <code>TarjetaAnuncio.jsx</code> — tu tarea es hacer que al clickear
					el botón, el padre pueda decidir qué ocurre.
				</p>
				{anuncios.map((a) => (
					<TarjetaAnuncio
						key={a.id}
						titulo={a.titulo}
						precio={a.precio}
						descripcion={a.descripcion}
					/>
				))}
			</section>

			<hr />

			{/* ── Desafío 4 ── */}
			<section>
				<h2>Desafío 4 — La prop children</h2>
				<p style={{ color: '#555' }}>
					El componente <code>Bloque</code> acepta <code>icono</code>,{' '}
					<code>titulo</code> y <code>children</code>. Usalo tres veces
					con contenido diferente adentro de cada uno.
				</p>
				{/* TODO: usar <Bloque> tres veces con contenido diferente adentro */}
			</section>

			<hr />

			{/* ── Desafío 5 ── */}
			<section>
				<h2>Desafío 5 — Render condicional</h2>
				<p style={{ color: '#555' }}>
					Abrí <code>TarjetaCurso.jsx</code> y completá el TODO para que
					muestre contenido diferente según si el usuario está inscripto o no.
				</p>
				{cursos.map((c) => (
					<TarjetaCurso
						key={c.id}
						nombre={c.nombre}
						instructor={c.instructor}
						horas={c.horas}
						inscripto={c.inscripto}
					/>
				))}
			</section>

			<hr />

			{/* ── Desafío 6 ── */}
			<section>
				<h2>Desafío 6 — Spread de props</h2>
				<p style={{ color: '#555' }}>
					Abrí <code>BotonIcono.jsx</code> — el botón no responde a clicks ni
					se deshabilita porque las props extra no llegan al elemento nativo.
				</p>
				<BotonIcono icono="💾" texto="Guardar" onClick={() => alert('¡Guardado!')} />
				<BotonIcono icono="🗑️" texto="Eliminar" onClick={() => alert('Eliminado')} style={{ background: '#fef2f2', borderColor: '#fca5a5' }} />
				<BotonIcono icono="📤" texto="Compartir" disabled />
			</section>

			<hr />

			{/* ── Desafío 7 ── */}
			<section>
				<h2>Desafío 7 — Composición de componentes</h2>
				<p style={{ color: '#555' }}>
					Abrí <code>GrillaPeliculas.jsx</code> y usá el componente{' '}
					<code>TarjetaMini</code> dentro del map. Completá también{' '}
					<code>handleSeleccionarPelicula</code> arriba.
				</p>
				<GrillaPeliculas peliculas={catalogo} onSeleccionar={handleSeleccionarPelicula} />
			</section>

		</main>
	)
}

export default App
