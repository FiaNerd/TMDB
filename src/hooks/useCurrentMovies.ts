import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCurrentMovies } from "../services/TMDB_API"

const useCurrentMovie = () => {
	const [page, setPage] = useState(1)

	return useQuery(["current-movies", { page }], () => getCurrentMovies(page))
}

export default useCurrentMovie
