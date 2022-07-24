import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const StoriesPage: React.FC = () => {
    const {t} = useTranslation('stories');

    return (
        <Container>
            <p>{t('message.greeting')}</p>
        </Container>
    )
}