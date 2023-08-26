import { useQuery } from "@tanstack/react-query"
import * as TMDB_API from "../services/TMDB_API"
import { useState } from "react"

const CardSlider = () => {
	const [page, setPage] = useState(1)
	const { data: currentCinemaMovies } = useQuery(
		["currentCinemaMovies", { page }],
		() => TMDB_API.getCurrentMovies(page),
	)

	console.log(page, currentCinemaMovies)

	console.log(currentCinemaMovies)

	return <>Rendering Current Movie</>
}

export default CardSlider
