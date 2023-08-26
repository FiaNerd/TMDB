import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../services/TMDB_API"
;("../services/TMDB_API")

const useCurrentMovie = () => {
	const [page, setPage] = useState(1)

	return useQuery(["popular-movies", { page }], () => getPopularMovies(page))
}

export default useCurrentMovie
