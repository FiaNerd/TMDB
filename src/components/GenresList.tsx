import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import useGenreMovies from "../hooks/useGenreMovies"

const Genres = () => {
	const { data: genresMovies, isError: fetchGenre } = useGenreMovies()

	if (fetchGenre) return <p>Error</p>

	return (
		<>
			<h1>GENRES</h1>
			<p></p>
			<div className="carosuel-container">
				<Carousel
					showThumbs={false}
					autoPlay={false}
					interval={0}
					showStatus={false}
					showArrows={true}
					autoFocus={true}
					infiniteLoop={true}
					className="custom-carousel mb-5"
				>
					{genresMovies?.genres.map((genre) => (
						<div key={genre.id}>
							<Link
								to={`/movies/${genre.id}`}
								state={{ genreTitle: genre.name }}
								className="text-white link-text-custom active"
							>
								{genre.name}
							</Link>
						</div>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default Genres
