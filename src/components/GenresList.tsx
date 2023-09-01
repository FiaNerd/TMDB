import { Carousel } from "react-responsive-carousel"
import { NavLink } from "react-router-dom"
import useGenreMovies from "../hooks/useGenreMovies"
import { Nav } from "react-bootstrap"

const Genres = () => {
	const { data: genresMovies, isError: genreError } = useGenreMovies()

	if (genreError) {
		return <p>Error</p>
	}
	return (
		<>
			<h1 className="title">GENRES</h1>
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
							<Nav>
								<Nav.Link
									as={NavLink}
									to={`/filmer/kategori/${genre.id}`}
									state={{ genreTitle: genre.name }}
									className=" text-white genre-link-custom active"
								>
									{genre.name}
								</Nav.Link>
							</Nav>
						</div>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default Genres
