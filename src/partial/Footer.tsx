import { Button } from "react-bootstrap"

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-wrapper">
				<p className="text-footer">
					In the dim glow, cinematic dreams materialize, igniting emotions that
					only theaters conjure
				</p>
				<Button className="btn-footer">ENJOY A MOVIE</Button>
			</div>
			<div className="footer-copy">
				<p className="text-copy">&copy; 2023 TMDB | All Rights Reserved.</p>
			</div>
		</footer>
	)
}

export default Footer
