import { useIsFetching } from "@tanstack/react-query"

const LoadingSpinner = () => {
	const isFetching = useIsFetching()

	return isFetching ? (
		<div className="loader">
			<div className="loader__filmstrip"></div>
			<p className="loader__text">loading movies</p>
		</div>
	) : null
}

export default LoadingSpinner
