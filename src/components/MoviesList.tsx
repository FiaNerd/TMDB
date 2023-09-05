import { Card, Nav } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ResultMovies } from "../types/MoviesAPI.types"

interface IProps {
	movies: ResultMovies
}

const MoviesList = ({ movies }: IProps) => {
	return (
		<div className="genre-card-container">
			<p>{movies.total_results} filmer filmer väntar på dig</p>

			<div className="genre-card-wrapper">
				{movies?.results.map((movie) => (
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
				))}
			</div>
		</div>
	)
}

export default MoviesList
