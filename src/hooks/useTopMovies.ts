import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getTopMovies } from "../services/TMDB_API"
;("../services/TMDB_API")

const useCurrentMovie = () => {
	const [page] = useState(1)

	return useQuery(["top-movies", { page }], () => getTopMovies(page))
}

export default useCurrentMovie
