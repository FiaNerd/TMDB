import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"

const MovieDetail = () => {
	const movieId = Number(useParams().filmId)

	console.log("useParams", useParams())

	const { data: details, isError: detailsError } = useMovieDetail(movieId)

	console.log("Details", details)

	if (detailsError) {
		return <p>Error</p>
	}

	return <></>
}

export default MovieDetail
