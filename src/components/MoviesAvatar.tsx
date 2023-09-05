import { Image } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { Col, Container, Nav, Row } from "react-bootstrap"
import usePersonDetails from "../hooks/usePersonDetails"

const MoviesAvatar = () => {
	const movieId = Number(useParams().creditId)
	const { data: moviesAvatar, isError: movieAvatarError } =
		usePersonDetails(movieId)

	if (movieAvatarError) {
		return <h3>Could not find any movies for this person</h3>
	}

	return (
		<>
			<h5 className="title-movie-credit text-center mb-3">
				Filmer med {moviesAvatar?.name}
			</h5>
			<div className="movie-avatar">
				{moviesAvatar?.movie_credits.cast.map((credit) => {
					return (
						<Container key={credit.id} className="profile-container" fluid>
							<Row>
								<Col className="d-flex mx-auto">
									<Nav>
										<Link
											to={`/film-detaljer/${credit.id}`}
											className="nav-img-avatar"
										>
											<Image
												src={
													credit.poster_path
														? `https://image.tmdb.org/t/p/w200${credit.poster_path}?language=se-SV&include_image_language=se,null`
														: "../../images/movie_placeholder.png"
												}
												alt={credit.title}
												className="img-movie-avatar"
											/>
											<p className="movie-title">{credit.title}</p>
										</Link>
									</Nav>
								</Col>
							</Row>
						</Container>
					)
				})}
			</div>
		</>
	)
}

export default MoviesAvatar
