import { useQuery } from "@tanstack/react-query"
import { getGenreById } from "../services/TMDB_API"

const useGenreById = (genre_id: number) => {
	return useQuery(["genres-by-id", { id: genre_id }], () =>
		getGenreById(genre_id),
	)
}

export default useGenreById
