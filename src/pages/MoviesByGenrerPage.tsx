import { useLocation, useParams } from "react-router-dom"
import useGenreById from "../hooks/useGenreById"
import { Card } from "react-bootstrap"
import PaginationContainer from "../components/Pagination"
import { useState } from "react"
import useGenreMoviesByPage from "../hooks/useGenreMoviesByPage"

const MoviesByGenrerPage = () => {
	const { id } = useParams()
	const gengreId = Number(id)
	const [page, setPage] = useState(1)

	const {
		state: { genreTitle },
	} = useLocation()

	const { data: gengre_id, isError: fetchGenre } = useGenreById(gengreId)
	const { data: pages } = useGenreMoviesByPage("discover/movie", gengreId, page)

	console.log(pages?.data.total_pages)
	console.log(pages?.data.results)
	console.log(page)

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
			<p>{pages?.data.total_pages}</p>
			<PaginationContainer />
		</div>
	)
}

export default MoviesByGenrerPage
