import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import * as TMDB_API from "../services/TMDB_API"

const useCurrentMovie = () => {
	const [page, setPage] = useState(1)

	return useQuery(["currentMovies", { page }], () =>
		TMDB_API.getCurrentMovies(page),
	)
}

export default useCurrentMovie
