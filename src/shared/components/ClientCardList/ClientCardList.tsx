import { Fragment } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { ClientCardProps } from "../../types"
import { ClientCard } from "../ClientCard"
import { ClientNoteList } from "../ClientNoteLIst/ClientNoteList"
import FadeInSection from "../FadeInSection/FadeInSection"
import './ClientCardList.css'

export const ClientCardList: React.FC<{cards: ClientCardProps[], listDisplay?: boolean, hero?:boolean}> = ({cards, listDisplay = false, hero = false}) => {
    
    const industryFilter: string = useSelector((state: any) => state.homePage.categories.data.selectedIndustry);
    const serviceFilter: string = useSelector((state: any) => state.homePage.categories.data.selectedService);

    if (hero) {
        return (
            <>
            {cards.length > 0 
                && <div className="w-100">
                    <ClientCard {...cards[0]} />
                  </div>
            }
            </>  
        )
    }

    const cardsFiltered = cards.filter((card: ClientCardProps) => {
        return (industryFilter === "all" || (card.industry && (card.industry === industryFilter || card.industry === 'all'))) &&
               (serviceFilter  === "all" || (card.serviceDomain && (card.serviceDomain === serviceFilter || card.serviceDomain === 'all')))
    })


   const cardsSorted = arrangeCards(cardsFiltered, listDisplay)
    
    return (
        <div className="w-100">
            <Row className = "gx-0">
                { cardsSorted.map((card: ClientCardProps, index: number) => {
                    let colWidth = 6
                    /* if list display then each element takes full width*/ 
                    if (listDisplay){
                        colWidth = 12
                    }else{
                        if (card.scaled){
                            if (card.scaled === "full"){
                                colWidth = 12
                            }else{
                                colWidth = 8
                            }
                        }
                    }

                    const cardCol = (<Col xs={12} sm={12} md={colWidth} lg={colWidth}>
                                        <FadeInSection>
                                            <ClientCard {...card} />
                                        </FadeInSection>
                                    </Col>)

                    if (card.notes){
                        const notes = (<Col className = 'bg-dark text-light' xs={12} sm={12} md={12 - colWidth} lg={12 - colWidth}>
                                            <FadeInSection>
                                                <Container className = "d-flex flex-column h-100 justify-content-center p-5">
                                                    <ClientNoteList notes = {card.notes}/>
                                                </Container>
                                            </FadeInSection>
                                        </Col>)

                            return (<Row key={index} className = {((card.scaled && card.scaled !== 'right') || !card.scaled) ? "gx-0" : "gx-0 flex-row-reverse"}>
                                        {cardCol}
                                        {notes}
                                    </Row>)
                    }
                    

                    return (<Fragment key={index}>
                                {cardCol}
                            </Fragment>)
                    })
                }
            </Row>
        </div>    
        )
} 

const arrangeCards: (cards:ClientCardProps[], listDisplay: boolean) => ClientCardProps[] = (cards: ClientCardProps[], listDisplay: boolean) => {
    /* Sorting cards in order to not allow gaps between cards on size medium+ devices */
    
    /* If displaying in list no need to rearrange */
    if (listDisplay){
        return cards
    }

    /* If window size is small no arrangement is needed */
    if (window.innerWidth < 768) {
        return cards
    }

    let cardsSorted: ClientCardProps[] = []
    
    let cardsToPush: ClientCardProps[] = []
    let partialCards = 0
       
    cards.forEach((card: ClientCardProps) => {
        if (card.notes){
            if (partialCards % 2 !== 0 ){
                cardsToPush.push(card)
            }else{
                cardsSorted.push(card)
            }
        }else{
          if (cardsToPush.length > 0 && partialCards % 2 === 0){
                cardsSorted = cardsSorted.concat(cardsToPush)
                cardsToPush = []
            }
                
            cardsSorted.push(card)
            partialCards++
        }
    })

    /* Append the full cards that are left and move the last partial to the end if needed */   
    if (cardsToPush.length > 0){
        cardsSorted = partialCards % 2 === 0 ? 
        cardsSorted = cardsSorted.concat(cardsToPush):
        cardsSorted = cardsSorted.slice(0, -1).concat(cardsToPush).concat(cardsSorted.slice(-1))
    }
    return cardsSorted
}