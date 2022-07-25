import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { ContactForm } from "../../shared";

export const ContactPage: React.FC = () => {
    const {t} = useTranslation('contact');

    return (
        <>
        <ContactForm/>
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
        </>
    )
}