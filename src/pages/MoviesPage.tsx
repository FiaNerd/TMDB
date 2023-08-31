import { useParams } from "react-router-dom"
import MoviesList from "../components/MoviesList"
import useCurrentMovies from "../hooks/useCurrentMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopMovies from "../hooks/useTopMovies"

const MoviesPage = () => {
	const { category } = useParams()
	let movieData

	const { data: currentCinemaMovies, isError: currentCinemaError } =
		useCurrentMovies()

	const { data: popularMovies, isError: popularMoviesError } =
		usePopularMovies()

	const { data: topMovies, isError: topMoviesError } = useTopMovies()

	if (currentCinemaError || popularMoviesError || topMoviesError) {
		return <p>Error</p>
	}

	switch (category) {
		case "bio-aktuellt":
			movieData = currentCinemaMovies
			break
		case "popular":
			movieData = popularMovies
			break
		case "top":
			movieData = topMovies
			break
		default:
			movieData = null
	}

	if (!movieData) {
		return <p>Error</p>
	}

	return (
		<div className="genre-card-container mb-5 mt-5">
			<h1>{category}</h1>
			<MoviesList movies={movieData} />
		</div>
	)
}

export default MoviesPage
