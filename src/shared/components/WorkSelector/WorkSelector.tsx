import { useEffect } from "react";
import { Dropdown } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories, setSelectedIndustry, setSelectedService } from "../../../services/redux";
import { WorkSelectorProps } from "../../types"
import './WorkSelector.css'

export const WorkSelector: React.FC = () =>{

    // using translation
    const {t} = useTranslation('home');

    
    const dispatch = useDispatch();
    const workSelector: {isLoading:boolean, data:WorkSelectorProps} = useSelector((state: any) => state.homePage.categories);
    
    useEffect(() => { dispatch(fetchCategories()) }, []);

    if (workSelector.isLoading) {
        return <></>
    }
    return ( 
        <div className="px-2 px-sm-5 work-selector-container">
            <Dropdown>
                <div className = "d-flex justify-content-center">  
                    <div className="opacity-50 mr-3">{t("label.categories.showMe")}</div>
                    <Dropdown.Toggle className="toggle-dropdown-btn" variant="dark">
                        {workSelector.data.selectedService} {t('label.categories.service')}
                    </Dropdown.Toggle>
                </div>
                <Dropdown.Menu variant="dark">
                    {workSelector.data.services.map((service, index) => {
                        return (
                            <Dropdown.Item key={index} onClick={(e)=>{dispatch(setSelectedService(service))}}>{service}</Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>

            <Dropdown>

            <div className = "d-flex justify-content-center">
                <div className="opacity-50 mr-3">{t('label.categories.in')}</div>
                <Dropdown.Toggle className="toggle-dropdown-btn" variant="dark">
                    {workSelector.data.selectedIndustry} {workSelector.data.selectedIndustry === "all" ? t("label.categories.industries") : t("label.categories.industry")}
                </Dropdown.Toggle>
            </div>

            <Dropdown.Menu variant="dark">
                {workSelector.data.industries.map((industry, index) => {
                    return (
                        <Dropdown.Item key={index} onClick={(e) => {dispatch(setSelectedIndustry(industry))}}>{industry}</Dropdown.Item>
                    )
                })}
            </Dropdown.Menu>
        </Dropdown>
        </div>
    )
}