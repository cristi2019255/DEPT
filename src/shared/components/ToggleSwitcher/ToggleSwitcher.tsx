import React from "react"
import Toggle from 'react-toggle'
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons"
import {library} from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "react-toggle/style.css" 
import './ToggleSwitcher.css'

library.add(faList, faGrip)

type ToggleSwitcherProps = {
    handleOnChange: ()=> void, 
    iconLeft?: any,
    iconRight?: any
}

export const ToggleSwitcher: React.FC<ToggleSwitcherProps> = ({handleOnChange, iconLeft, iconRight }) => {
    
        if (!iconLeft)  {
            iconLeft = (
                <FontAwesomeIcon icon={["fas","grip"]}/>
            )
        }
    
        if (!iconRight)  {
            iconRight = (
                <FontAwesomeIcon icon={["fas","list"]}/>
            )
        }

        return (
            <label>
                <Toggle
                    className="h-fit"
                    defaultChecked={false}
                    icons={{
                        checked: iconLeft,
                        unchecked: iconRight,
                    }}
                    onChange={handleOnChange} />
            </label>
        )
}