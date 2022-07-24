import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { ContactData } from "../../types";
import { validEmailRegex, validForm } from "../../utils/FormValidator";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import './ContactForm.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faExclamationCircle);

export const ContactForm: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState<{[s:string] : string}>({});
    const [onSubmitError, setOnSubmitError] = useState<string>('');
    const [submitedSuccesfully, setSubmitedSuccesfully] = useState<boolean>(false);

    const {t} = useTranslation('contactForm');

    const invalidFormMessage = t('label.error.general');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /* Validate form */
        if (name.length === 0) { checkError('name', name) }   
        if (email.length === 0) { checkError('email', email) }
        if (message.length === 0) { checkError('message', message) }

        if(!validForm(errors)) {
            setOnSubmitError(invalidFormMessage);
            return;
        }else{
            setOnSubmitError('');
            setErrors({});
            submit({name, email, message});
        }
    }

    const submit = (data: ContactData) => {
        // TODO: submit data to server when it is developed
        
        return new Promise((resolve, reject) => {
            resolve(data);
            //reject({message: 'Error'});
        })
        .then(()=>{
            setSubmitedSuccesfully(true);
            setTimeout(()=>{
                setSubmitedSuccesfully(false);
            }, 4000);
        }).catch((err)=>{
            setOnSubmitError(err.message);
        })
    }

    
    const checkError = (name: string, value:any) => {
        let userErrors = errors;
        switch (name) {
            case 'name':
              setName(value);   
              userErrors.name = 
                value.length < 5
                  ? t('label.error.name')
                  : '';
              break;
            case 'email': 
                setEmail(value);
                userErrors.email = validEmailRegex.test(value)
                  ? ''
                  : t('label.error.email');
              break;
            case 'message':
                setMessage(value); 
                userErrors.message = 
                value.length < 20
                  ? t('label.error.message')
                  : '';
              break;
            default:
              break;
          }
          setErrors(userErrors);
          if (validForm(userErrors)) {
            setOnSubmitError('');
          }
    }

    const handleChange = (event: any) => {
        event.preventDefault();
        const { name, value } = event.target;
        checkError(name, value);
    }

       
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
                                        <input type="text" className="form-control-customized" name="name" id="name" value={name} onChange={handleChange} />
                                        {errors.name && errors.name.length >0 && 
                                        <small className="text-danger error d-flex align-items-center"> 
                                            <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
                                            <div className="px-1">{errors.name}</div>
                                        </small>}
                                    </div>
                                </Col>
                                <Col>
                                    <div className="form-group py-2">
                                        <label htmlFor="email">{t('label.contactForm.email')}</label>
                                        <input type="email" id="email" className="form-control-customized" name="email" value={email} onChange={handleChange} />
                                        {errors.email && errors.email.length >0 && 
                                        <small className="text-danger error d-flex align-items-center"> 
                                            <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
                                            <div className="px-1">{errors.email}</div>
                                        </small>}
                                    </div>
                                </Col>
                            </Row>
                            <div className="form-group py-2">
                                <label htmlFor="message">{t('label.contactForm.message')}</label>
                                <textarea id="message" className="form-control-customized" name="message" value={message} onChange={handleChange} />
                                {errors.message && errors.message.length >0 && 
                                <small className="text-danger error d-flex align-items-center"> 
                                    <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
                                    <div className="px-1">{errors.message}</div>
                                </small>}
                            </div>
                            <div className="my-2 d-flex flex-column align-items-start">
                                <button type="submit" className="btn btn-outline-dark px-5 h4 rounded-pill">{t('button.contactForm.send').toUpperCase()}</button>
                                {onSubmitError.length > 0? (
                                    <small className="text-danger error d-flex align-items-center"> 
                                        <FontAwesomeIcon icon={['fas', 'exclamation-circle']} />
                                        <div className="px-1">{onSubmitError}</div>
                                    </small>
                                ) : <></>}
                                {submitedSuccesfully === true ? <small className="text-success success">{t('label.success.general')}</small> : <></>}
                            </div>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}