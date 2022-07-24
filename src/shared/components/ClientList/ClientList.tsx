import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import './ClientList.css';
export const ClientList: React.FC<{clientsLogo: string[]}> = ({clientsLogo}) => {
    const {t} = useTranslation("common");

    return (
        <Container className = "mt-5 mb-5">
            <div>
                <p className = 'title'>{t("label.clientList.title")}</p>
                <p className="subtitle"> 
                    {t("label.clientList.subtitle")}
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