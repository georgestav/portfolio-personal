import "./Navigation.scss";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navigation() {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            fixed="top"
            variant="dark"
            className="header__links__container"
        >
            <Container fluid>
                <Navbar.Brand href="#home">
                    <span className="logo">&gt;</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#skills" className="nav__items">
                            SKILLS
                        </Nav.Link>
                        <Nav.Link href="#portfolio" className="nav__items">
                            PORTFOLIO
                        </Nav.Link>
                        <Nav.Link href="#about-me" className="nav__items">
                            ABOUT ME
                        </Nav.Link>
                        <Nav.Link href="#contact-me" className="nav__items">
                            CONTACT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
