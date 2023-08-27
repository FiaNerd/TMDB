import axios from "axios"
import { ResultMovies } from "../types/MoviesAPI.types"
import { GenrerResults } from "../types/GenrersAPI.types"

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
		`${BASE_URL}/now_playing?language=sv-SE&page=${page}&region=se`,
	)
}

export const getPopularMovies = (page = 1) => {
	return get<ResultMovies>(
		`${BASE_URL}/popular?language=sv-SE&${page}&region=se`,
	)
}

export const getTopMovies = (page = 1) => {
	return get<ResultMovies>(
		`${BASE_URL}/top_rated?language=sv-SE&${page}&region=se`,
	)
}

export const getGenresMovies = () => {
	return get<GenrerResults>(`${BASE_URL}/genre/movie/list?language=sv`)
}
