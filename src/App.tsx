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
import MoviesPage from "./pages/MoviesPage"
import DetailsPage from "./pages/DetailPage"
import CreditDetailPage from "./pages/CreditDetailPage"

const App = () => {
	return (
		<>
			<Header />
			<LoadingSpinner />

			<Container className="content-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/filmer/:category" element={<MoviesPage />} />
					<Route path="/film-detaljer/:filmId" element={<DetailsPage />} />
					<Route path="/medverkande/:creditId" element={<CreditDetailPage />} />
					<Route path="/filmer/kategori/:id" element={<MoviesByGenrerPage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
			<Footer />
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
