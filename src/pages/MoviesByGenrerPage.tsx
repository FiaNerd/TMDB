import { useLocation, useParams } from "react-router-dom"
import useGenreById from "../hooks/useGenreById"
import { Card } from "react-bootstrap"
import PaginationContainer from "../components/Pagination"

const MoviesByGenrerPage = () => {
	const { id } = useParams()
	const gengreId = Number(id)

	const {
		state: { genreTitle },
	} = useLocation()

	const { data: gengre_id, isError: fetchGenre } = useGenreById(gengreId)

	if (fetchGenre) {
		return <p>Error</p>
	}

	return (
		<div className="genre-card-container mb-5">
			<h1 className="title mt-5 mb-2">{genreTitle}</h1>
			<div className="genre-card-wrapper">
				{gengre_id?.results.map((movie) => (
					<Card key={movie.id}>
						<Card.Img
							variant="top"
							src={`https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`}
							alt={movie.title}
							className="card-image"
						/>
					</Card>
				))}
			</div>
			<PaginationContainer />
		</div>
	)
}

export default MoviesByGenrerPage
