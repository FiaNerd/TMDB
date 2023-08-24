import Header from "./partial/Header"
import "./assets/App.scss"
import HomePage from "./pages/HomePage"
import Footer from "./partial/Footer"
import { Route, Routes } from "react-router-dom"

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default App
