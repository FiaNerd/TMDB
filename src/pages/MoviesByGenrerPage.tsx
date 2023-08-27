import { useLocation, useParams } from "react-router-dom"
import useGenreById from "../hooks/useGenreById"

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
		<>
			<h1>{genreTitle}</h1>
			{gengre_id?.results.map((movie) => (
				<div>
					<p key={movie.id}>{movie.original_title}</p>
					<img
						src={`https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`}
						alt={movie.title}
						className="img-slider"
					/>
				</div>
			))}
		</>
	)
}

export default MoviesByGenrerPage
