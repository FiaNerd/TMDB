import { Button } from "react-bootstrap"

const Hero = () => {
	return (
		<div className="hero-container p-5 text-center bg-image mb-5">
			<div className="hero-mask ">
				<div className=" d-flex justify-content-center align-items-center h-100">
					<div className="text-container text-white p-2">
						<h1 className="mb-3 mt-5 ">DIN FILM RESA BÖRJAR HÄR</h1>
						<h4 className="mb-5">
							Vare sig du älskar thriller, action eller romantik - en film
							väntar just på dig
						</h4>

						<Button
							variant="outline-light"
							className="btn-color-custom btn-lg mb-5"
						>
							HITTA DIN FILM
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
