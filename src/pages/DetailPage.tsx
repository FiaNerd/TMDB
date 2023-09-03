import MovieDetail from "../components/MovieDetail"
const DetailPage = () => {
	// const [activeComponent, setActiveComponent] = useState("movie")

	// const handleShowMovie = () => {
	// 	setActiveComponent("movie")
	// }

	// const handleShowCredit = () => {
	// 	setActiveComponent("credit")
	// }

	return (
		<div className="main-container">
			{/* <button onClick={handleShowMovie}>Show Movie</button>
			<button onClick={handleShowCredit}>Show Credit</button> */}

			<MovieDetail />
			{/* {activeComponent === "movie" ? <MovieDetail /> : null} */}
			{/* {activeComponent === "credit" ? <CreditDetail /> : null} */}
		</div>
	)
}

export default DetailPage
