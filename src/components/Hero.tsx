import { Button } from "react-bootstrap"

const Hero = () => {
	return (
		<div className="hero-container p-5 text-center bg-image">
			<div className="hero-mask">
				<div className="d-flex justify-content-center align-items-center h-100">
					<div className="text-white">
						<h1 className="mb-3">Heading</h1>
						<h4 className="mb-3">Subheading</h4>

						<Button className="btn btn-outline-light btn-lg">
							Call to action
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
