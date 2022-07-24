import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const CareersPage: React.FC = () => {
    const {t} = useTranslation('careers');

    return (
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
        
    )
}