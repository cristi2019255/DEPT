import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const ContactPage: React.FC = () => {
    const {t} = useTranslation('contact');

    return (
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
    )
}