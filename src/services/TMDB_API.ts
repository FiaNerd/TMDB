import axios from "axios"
import { ResultMovies } from "../types/MoviesAPI.types"
import { GenrerResults } from "../types/GenrersAPI.types"
import { MovieDetail } from "../types/MovieCreditsAPI"
import { Person } from "../types/PersonAPI.types"

const BASE_URL = import.meta.env.VITE_TMDB_DATABASE_URL
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN
const FAKE_DELAY = 1500

const instance = axios.create({
	baseURL: BASE_URL,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
		Authorization: `Bearer ${ACCESS_TOKEN}`,
	},
})

const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)

	!!FAKE_DELAY && (await new Promise((r) => setTimeout(r, FAKE_DELAY)))

	return response.data
}

export const getCurrentMovies = (page = 1) => {
	return get<ResultMovies>(
		`${BASE_URL}/movie/now_playing?language=sv-SE&page=${page}&region=se`,
	)
}

export const getPopularMovies = (page = 1) => {
	return get<ResultMovies>(
		`${BASE_URL}/movie/popular?language=sv-SE&${page}&region=se`,
	)
}

export const getTopMovies = (page = 1) => {
	return get<ResultMovies>(
		`${BASE_URL}/movie/top_rated?language=sv-SE&${page}&region=se`,
	)
}

export const getGenreMovies = () => {
	return get<GenrerResults>(`${BASE_URL}/genre/movie/list?language=sv`)
}

export const getGenreById = (genre_id: number) => {
	return get<ResultMovies>(
		`${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=se-SV&page=1&region=SE&sort_by=popularity.desc&with_genres=${genre_id}`,
	)
}

export const getGenreMoviesByPage = (
	resource: string,
	page: number,
	genre_id?: number,
) => {
	try {
		return instance.get<ResultMovies>(
			`${BASE_URL}/${resource}?include_adult=false&include_video=false&language=se-SV&page=${page}&region=SE&sort_by=popularity.desc&with_genres=${genre_id}`,
		)
	} catch (err) {
		throw new Error("An error occurred")
	}
}

export const getMovieCredits = (movie_id: number) => {
	return get<MovieDetail>(
		`${BASE_URL}/movie/${movie_id}?append_to_response=credits&language=en-US`,
	)
}

export const getPerson = (person_id: number) => {
	return get<Person>(
		`${BASE_URL}/person/${person_id}?append_to_response=movie%2Cmovie_credits&language=en-US`,
	)
}
