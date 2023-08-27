import { useQuery } from "@tanstack/react-query"
import { getGenresMovies } from "../services/TMDB_API"

const useCurrentMovies = () => {
	return useQuery(["genres-movies"], () => getGenresMovies())
}

export default useCurrentMovies
