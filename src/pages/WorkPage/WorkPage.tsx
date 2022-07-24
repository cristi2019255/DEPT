import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const WorkPage: React.FC = () => {
    const {t} = useTranslation('work');

    return (
        <Container>
            <p> {t('message.greeting')} </p>
        </Container>
    )
}