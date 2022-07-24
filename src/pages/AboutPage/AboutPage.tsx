import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const AboutPage: React.FC = () => {
    const {t} = useTranslation('about');

    return (
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
    )
}