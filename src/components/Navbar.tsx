import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Shortly</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 ps-5 pe-5"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="px-3">
              Products
            </Nav.Link>
            <Nav.Link href="#action2" className="px-3">
              Pricing
            </Nav.Link>
            <Nav.Link href="#action2" className="px-3">
              Recourses
            </Nav.Link>
          </Nav>

          <Button variant="outline-success" className="px-4 mx-3">
            Login
          </Button>

          <Button variant="outline-success" className="px-4 mx-1">
            Sign up Free
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
