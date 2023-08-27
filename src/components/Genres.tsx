import { Carousel } from "react-responsive-carousel"
import useGenreMovies from "../hooks/useGenreMovies"

const Genres = () => {
	const { data: geresMovies, isError } = useGenreMovies()

	if (isError) return <p>Error</p>

	return (
		<>
			<h1>GENRES</h1>
			<div className="carosuel-container">
				<Carousel
					showThumbs={false}
					autoPlay={false}
					interval={0}
					showStatus={false}
					showArrows={true}
					autoFocus={true}
					infiniteLoop={true}
					className="custom-carousel mb-5"
				>
					{geresMovies?.genres.map((genrer) => (
						<div key={genrer.id}>
							<h3>{genrer.name}</h3>
						</div>
					))}
				</Carousel>
			</div>
		</>
	)
}

export default Genres
