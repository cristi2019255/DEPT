import { Col, Container, Row } from "react-bootstrap";
import './ClientList.css';
export const ClientList: React.FC<{clientsLogo: string[]}> = ({clientsLogo}) => {
    return (
        <Container className = "mt-5 mb-5">
            <div>
                <p className = 'title'>Clients</p>
                <p className="subtitle"> 
                    We value a great working relationship with our clients above all else. 
                    It’s why they often come to our parties. It’s also why we’re able to challenge and inspire 
                    them to reach for the stars.
                </p>
                <Container  className = "py-5">
                    <Row className = "row-cols-2 row-cols-md-3 g-5">
                        {clientsLogo.map((clientLogo, index) => {
                            return (
                                <Col  xs={6} sm={6} md={4} lg={4} key={index} className="d-flex justify-content-center">
                                    <img src={clientLogo} alt="client logo" className="client-logo w-100" />
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        </Container>
    );
}