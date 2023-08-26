import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../assets/App.scss"
import { ResultMovies } from "../types/Movies.types"

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
				showStatus={false}
				showArrows={true}
				autoFocus={true}
				infiniteLoop={true}
				className="custom-carousel mb-5"
			>
				{movies.results.map((movie) => (
					<div key={movie.id} className="img-container">
						<img
							src={`https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`}
							alt={movie.title}
							className="img-slider"
						/>
					</div>
				))}
			</Carousel>
		</div>
	)
}

export default CardSlider
