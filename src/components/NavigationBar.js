import {Navbar, Container, Nav} from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar variant="dark" className="bg-dark">
            <Container>
                <Navbar.Brand>Arcilla Present</Navbar.Brand>
            <Nav>
                <Nav.Link href="#trending">TRENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar