import { Col, Container, Row } from "react-bootstrap"
import { ClientCardProps } from "../../types"
import { ClientCard } from "../ClientCard/ClientCard"
import { ClientNoteList } from "../ClientNoteLIst/ClientNoteList"

export const ClientCardList: React.FC<{cards: ClientCardProps[]}> = ({cards}) => {
    
    return (
        <div className="w-100">
            <Row className = "gx-0">
                { cards.map((card: ClientCardProps, index: number) => {
                    let colWidth = 6
                    if (card.scaled){
                        colWidth = 8
                    }
                    return (
                        <>
                        { ((card.scaled && card.scaled === 'left') || !card.scaled) && 
                            <Col key={index} xs={12} sm={12} md={colWidth} lg={colWidth}>
                                <ClientCard {...card} />
                            </Col>
                        }
                        
                        {card.notes && 
                            <Col className = 'bg-dark text-light' key={index} xs={12} sm={12} md={12 - colWidth} lg={12 - colWidth}>
                                <Container className = "d-flex flex-column h-100 justify-content-center p-5">
                                    <ClientNoteList notes = {card.notes}/>
                                </Container>
                            </Col>
                        }
                        { (card.scaled && card.scaled === 'right')  && 
                            <Col key={index} xs={12} sm={12} md={colWidth} lg={colWidth}>
                                <ClientCard {...card} />
                            </Col>
                        }
                        </>
                    )
                }
                )}
            </Row>
        </div>    
        )
} 