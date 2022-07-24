import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchClientCardsFirst, fetchClientCardsSecond, fetchClientLogos} from "../../services/redux";
import { fetchHero } from "../../services/redux/homePageReducer/heroReducer";
import { ClientCardList, ClientList, ClientQuote, ContactForm, Loading, WorkSelector } from "../../shared"
import { ClientCardProps, ContactData} from "../../shared/types"
import './HomePage.css'


export const HomePage: React.FC = () => {

    const dispatch = useDispatch();

    const hero: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.hero);
    const clientCardsFirst: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.first);
    const clientCardsSecond: {isLoading:boolean, data:ClientCardProps[]} = useSelector((state: any) => state.homePage.client.second);
    const clientsLogos: {isLoading:boolean, data:string[]} = useSelector((state: any) => state.homePage.logos);


    const onSubmitContactForm = (data: ContactData) => {
        console.log(data);
    }


    const fetchData = () => {
        dispatch<any>(fetchHero()) // works but don't like it
        dispatch(fetchClientCardsFirst())
        dispatch(fetchClientCardsSecond())
        dispatch(fetchClientLogos())
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>  
            {!hero.isLoading ? 
                <section className="hero fw-700">
                    <ClientCardList cards={hero.data}/>
                </section>
                : <></>
            }

            <main>
                <WorkSelector/>
                {!clientCardsFirst.isLoading ? <ClientCardList cards = {clientCardsFirst.data}/> : <></>}
                <ClientQuote/>
                {!clientCardsSecond.isLoading? <ClientCardList cards = {clientCardsSecond.data}/>:<></>}
                {!clientsLogos.isLoading? <ClientList clientsLogo = {clientsLogos.data}/>:<></>}
                {hero.isLoading || clientCardsFirst.isLoading || clientCardsSecond.isLoading || clientsLogos.isLoading ? <Loading/> : <></>}
                <ContactForm onSubmit={onSubmitContactForm}/>
            </main>
        </>
    )
}