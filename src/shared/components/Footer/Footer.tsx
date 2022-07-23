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
          
          <Navbar.Brand id="brand" href="/"><Logo></Logo></Navbar.Brand>
          <Nav>
              <Nav.Link href="/work">Work</Nav.Link>
              <Nav.Link href="/services">
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
        </Container>
      </Navbar>
        <div className='Footer-copyright fw-light h6 opacity-50'>
            <Container>
                <hr/>
                <Row>
                    <Col md="2"> Chamber of Commerce: 63464101  </Col>
                    <Col md="2" className='mt-4'> VAT: NL 8552.47.502.B01  </Col>
                    <Col md="2" className='mt-4'> Terms and conditions  </Col>
                    <Col md="2" className='mt-4'> </Col>
                    <Col md="2" className='mt-4'> </Col>
                    <Col md="2" className='mt-4'> © 2020 Dept Agency </Col> 
                </Row>
            </Container>
            
        </div>
      </div>
    );
}