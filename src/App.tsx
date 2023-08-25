import Header from "./pages/partial/Header"
import "./assets/App.scss"
import HomePage from "./pages/HomePage"
import Footer from "./pages/partial/Footer"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import { Container } from "react-bootstrap"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const App = () => {
	return (
		<>
			<Header />
			<Container className="content-container">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Container>
			<Footer />
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</>
	)
}

export default App
