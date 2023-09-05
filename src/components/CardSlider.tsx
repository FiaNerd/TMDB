import { Image } from "react-bootstrap"
import { Carousel } from "react-responsive-carousel"
import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { ResultMovies } from "../types/MoviesAPI.types"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../assets/App.scss"

interface IProps {
	movies: ResultMovies
}

const CardSlider = ({ movies }: IProps) => {
	return (
		<div className="carosuel-container">
			<Carousel
				showThumbs={false}
				autoPlay
				interval={2000}
				showStatus={true}
				showArrows={true}
				autoFocus={true}
				infiniteLoop={true}
				className="custom-carousel mb-5"
			>
				{movies.results.slice(0, 20).map((movie) => (
					<div key={movie.id} className="img-container">
						<Nav>
							<Nav.Link as={NavLink} to={`/film-detaljer/${movie.id}`}>
								<Image
									src={
										movie.poster_path
											? `https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`
											: "../public/images/movie_placeholder.jpg"
									}
									alt={movie.title}
								/>
							</Nav.Link>
						</Nav>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CardSlider
