import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { WorkSelectorProps } from "../../types"
import './WorkSelector.css'

export const WorkSelector: React.FC<WorkSelectorProps> = ({industries, services}) =>{
    const [selectedIndustry, setSelectedIndustry] = useState<string>(industries[0])
    const [selectedService, setSelectedService] = useState<string>(services[0])
    
    return (
        <div className="px-2 px-sm-5 work-selector-container">
            <Dropdown>
                <div className = "d-flex justify-content-center">  
                    <div className="opacity-50 mr-3">Show me</div>
                    <Dropdown.Toggle className="toggle-dropdown-btn" variant="dark">
                        {selectedService} work
                    </Dropdown.Toggle>
                </div>
                <Dropdown.Menu>
                    {services.map((service, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={(e) => {setSelectedService(service)}}>{service}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>

            <div className = "d-flex justify-content-center">
                <div className="opacity-50 mr-3">in</div>
                <Dropdown.Toggle className="toggle-dropdown-btn" variant="dark">
                    {selectedIndustry} {selectedIndustry === "all" ? "industries" : "industry"}
                </Dropdown.Toggle>
            </div>

            <Dropdown.Menu>
                {industries.map((industry, index) => {
                    return (
                        <Dropdown.Item key={index} onClick={(e) => {setSelectedIndustry(industry)}}>{industry}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>

        </div>
    )
}