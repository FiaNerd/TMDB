import { useState, useEffect } from "react"
import { Image, Nav } from "react-bootstrap"
import { NavLink, useParams } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import useMovieDetail from "../hooks/useMovieDetail"
import CreditAvatar from "./CreditsAvatar"

const MovieDetail = () => {
	const [readMore, setReadMore] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 640)

	const movieId = Number(useParams().filmId)

	const { data: details, isError: detailsError } = useMovieDetail(movieId)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 640)
		}

		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

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

			<div className="info-wrapper mb-4">
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

			<div className="info-movie-container mb-5">
				<p className="text-rate-language">
					<FontAwesomeIcon icon={faStar} className="star" />
					{details.vote_average}
				</p>

				{details.spoken_languages.map((language) => (
					<p className="text-rate-language">{language.english_name}</p>
				))}
			</div>

			<div className="detail-container mb-5">
				<Image
					src={`https://image.tmdb.org/t/p/w200${details?.poster_path}?language=se-SV&include_image_language=se,null`}
					alt={details?.title}
					className="image-detail"
				/>

				<div className="overview-container mb-5">
					<h5 className="overview-title">Sammanfattning</h5>
					<p className="movie-info">
						{readMore
							? movieOverview
							: movieOverview.slice(0, isMobile ? 160 : undefined)}
					</p>
					{isMobile && movieOverview.length > 160 && (
						<button
							type="button"
							onClick={handleToggleReadMore}
							className={`btn-read-more ${readMore ? "hide" : ""}`}
						>
							{readMore ? "Visa mindre" : "Läs mer"}
						</button>
					)}
				</div>
			</div>
			<CreditAvatar />
		</>
	)
}

export default MovieDetail
