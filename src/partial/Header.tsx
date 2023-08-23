import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const Header = () => {
	return (
		<>
			<Navbar
				className="navbar-sticky-custom"
				expand="md"
				bg="dark"
				data-bs-theme="dark"
			>
				<Container fluid>
					<Navbar.Brand href="#">
						<img src="logoTMDB.svg" alt="TMDB logo" className="logo" /> TMDB{" "}
					</Navbar.Brand>

					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="m-auto my-2 my-lg-0">
							<Nav.Link href="#action1" className="text-white link-text-custom">
								Movies
							</Nav.Link>
							<Nav.Link href="#action1" className="text-white link-text-custom">
								Popular Movies
							</Nav.Link>
							<Nav.Link href="#action2" className="text-white link-text-custom">
								Top Rated Movies
							</Nav.Link>
							<NavDropdown
								className="text-white link-text-custom"
								title="Genres"
							>
								<NavDropdown.Item
									href="#action3"
									className="text-white link-text-custom"
								>
									Action
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action4"
									className="text-white link-text-custom"
								>
									Fantasy
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action4"
									className="text-white link-text-custom"
								>
									Horror
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#"
									className="text-white link-text-custom"
								>
									Drama
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#">
									Something else here
								</NavDropdown.Item>
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
