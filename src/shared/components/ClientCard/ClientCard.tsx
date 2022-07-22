import { ClientCardProps } from "../../types"
import { Target } from "../Target"
import './ClientCard.css'

export const ClientCard: React.FC<ClientCardProps> = ({title, description, image, readMoreLink}) => {
    return (
        <div className="container-wrapper text-light">
            <img className="w-100" src={image} alt={title} />
            <div className="card-content">
                <div className="card-header">{title}</div>
                <div className="card-body">{description}</div>
                <a className="card-footer" href={readMoreLink}>
                    <div className="d-inline"> 
                        <Target></Target>
                    </div>
                    <div className="d-inline read-more">
                        Read More
                    </div>
                </a>
            </div>
        </div>
        )
} 
