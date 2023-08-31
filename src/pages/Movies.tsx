import MoviesList from "../components/MoviesList"
import useCurrentMovies from "../hooks/useCurrentMovies"

const Movies = () => {
	const { data: currentCinemaMovies, isError: currentCinemaError } =
		useCurrentMovies()

	if (currentCinemaError) {
		return <p>Error</p>
	}

	if (!currentCinemaMovies) {
		return
	}

	return (
		<>
			<MoviesList movies={currentCinemaMovies} />
		</>
	)
}

export default Movies
