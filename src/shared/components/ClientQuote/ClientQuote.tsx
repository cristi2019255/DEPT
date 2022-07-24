import { useSelector } from "react-redux";
import { ClientQuoteProps } from "../../types"
import './ClientQuote.css'

export const ClientQuote: React.FC = () => {

    const clientQuote: {isLoading:boolean, data:ClientQuoteProps} = useSelector((state: any) => state.homePage.quote);
    
    return (
        <div className="w-100 p-5">
            <div className="text-center">
                <p className="text-center fw-400"><q>{clientQuote.data.quote}</q></p>
                <small><p className="text-center fw-400">{clientQuote.data.quoteAuthor}</p></small>
            </div>
        </div>
    )
}