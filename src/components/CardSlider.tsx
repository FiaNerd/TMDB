import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import * as TMDB_API from "../services/TMDB_API"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../assets/App.scss"

const CardSlider = () => {
	const [page, setPage] = useState(1)
	const {
		data: currentCinemaMovies,
		isLoading,
		isError,
	} = useQuery(["currentMovies", { page }], () =>
		TMDB_API.getCurrentMovies(page),
	)

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (isError) {
		return <p>Error</p>
	}

	return (
		<div className="carosuel-container">
			<h1 className="mb-2">Current Movies</h1>
			<Carousel
				showThumbs={false}
				autoPlay
				interval={2000}
				// showStatus={true}
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
