import { useEffect, useState } from "react"
import { NavLink, useLocation, useParams } from "react-router-dom"
import { Card, Nav } from "react-bootstrap"
import PaginationContainer from "../components/Pagination"
import useGenreMoviesByPage from "../hooks/useGenreMoviesByPage"
import useGenreMovies from "../hooks/useGenreMovies"

const MoviesByGenrePage = () => {
	const location = useLocation()
	const genreId = Number(useParams().id)
	const [currentPage, setCurrentPage] = useState(1)

	const { data: pagesData } = useGenreMoviesByPage(
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

	return (
		<div className="genre-card-container mb-5">
			<h1 className="title mt-5 mb-2">{genreTitle?.name}</h1>
			<p>{totalResults} filmer väntar på dig</p>

			<div className="genre-card-wrapper">
				{moviesAccordingToGenre?.map((movie) => (
					<>
						<Card key={movie.id}>
							<Nav.Link as={NavLink} to={`/film-detaljer/${movie.id}`}>
								<Card.Img
									variant="top"
									src={`https://image.tmdb.org/t/p/w200${movie.poster_path}?language=se-SV&include_image_language=se,null`}
									alt={movie.title}
									className="card-image"
								/>
							</Nav.Link>
						</Card>
					</>
				))}
			</div>
			<PaginationContainer totalPages={totalPages} />
		</div>
	)
}

export default MoviesByGenrePage
