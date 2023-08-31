import { Card, Nav, NavLink } from "react-bootstrap"
import { ResultMovies } from "../types/MoviesAPI.types"
import { useParams } from "react-router-dom"

interface IProps {
	movies: ResultMovies
}

const MoviesList = ({ movies }: IProps) => {
	return (
		<>
			<p>{movies.total_results} filmer väntar på dig</p>

			<div className="genre-card-wrapper">
				{movies?.results.map((movie) => (
					<>
						<Card key={movie.id}>
							<Nav.Link as={NavLink} to={`#`}>
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
			{/* <PaginationContainer totalPages={totalPages} /> */}
		</>
	)
}

export default MoviesList
