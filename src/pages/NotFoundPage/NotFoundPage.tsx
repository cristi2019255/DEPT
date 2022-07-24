import { Container } from "react-bootstrap"
import { useTranslation } from "react-i18next";

export const NotFoundPage: React.FC = () => {
    const {t} = useTranslation('notFound');
    const {t:tCommon} = useTranslation('common');

    return (
        <Container>
            <p className="h4"> {tCommon('label.error.404')} </p>
            <p className="h1"> {t('message.greeting')} </p>
        </Container>
    )
}