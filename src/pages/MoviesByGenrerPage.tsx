import { useEffect, useState } from "react"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { Card, Nav } from "react-bootstrap"
import PaginationContainer from "../components/Pagination"
import useGenreMoviesByPage from "../hooks/useGenreMoviesByPage"
import useGenreMovies from "../hooks/useGenreMovies"
import PageNotFound from "./PageNotFound"

const MoviesByGenrePage = () => {
	const location = useLocation()
	const genreId = Number(useParams().id)

	const [currentPage, setCurrentPage] = useState(1)

	const { data: pagesData, isError: genreError } = useGenreMoviesByPage(
		"discover/movie",
		genreId,
		currentPage,
	)
	const { data: genresMovies } = useGenreMovies()

	const genreTitle = genresMovies?.genres.find((genre) => genre.id === genreId)

	const moviesAccordingToGenre = pagesData?.data.results

	const totalResults = pagesData?.data.total_results

	const totalPages = pagesData?.data.total_pages || 1

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search)

		const pageParam = searchParams.get("page")
		const page = pageParam ? Number(pageParam) : 1

		if (!isNaN(page) && page >= 1) {
			setCurrentPage(page)
		}
	}, [location.search])

	if (genreError) {
		return <PageNotFound />
	}

	if (!totalResults) {
		return
	}

	return (
		<div className="genre-card-container mb-5">
			<h1 className="mt-5 mb-2">{genreTitle?.name}</h1>
			{totalResults > 0 ? (
				<p>{totalResults} filmer väntar på dig</p>
			) : (
				<p>Det finns inga filmer att visa</p>
			)}

			<div className="genre-card-wrapper">
				{moviesAccordingToGenre?.map((movie) => (
					<Card key={movie.id}>
						<Nav.Link as={NavLink} to={`/film-detaljer/${movie.id}`}>
							<Card.Img
								variant="top"
								src={
									movie.poster_path
										? `https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`
										: "../../images/movie_placeholder.png"
								}
								alt={movie.title}
								className="card-image img-not-found"
							/>
						</Nav.Link>
						<p className="movie-title">{movie.title}</p>
					</Card>
				))}
			</div>
			{totalResults > 0 && <PaginationContainer totalPages={totalPages} />}
		</div>
	)
}

export default MoviesByGenrePage
