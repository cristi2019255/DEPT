import { TailSpin } from "react-loader-spinner"

export const Loading: React.FC = () => {
    return (
        <div className="w-100 d-flex justify-content-center"> 
            <div>
                <TailSpin color="#00BFFF" height={80} width={80} />
                <div>Loading ...</div>
            </div>
        </div>
    )
}