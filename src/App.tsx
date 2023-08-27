import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Route, Routes } from "react-router-dom"
import { Container } from "react-bootstrap"
import Header from "./pages/partial/Header"
import HomePage from "./pages/HomePage"
import Footer from "./pages/partial/Footer"
import LoadingSpinner from "./components/LoadingSpinner"
import PageNotFound from "./pages/PageNotFound"
import MoviesByGenrerPage from "./pages/MoviesByGenrerPage"
import "./assets/App.scss"

const App = () => {
	return (
		<>
			<Header />
			<LoadingSpinner />
			<Container className="content-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/movies/:id" element={<MoviesByGenrerPage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
			<Footer />
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
