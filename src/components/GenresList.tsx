import { Carousel } from "react-responsive-carousel"
import { Link } from "react-router-dom"
import useGenreMovies from "../hooks/useGenreMovies"

const Genres = () => {
	const { data: genresMovies, isError: genreError } = useGenreMovies()

	if (genreError) {
		return <p>Error</p>
	}

	return (
		<>
			<h1>GENRES</h1>
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
								to={`/filmer/kategori/${genre.id}`}
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
