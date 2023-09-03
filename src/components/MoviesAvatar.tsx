import { Image } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { Col, Container, Nav, Row } from "react-bootstrap"
import usePersonDetails from "../hooks/usePersonDetails"

const MoviesAvatar = () => {
	const movieId = Number(useParams().creditId)
	const { data: moviesAvatar } = usePersonDetails(movieId)

	console.log(moviesAvatar?.movie_credits)

	// if (errorCredits) {
	// 	return <p>Error</p>
	// }

	return (
		<>
			<h5 className="title-movie-credit text-center mb-2">Medverkanden</h5>
			<div className="profile-avatar">
				{moviesAvatar?.movie_credits.cast.map((credit) => {
					return (
						<Container key={credit.id} className="profile-container" fluid>
							<Row>
								<Col className="mx-auto">
									<Nav>
										<Link to={`/film-detaljer/${credit.id}`}>
											<Image
												src={`https://image.tmdb.org/t/p/w200${credit.poster_path}?language=se-SV&include_image_language=se,null`}
												alt={credit.title}
												className="img-profile-avatar"
											/>
											<p className="profile-text">{credit.order}</p>
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
