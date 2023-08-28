import { useQuery } from "@tanstack/react-query"
import { getGenreMoviesByPage } from "../services/TMDB_API"

const useGenreMoviesByPage = (genre_id: number, page: number) => {
	return useQuery(["genre-movies-by-page", { genre_id, page }], () =>
		getGenreMoviesByPage(genre_id, page),
	)
}

export default useGenreMoviesByPage
