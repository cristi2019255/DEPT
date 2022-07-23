import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../logo';
export const Header: React.FC<any> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" >
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href='/work'>
                Work
              </Nav.Link>

              <Nav.Link href='/services'>
                Services
              </Nav.Link>
              <Nav.Link href="/stories">
                Stories
              </Nav.Link>
              <Nav.Link href="/about">
                About
              </Nav.Link>
              <Nav.Link href="/careers">
                Careers
              </Nav.Link>
              <Nav.Link href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}