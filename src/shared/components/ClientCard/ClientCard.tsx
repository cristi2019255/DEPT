import { Col, Row } from "react-bootstrap"
import { CardProps } from "../../types/CardProps"
import { Card } from "../Card/Card"

export const ClientCard: React.FC<{cards: CardProps[]}> = ({cards}) => {
    
    return (
        <div className="w-100">
            <Row className = "gx-0">
                { cards.map((card: CardProps, index: number) => {
                    return (
                        <Col key={index} xs={12} sm={12} md={6} lg={6}>
                            <Card {...card} />
                        </Col>
                    )
                }
                )}
            </Row>
        </div>    
        )
} 