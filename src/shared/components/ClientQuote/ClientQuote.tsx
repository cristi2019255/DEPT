import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuote } from "../../../services/redux";
import { ClientQuoteProps } from "../../types"
import './ClientQuote.css'

export const ClientQuote: React.FC = () => {
    const dispatch = useDispatch();
    const clientQuote: {isLoading:boolean, data:ClientQuoteProps} = useSelector((state: any) => state.homePage.quote);
    
    useEffect(() => { dispatch(fetchQuote()) }, []);

    if (!clientQuote.isLoading) {
        return <></>
    }
    return (
        <div className="w-100 p-5">
            <div className="text-center">
                <p className="text-center fw-400"><q>{clientQuote.data.quote}</q></p>
                <small><p className="text-center fw-400">{clientQuote.data.quoteAuthor}</p></small>
            </div>
        </div>
    )
}