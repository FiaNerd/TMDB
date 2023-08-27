import { Carousel } from "react-responsive-carousel"
import useGenreMovies from "../hooks/useGenreMovies"
import { Nav, NavLink } from "react-bootstrap"

const Genres = () => {
	const { data: geresMovies, isError } = useGenreMovies()

	if (isError) return <p>Error</p>

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
					{geresMovies?.genres.map((genrer) => (
						<div key={genrer.id}>
							<Nav className="m-auto my-2 my-lg-0">
								<Nav.Link
									as={NavLink}
									to={`#`}
									className="text-white link-text-custom active"
								>
									{genrer.name}
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
