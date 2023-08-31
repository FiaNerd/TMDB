import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import useGenreMovies from "../../hooks/useGenreMovies"
import { NavLink } from "react-router-dom"

const Header = () => {
	const { data: genreLinks } = useGenreMovies()

	return (
		<>
			<Navbar
				className="navbar"
				collapseOnSelect
				expand="lg"
				data-bs-theme="dark"
			>
				<Container fluid>
					<Navbar.Brand href="/">
						<img
							src="../../images/logoTMDB.svg"
							alt="TMDB logo"
							className="logo"
						/>{" "}
						TMDB{" "}
					</Navbar.Brand>

					<Navbar.Toggle
						/* aria-controls="responsive-navbar-nav" */ aria-controls="basic-navbar-nav"
					/>
					<Navbar.Collapse id="basic-nav-dropdown">
						<Nav className="m-auto my-2 my-lg-0">
							<Nav.Link
								as={NavLink}
								to="/"
								className="text-white link-text-custom active"
								eventKey={0}
							>
								HEM
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/filmer/bio-aktuellt"
								className="text-white link-text-custom active"
								eventKey={1}
							>
								BIO AKTUELLT
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/filmer/popular"
								className="text-white link-text-custom active"
								eventKey={2}
							>
								POPULÄRA FILMER
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="/filmer/top"
								className="text-white link-text-custom active"
								eventKey={3}
							>
								TOP FILMER
							</Nav.Link>
							<NavDropdown
								id="navbarScrollingDropdown"
								className="text-white link-text-custom"
								title="GENRES"
							>
								{genreLinks?.genres.map((genre) => (
									<NavDropdown.Item
										key={genre.id}
										as={NavLink}
										state={{ genreTitle: genre.name }}
										to={`/filmer/kategori/${genre.id}`}
										id="collasible-nav-dropdown"
										className="custom-active nav-drop-items text-white link-text-custom"
										eventKey={genre.id}
									>
										{genre.name}
									</NavDropdown.Item>
								))}
							</NavDropdown>
						</Nav>
						<Form className="d-flex">
							<Form.Control
								type="search"
								placeholder="Search"
								className="me-2"
								aria-label="Search"
							/>
							<Button className="btn-outline-primary-custom">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	)
}

export default Header
