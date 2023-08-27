import { Carousel, Col, Row } from "react-bootstrap"

const Genres = () => {
	return (
		<>
			<h1>GENRES</h1>
			<Carousel fade>
				<Carousel.Item>
					<Row>
						<Col md={6} lg={4}>
							<Carousel.Caption>
								<h3>First slide label</h3>
								<p>
									Nulla vitae elit libero, a pharetra augue mollis interdum.
								</p>
							</Carousel.Caption>
						</Col>
					</Row>
				</Carousel.Item>
			</Carousel>
		</>
	)
}

export default Genres
