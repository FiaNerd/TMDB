import { Image } from "react-bootstrap"

const PageNotFound = () => {
	return (
		<div className="page-not-found-container d-flex flex-column align-items-center justify-content-center">
			<h1 className="mb-2 text-center">Sorry, can't find the path</h1>
			<Image src="../../images/not_found.jpg" fluid />
		</div>
	)
}

export default PageNotFound
