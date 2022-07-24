import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ContactFormProps } from "../../types";
import './ContactForm.css';
export const ContactForm: React.FC<ContactFormProps> = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({name, email, message});
    }
    
    const {t} = useTranslation('contactForm');

    return (
        <div className="bg-white text-dark">
            <Container className="py-5">
                <Row className="row-cols-1 row-cols-sm-2 g-5">
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <h1>{t('message.contactForm.information').toUpperCase()}</h1>
                    </Col>
                    <Col  xs={12} sm={12} md={8} lg={9}>
                        <form onSubmit={handleSubmit}>
                            <Row className="row-cols-1 row-cols-sm-2 gx-5">
                                <Col>
                                    <div className="form-group py-2">
                                        <label htmlFor="name">{t('label.contactForm.name')}</label>
                                        <input type="text" className="form-control-customized" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="form-group py-2">
                                        <label htmlFor="email">{t('label.contactForm.email')}</label>
                                        <input type="email" id="email" className="form-control-customized" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group py-2">
                                <label htmlFor="message">{t('label.contactForm.message')}</label>
                                <textarea id="message" className="form-control-customized" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-outline-dark my-2 px-5 h4 rounded-pill">{t('button.contactForm.send').toUpperCase()}</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}