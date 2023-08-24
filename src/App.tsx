import Header from "./partial/Header"
import "./assets/App.scss"
import HomePage from "./pages/HomePage"
import Footer from "./partial/Footer"
import { Route, Routes } from "react-router-dom"
import PageNotFound from "./pages/PageNotFound"
import { Container } from "react-bootstrap"

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
		</>
	)
}

export default App
