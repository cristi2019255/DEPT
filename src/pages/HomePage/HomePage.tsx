import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCategories, fetchClientCardsFirst, fetchClientCardsSecond, fetchClientLogos, fetchQuote, setSelectedIndustry, setSelectedService} from "../../services/redux";
import { fetchHero } from "../../services/redux/homePageReducer/heroReducer";
import { ClientCardList, ClientList, ClientQuote, ContactForm, Loading, WorkSelector } from "../../shared"
import { ClientCardProps, ClientQuoteProps, WorkSelectorProps} from "../../shared/types"
import './HomePage.css'


export const HomePage: React.FC = () => {

    const {industry, service} = useParams();

    const dispatch = useDispatch();

    const hero: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.hero);
    const clientCardsFirst: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.first);
    const clientCardsSecond: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.second);
    const clientsLogos: {isLoading:boolean, data:string[]} = useSelector((state: any) => state.homePage.logos);
    const workSelector: {isLoading:boolean, data:WorkSelectorProps} = useSelector((state: any) => state.homePage.categories);
    const quote: {isLoading:boolean, data:ClientQuoteProps} = useSelector((state: any) => state.homePage.quote);

    const fetchData = () => {
        dispatch<any>(fetchHero())
        dispatch<any>(fetchCategories())
        dispatch<any>(fetchClientCardsFirst(-1)) // -1 means all
        dispatch<any>(fetchClientCardsSecond(-1)) // -1 means all
        dispatch<any>(fetchClientLogos())
        dispatch<any>(fetchQuote())
    }

    const setFilters = () => {
        if (industry){
            dispatch(setSelectedIndustry(industry))
        }
        if (service){
            dispatch(setSelectedService(service))
        }
    }

    useEffect(() => { setFilters(); 
                      fetchData(); 
                    }, []);


 

    return (
        <>  
           {hero.isLoading? <Loading/> :
            (<>
            <section className="hero fw-700">
                    <ClientCardList cards={hero.data}/>
            </section>
            {workSelector.isLoading? <Loading/> : 
                <>
                <WorkSelector/>
                {clientCardsFirst.isLoading? <Loading/> :
                    <>
                    <ClientCardList cards = {clientCardsFirst.data}/>
                    {quote.isLoading? <Loading/> : 
                        <>
                        <ClientQuote/>
                        {clientCardsSecond.isLoading? <Loading/> :
                            <>
                            <ClientCardList cards = {clientCardsSecond.data}/>
                                {clientsLogos.isLoading? <Loading/> :
                                <>
                                <ClientList clientsLogo = {clientsLogos.data}/>
                                <ContactForm/>
                                </>}
                            </>}
                        </>}
                    </>}
                </>}
            </>)}
        </>
    )
}