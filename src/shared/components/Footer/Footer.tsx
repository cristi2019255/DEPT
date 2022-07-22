import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Logo } from '../logo';

export const Footer: React.FC<any> = () => {
    return (
        <div className='Footer w-100 bg-dark text-light'>
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container className='justify-content-start'>
          
          <Navbar.Brand id="brand" href="#home"><Logo></Logo></Navbar.Brand>
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
        </Container>
      </Navbar>
        <div className='Footer-copyright fw-light h6 opacity-50'>
            <Container>
                <hr/>
                <Row>
                    <Col md="2"> Chamber of Commerce: 63464101  </Col>
                    <Col md="2" class='mt-4'> VAT: NL 8552.47.502.B01  </Col>
                    <Col md="2" class='mt-4'> Terms and conditions  </Col>
                    <Col md="2" class='mt-4'> </Col>
                    <Col md="2" class='mt-4'> </Col>
                    <Col md="2" class='mt-4'> © 2020 Dept Agency </Col> 
                </Row>
            </Container>
            
        </div>
      </div>
    );
}