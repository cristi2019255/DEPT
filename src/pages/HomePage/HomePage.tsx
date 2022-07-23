import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, fetchClientCardsFirst, fetchClientCardsSecond, fetchClientLogos, fetchHero, fetchQuote } from "../../services/redux";
import { ClientCardList, ClientList, ClientQuote, ContactForm, Loading, WorkSelector } from "../../shared"
import { ClientCardProps, ClientQuoteProps, ContactData, WorkSelectorProps } from "../../shared/types"
import './HomePage.css'


export const HomePage: React.FC = () => {

    const dispatch = useDispatch();

    const hero: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.hero);
    const clientCardsFirst: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.first);
    const clientCardsSecond: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.second);
    const clientQuote: {isLoading:boolean, data:ClientQuoteProps} = useSelector((state: any) => state.homePage.quote);
    const clientsLogos: {isLoading:boolean, data:string[]} = useSelector((state: any) => state.homePage.logos);


    const onSubmitContactForm = (data: ContactData) => {
        console.log(data);
    }


    const fetchData = () => {
        dispatch(fetchHero())
        dispatch(fetchClientCardsFirst())
        dispatch(fetchClientCardsSecond())
        dispatch(fetchQuote())
        dispatch(fetchClientLogos())
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>  
            {
            hero.isLoading ? <Loading /> : 
                <section className="hero fw-700">
                    <ClientCardList cards={hero.data}/>
                </section>
            }

            <main>
                <WorkSelector/>
                <ClientCardList cards = {clientCardsFirst.data}/>
                <ClientQuote {...clientQuote.data}/>
                <ClientCardList cards = {clientCardsSecond.data}/>
                <ClientList clientsLogo = {clientsLogos.data}/>
                <ContactForm onSubmit={onSubmitContactForm}/>
            </main>
        </>
    )
}