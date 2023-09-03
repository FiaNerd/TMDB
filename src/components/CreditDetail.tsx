import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"

const CreditDetail = () => {
	const castId = Number(useParams().creditId)
	const { data: details } = useMovieDetail(castId)
	console.log(castId)

	return (
		<>
			{details?.credits.cast.map((actor) => (
				<div key={actor.id}>
					<h1>{actor.name}</h1>
					<p>Character: {actor.character}</p>
				</div>
			))}
		</>
	)
}

export default CreditDetail
