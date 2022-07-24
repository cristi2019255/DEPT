import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const ServicesPage: React.FC = () => {
    const {t} = useTranslation('services');

    return (
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
    )
}