import { Link, useParams } from "react-router-dom"
import useMovieDetail from "../hooks/useMovieDetail"
import { Col, Container, Nav, Row, Image } from "react-bootstrap"

const CreditsAvatar = () => {
	const castId = Number(useParams().filmId)

	const { data: details, isError: errorCredits } = useMovieDetail(castId)

	if (errorCredits) {
		return <h3>Could not find any persons for this movie</h3>
	}

	return (
		<>
			<h5 className="title-movie-credit text-center mb-3">Medverkanden</h5>
			<div className="profile-avatar">
				{details?.credits.cast.map((credit) => {
					return (
						<Container key={credit.id} className="profile-container" fluid>
							<Row>
								<Col className="mx-auto">
									<Nav>
										<Link
											className="nav-img-avatar"
											to={`/medverkande/${credit.id}`}
										>
											<Image
												src={
													credit.profile_path
														? `https://image.tmdb.org/t/p/w200${credit.profile_path}?language=se-SV&include_image_language=se,null`
														: "../../images/avatar_profile_placeholder.png"
												}
												alt={credit.name}
												className="img-profile-avatar"
											/>
											<p className="profile-text">{credit.name}</p>
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

export default CreditsAvatar
