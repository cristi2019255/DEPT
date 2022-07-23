import './ToTopButton.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { useState } from 'react';
library.add(faArrowUp);

export const ToTopButton: React.FC = () => {
    
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    //Get the arrow-up button
    let topButtonInitial = (<button
                        type="button"
                        className="btn btn-danger btn-floating btn-lg"
                        id="btn-back-to-top"
                        onClick={backToTop}
                    >
                        <FontAwesomeIcon icon={['fas', 'arrow-up']} />
                    </button>);
    
    const [topButton, setTopButton] = useState(<></>);
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 100 ||
            document.documentElement.scrollTop > 100
        ) {
            setTopButton(topButtonInitial)
        } else {
            setTopButton(<></>);
        }
    }


    return (
        <>
            {topButton}
        </>
    )
}