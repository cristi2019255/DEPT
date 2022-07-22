import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Logo } from '../logo';
export const Header: React.FC<any> = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#" >
            <Logo></Logo>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
            </Nav>
            <Nav>
              <Nav.Link href="#">Work</Nav.Link>
              <Nav.Link href="#">
                Services
              </Nav.Link>
              <Nav.Link href="#">
                Stories
              </Nav.Link>
              <Nav.Link href="#">
                About
              </Nav.Link>
              <Nav.Link href="#">
                Careers
              </Nav.Link>
              <Nav.Link href="#">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}