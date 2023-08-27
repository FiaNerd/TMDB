import { useQuery } from "@tanstack/react-query"
import { getGenreMovies } from "../services/TMDB_API"
const useCurrentMovies = () => {
	return useQuery(["genres-movies"], () => getGenreMovies())
}

export default useCurrentMovies
