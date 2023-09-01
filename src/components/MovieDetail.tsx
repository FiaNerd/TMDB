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

			<div className="title-container mb-3">
				<h1 className="title-movie">{movieTitle}</h1>
				<div className="info-relese-wrapper">
					<p className="movie-info">{movieReleaseDate}</p>
					<p className="movie-info">{movieLength}</p>
				</div>
			</div>

			<div className="info-wrapper">
				{details?.genres.map((genre) => (
					<p className="genre-info" key={genre.id}>
						{genre.name}
					</p>
				))}
			</div>

			<div className="detail-container mb-5">
				<Image
					src={`https://image.tmdb.org/t/p/w200${details?.poster_path}?language=se-SV&include_image_language=se,null`}
					alt={details?.title}
					className="image-detail"
				/>

				<div className="mb-5">
					<h5 className="overview-container px-2">Sammanfattning</h5>
					<p className="movie-info px-2">{movieOverview}</p>
				</div>
			</div>
		</>
	)
}

export default MovieDetail
