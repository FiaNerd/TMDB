import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"

const CreditsAvatar = () => {
	const movieId = Number(useParams().filmId)

	const { data: details, isError: errorCredits } = useMovieDetail(movieId)

	console.log(details?.credits.cast.map((test) => test.name))

	if (errorCredits) {
		return <p>Error</p>
	}
	return <></>
}

export default CreditsAvatar
