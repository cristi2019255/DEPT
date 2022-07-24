import { useTranslation } from "react-i18next";
import { ClientCardProps } from "../../types"
import { Target } from "../Target"
import './ClientCard.css'

export const ClientCard: React.FC<ClientCardProps> = ({title, description, image, readMoreLink, contentWidth}) => {
    const {t} = useTranslation('common');
    
    return (
        <div className="container-wrapper text-light h-100">
            <img className="w-100 h-100" src={image} alt={title} />
            <div className={contentWidth? "card-content lg-w-30" : "card-content lg-w-70"}>
                <div className="card-header">{title}</div>
                <div className="card-body">{description}</div>
                {readMoreLink && <a className="card-footer" href={readMoreLink}>
                    <div className="d-inline"> 
                        <Target></Target>
                    </div>
                    <div className="d-inline read-more">
                        {t('label.readMore')}
                    </div>
                </a>}
            </div>
        </div>
        )
} 
