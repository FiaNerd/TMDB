import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../assets/App.scss"
import useCurrentMovie from "../hooks/useCurrentMovie"

// TODO: Se om du kan lägga denna i en hook dynamisk och sedan med hjälp av props rendera ut
// Current, Top, bästa betyg på denna sidan
const CardSlider = () => {
	const { data: currentCinemaMovies, isLoading, isError } = useCurrentMovie()

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (isError) {
		return <p>Error</p>
	}

	return (
		<div className="carosuel-container">
			<h1 className="mb-2 px-2">BIO AKTUELLA FILMER</h1>
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
				{currentCinemaMovies.results.map((movie) => (
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
