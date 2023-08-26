import CardSlider from "../components/CardSlider"
import Hero from "../components/Hero"
import useCurrentMovie from "../hooks/useCurrentMovie"

const HomePage = () => {
	const { data: currentCinemaMovies, isLoading, isError } = useCurrentMovie()

	if (isLoading) {
		return <p>Loading...</p>
	}

	if (isError) {
		return <p>Error</p>
	}

	return (
		<>
			<Hero />
			<CardSlider />
		</>
	)
}

export default HomePage
