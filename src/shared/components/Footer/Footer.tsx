import './Footer.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Logo } from '../logo';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC<any> = () => {

    const {t} = useTranslation('common');

    return (
        <div className='Footer w-100 bg-dark text-light'>
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container className='justify-content-start'>
          
          <Navbar.Brand id="brand" href="/"><Logo></Logo></Navbar.Brand>
          <Nav>
              <Nav.Link href="/work">
                {t('label.work')}
              </Nav.Link>
              <Nav.Link href="/services">
                {t('label.services')}
              </Nav.Link>
              <Nav.Link href="/stories">
                {t('label.stories')}
              </Nav.Link>
              <Nav.Link href="/about">
                {t('label.about')}
              </Nav.Link>
              <Nav.Link href="/careers">
                {t('label.careers')}
              </Nav.Link>
              <Nav.Link href="/contact">
                {t('label.contact')}
              </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
        <div className='Footer-copyright fw-light h6 opacity-50'>
            <Container>
                <hr/>
                <Row>
                    <Col md="2" className='mt-4'> {t('label.copyright.details.first')}  </Col>
                    <Col md="2" className='mt-4'> {t('label.copyright.details.second')}  </Col>
                    <Col md="2" className='mt-4'> {t('label.copyright.termsAndConditions')}  </Col>
                    <Col md="2" className='mt-4'> </Col>
                    <Col md="2" className='mt-4'> </Col>
                    <Col md="2" className='mt-4'> {t('label.copyright.details.third')} </Col> 
                </Row>
            </Container>
            
        </div>
      </div>
    );
}