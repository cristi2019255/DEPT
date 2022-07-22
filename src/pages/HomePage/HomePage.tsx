import { ClientCardList, ClientList, ClientQuote } from "../../shared"
import { ClientCardProps, ClientQuoteProps } from "../../shared/types"

export const HomePage: React.FC = () => {
    const cards: ClientCardProps[] = [
        {title: 'BOL.COM', description: 'A Summer island in the Netherlands', image: 'https://picsum.photos/200?random=1', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'KEMPEN', description: 'Not some average banking website', image: 'https://picsum.photos/200?random=2', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'PHILIPS', description: 'Beautiful design meets innovative technology', image: 'https://picsum.photos/200?random=3', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'GEMEENTEMUSEUM', description: 'A 100 years of Mondriaan & De Stijl', image: 'https://picsum.photos/200?random=4', readMoreLink: 'https://www.bol.com/nl/'},
     
        {title: 'FLORENSIS', description: 'Rethinking the entire online ecosystem', image: 'https://picsum.photos/300/200?random=5', readMoreLink: 'https://www.bol.com/nl/',
        notes: 
            [{title:'MICROSOFT', content:'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels', readMoreLink: 'https://www.bol.com/nl/' },
            {title:'O’NEILL', content:'Integrating existing content into O’Neills’s new e-commerce platform', readMoreLink: 'https://www.bol.com/nl/' },
            {title:'MICROSOFT', content:'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels', readMoreLink: 'https://www.bol.com/nl/' }
            ],
        scaled: 'left'
        },

        {title: 'BE LIGHTNING', description: 'Delivering clarity on a global scale', image: 'https://picsum.photos/200?random=6', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'TUI', description: 'Swipe to find your next holiday destination', image: 'https://picsum.photos/200?random=7', readMoreLink: 'https://www.bol.com/nl/'},
        
        {title: 'FLORENSIS', description: 'Rethinking the entire online ecosystem', image: 'https://picsum.photos/300/200?random=8', readMoreLink: 'https://www.bol.com/nl/',
        notes: 
            [{title:'AMAZON', content:'Starting with delivering through drones', readMoreLink: 'https://www.bol.com/nl/' },
            {title:'O’NEILL', content:'Integrating existing content into O’Neills’s new e-commerce platform', readMoreLink: 'https://www.bol.com/nl/' },
            {title:'MICROSOFT', content:'Tapping into Ireland’s unique gaming culture and bringing a fresh flavour to their Xbox social media channels', readMoreLink: 'https://www.bol.com/nl/' }
            ],
        scaled: 'right'
        },

        {title: 'CHOCOMEL', description: 'A campaign for the limited edition letter packs', image: 'https://picsum.photos/200?random=9', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'JBL', description: 'Live like a champion with Jerome Boateng', image: 'https://picsum.photos/200?random=10', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'ZALANDO', description: 'Innovative SEO and content strategy for Zalando', image: 'https://picsum.photos/200?random=11', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'KONINKLIJKE BIBLIOTHEEK', description: 'The search of the most influential book ever', image: 'https://picsum.photos/200?random=12', readMoreLink: 'https://www.bol.com/nl/'},
    ]

    const cards2: ClientCardProps[] = [
        {title: 'LIBERTY GLOBAL', description: 'Delivering complex commerce solutions', image: 'https://picsum.photos/200?random=13', readMoreLink: 'https://www.bol.com/nl/'},
        {title: 'ARLA', description: 'Swipe to find your next holiday destination', image: 'https://picsum.photos/200?random=14', readMoreLink: 'https://www.bol.com/nl/'},
    ]

    const quote: ClientQuoteProps = {
        quote: 'Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month',
        quoteAuthor: 'MATTIJS TEN DRINK - CEO, TRANSAVIA'
    }

    const clientsLogo: string[] = [
        'https://picsum.photos/200?random=1',
        'https://picsum.photos/200?random=2',
        'https://picsum.photos/200?random=3',
        'https://picsum.photos/200?random=4',
        'https://picsum.photos/200?random=5',
        'https://picsum.photos/200?random=6',
        'https://picsum.photos/200?random=7',
        'https://picsum.photos/200?random=8',
        'https://picsum.photos/200?random=9',
    ]

    return (
        <>
            <ClientCardList cards = {cards}/>
            <ClientQuote {...quote}/>
            <ClientCardList cards = {cards2}/>
            <ClientList clientsLogo = {clientsLogo}/>
        </>
    )
}