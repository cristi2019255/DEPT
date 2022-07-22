import { useState } from "react"
import { Dropdown } from "react-bootstrap"
import { WorkSelectorProps } from "../../types"
import './WorkSelector.css'

export const WorkSelector: React.FC<WorkSelectorProps> = ({industries, services}) =>{
    const [selectedIndustry, setSelectedIndustry] = useState<string>(industries[0])
    const [selectedService, setSelectedService] = useState<string>(services[0])

    return (
        <div className="d-flex justify-content-between px-5">
            <Dropdown>
                Show me
                <Dropdown.Toggle variant="dark">
                    {selectedService} work
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {services.map((service, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={(e) => {setSelectedService(service)}}>{service}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
            in
            <Dropdown.Toggle variant="dark">
                {selectedIndustry} {selectedIndustry === "all" ? "industries" : "industry"}
            </Dropdown.Toggle>

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