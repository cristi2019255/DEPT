import { ClientQuoteProps } from "../../types"
import './ClientQuote.css'

export const ClientQuote: React.FC<ClientQuoteProps> = ({quote, quoteAuthor}) => {
    return (
        <div className="w-100 p-5">
            <div className="text-center">
                <p className="text-center fw-400"><q>{quote}</q></p>
                <small><p className="text-center fw-400">{quoteAuthor}</p></small>
            </div>
        </div>
    )
}