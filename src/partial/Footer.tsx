import { Button } from "react-bootstrap"

const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="footer-wrapper">
					<img
						src="../../images/logoTMDB.svg"
						alt="logo image"
						className="logo-footer"
					/>
					<p className="text-footer">
						IN THE DIM GLOW, CINEMATIC DREAMS MATERAALIZE, IGNITING EMOTIONS
						THAT ONLY THEATERS CONJURE
					</p>
				</div>
			</div>
			<Button className="btn-footer">ENJOY A MOVIE</Button>
			<div className="footer-copy">
				<p className="text-copy">&copy; 2023 TMDB | All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
