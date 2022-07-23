import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
    
    return (
        <div className="bg-white text-dark">
            <Container className="py-5">
                <Row className="row-cols-1 row-cols-sm-2 g-5">
                    <Col xs={12} sm={12} md={4} lg={3}>
                        <h1>QUESTION? WE ARE HERE TO HELP!</h1>
                    </Col>
                    <Col  xs={12} sm={12} md={8} lg={9}>
                        <form onSubmit={handleSubmit}>
                            <Row className="row-cols-1 row-cols-sm-2 gx-5">
                                <Col>
                                    <div className="form-group py-2">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control-customized" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>
                                </Col>
                                <Col>
                                    <div className="form-group py-2">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" className="form-control-customized" value={email} onChange={(e) => setEmail(e.target.value)} />
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group py-2">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" className="form-control-customized" value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>

                            <button type="submit" className="btn btn-outline-dark my-2 px-5 h4 rounded-pill">SEND</button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}