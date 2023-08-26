import CardSlider from "../components/CardSlider"
import Hero from "../components/Hero"
import useCurrentMovies from "../hooks/useCurrentMovies"
import usePopularMovies from "../hooks/usePopularMovies"

const HomePage = () => {
	const {
		data: currentCinemaMovies,
		isLoading: currentCinemaLoading,
		isError: currentCinemaError,
	} = useCurrentMovies()
	const {
		data: popularMovies,
		isLoading: popularMoviesLoading,
		isError: popularMoviesError,
	} = usePopularMovies()

	if (currentCinemaLoading || popularMoviesLoading) {
		return <p>Loading...</p>
	}

	if (currentCinemaError || popularMoviesError) {
		return <p>Error</p>
	}

	return (
		<>
			<Hero />
			<div className="main-container">
				<h1 className="title mb-2">BIO AKTUELLA FILMER</h1>
				<CardSlider movies={currentCinemaMovies} />

				<h1 className="title mb-2">POPULÄRA FILMER</h1>
				<CardSlider movies={popularMovies} />
			</div>
		</>
	)
}

export default HomePage
