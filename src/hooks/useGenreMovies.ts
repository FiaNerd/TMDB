import { useQuery } from "@tanstack/react-query"
import { getGenreMovies } from "../services/TMDB_API"

const useGenreMovies = () => {
	return useQuery(["genres"], () => getGenreMovies())
}

export default useGenreMovies
