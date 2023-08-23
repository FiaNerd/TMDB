import { Button } from "react-bootstrap"

const Hero = () => {
	return (
		<div className="hero-container p-5 text-center bg-image">
			<div className="hero-mask ">
				<div className="text-white d-flex justify-content-center align-items-center h-100">
					<div className="text-white p-2">
						<h1 className="mb-3 mt-5 ">Your Movie Journey Begins Here</h1>
						<h4 className="mb-5">
							Whether you love horror, action, or romance, there's a movie
							waiting for you.
						</h4>

						<Button variant="outline-light" className=" btn-lg mb-5">
							Checkout our movies
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
