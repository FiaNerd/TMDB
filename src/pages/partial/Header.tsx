import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<>
			<Navbar className="navbar" expand="lg" data-bs-theme="dark">
				<Container fluid>
					<Navbar.Brand href="/">
						<img
							src="../../images/logoTMDB.svg"
							alt="TMDB logo"
							className="logo"
						/>{" "}
						TMDB{" "}
					</Navbar.Brand>

					<Navbar.Toggle />
					<Navbar.Collapse>
						<Nav className="m-auto my-2 my-lg-0">
							<Nav.Link
								as={NavLink}
								to="/"
								className="text-white link-text-custom active"
							>
								HEM
							</Nav.Link>
							<Nav.Link
								as={NavLink}
								to="#"
								className="text-white link-text-custom active"
							>
								FILMER
							</Nav.Link>
							<Nav.Link href="#action1" className="text-white link-text-custom">
								POPULÄRA FILMER
							</Nav.Link>
							<Nav.Link href="#action2" className="text-white link-text-custom">
								TOP FILMER
							</Nav.Link>
							<NavDropdown
								className="text-white link-text-custom"
								title="GENRER"
							>
								<NavDropdown.Item
									href="#action3"
									className="text-white link-text-custom"
								>
									ACTION
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action4"
									className="text-white link-text-custom"
								>
									FANTASY
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#action4"
									className="text-white link-text-custom"
								>
									HORROR
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#"
									className="text-white link-text-custom"
								>
									DRAMA
								</NavDropdown.Item>
								<NavDropdown.Item
									href="#"
									className="text-white link-text-custom"
								>
									ROMANCE
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
