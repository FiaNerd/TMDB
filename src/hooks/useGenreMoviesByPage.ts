import { useQuery } from "@tanstack/react-query"
import { getGenreMoviesByPage } from "../services/TMDB_API"

const useGenreMoviesByPage = (
	resource: string,
	genre_id: number,
	page: number,
) => {
	return useQuery(
		["genre-movies-by-page", { page, genre_id }],
		() => getGenreMoviesByPage(resource, page, genre_id),
		{
			keepPreviousData: true,
		},
	)
}

export default useGenreMoviesByPage
