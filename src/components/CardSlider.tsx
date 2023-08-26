import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import * as TMDB_API from "../services/TMDB_API"

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
		<>
			<h1>Current Movies</h1>
			{currentCinemaMovies &&
				currentCinemaMovies.results.map((movie) => (
					<div key={movie.id}>
						<img
							src={`https://image.tmdb.org/t/p/w500${movie.poster_path}?language=se-SV&include_image_language=se,null`}
							alt={movie.title}
						/>
					</div>
				))}
		</>
	)
}

export default CardSlider
