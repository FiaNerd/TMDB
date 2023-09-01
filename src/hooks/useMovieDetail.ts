import { useQuery } from "@tanstack/react-query"
import { getMovieCredits } from "../services/TMDB_API"

const useMovieDetail = (detail_id: number) => {
	return useQuery(["movie-detail", { id: detail_id }], () =>
		getMovieCredits(detail_id),
	)
}

export default useMovieDetail
