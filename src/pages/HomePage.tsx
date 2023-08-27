import CardSlider from "../components/CardSlider"
import Hero from "../components/Hero"
import useCurrentMovies from "../hooks/useCurrentMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useTopMovies from "../hooks/useTopMovies"

const HomePage = () => {
	const { data: currentCinemaMovies, isError: currentCinemaError } =
		useCurrentMovies()

	const { data: popularMovies, isError: popularMoviesError } =
		usePopularMovies()

	const { data: topMovies, isError: topMoviesError } = useTopMovies()

	if (currentCinemaError || popularMoviesError || topMoviesError) {
		return <p>Error</p>
	}

	if (!currentCinemaMovies || !popularMovies || !topMovies) {
		return
	}

	return (
		<>
			<Hero />
			<div className="main-container">
				<h1 className="title mb-2">BIO AKTUELLA FILMER</h1>
				<CardSlider movies={currentCinemaMovies} />

				<h1 className="title mb-2">POPULÄRA FILMER</h1>
				<CardSlider movies={popularMovies} />

				<h1 className="title mb-2">TOPP FILMER</h1>
				<CardSlider movies={topMovies} />
			</div>
		</>
	)
}

export default HomePage
