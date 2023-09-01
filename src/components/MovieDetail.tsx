import { Image, Nav } from "react-bootstrap"
import { NavLink, useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"
import { useState } from "react"

const MovieDetail = () => {
	const [readMore, setReadMore] = useState(false)

	const movieId = Number(useParams().filmId)

	const { data: details, isError: detailsError } = useMovieDetail(movieId)

	const handleToggleReadMore = () => {
		setReadMore(!readMore)
	}

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

	if (!movieOverview) {
		return
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

			<div className="info-wrapper mb-3">
				{details?.genres.map((genre) => (
					<Nav>
						<Nav.Link
							as={NavLink}
							to={`/filmer/kategori/${genre.id}`}
							state={{ genreTitle: genre.name }}
							className=" text-white genre-info active"
						>
							{genre.name}
						</Nav.Link>
					</Nav>
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

					{readMore ? (
						<p className="movie-info px-2 text-white">{movieOverview}</p>
					) : (
						<p className="movie-info px-2 text-white">
							{movieOverview.slice(0, 165)}
						</p>
					)}
					{movieOverview.length > 165 && (
						<button
							type="button"
							onClick={handleToggleReadMore}
							className="read-more-button"
						>
							{readMore ? "Visa mindre" : "Läs mer"}
						</button>
					)}
				</div>
			</div>
		</>
	)
}

export default MovieDetail
