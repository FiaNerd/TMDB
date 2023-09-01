import { Image } from "react-bootstrap"
import { useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"

const MovieDetail = () => {
	const movieId = Number(useParams().filmId)

	const { data: details, isError: detailsError } = useMovieDetail(movieId)

	const movieTitle = details?.original_title

	const movieOverview = details?.overview

	const movieReleaseDate = details?.release_date
		? details.release_date.split("-")[0]
		: "N/A"

	const movieLength = details?.runtime
		? `${Math.floor(details.runtime / 60)} h ${details.runtime} min`
		: "N/A"

	if (detailsError) {
		return <p>Error</p>
	}

	return (
		<>
			<div className="bg-detail-container">
				<div
					style={{
						backgroundImage: `url("https://image.tmdb.org/t/p/w500${details?.backdrop_path}?language=se-SV&include_image_language=se,null")`,
						backgroundSize: "cover",
						width: "100%",
						height: "100%",
					}}
				/>
			</div>

			<h1 className="title-movie">{movieTitle}</h1>

			<div className="detail-container mb-5">
				<Image
					src={`https://image.tmdb.org/t/p/w200${details?.poster_path}?language=se-SV&include_image_language=se,null`}
					alt={details?.title}
					className="image-detail"
				/>
				<div className="info-wrapper">
					<p className="genre-info">{movieReleaseDate}</p>

					<p className="genre-info">{movieLength}</p>

					{details?.genres.map((genre) => (
						<p className="genre-info" key={genre.id}>
							{genre.name}
						</p>
					))}
				</div>
			</div>
			<div className="mb-5">
				<h3 className="px-2">Sammanfattning</h3>
				<p className="px-2">{movieOverview}</p>
			</div>
		</>
	)
}

export default MovieDetail
