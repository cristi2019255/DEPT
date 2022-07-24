import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { Dropdown } from "react-bootstrap"
import { useTranslation } from "react-i18next";
import { useState } from "react";

library.add(faGlobe);

export const LanguageSwitcher: React.FC = () => {
    const languages: {[abreviation: string]: string} = {
        "en": "language.en",
        "nl": "language.nl",
    }
    const {i18n} = useTranslation('settings');
    const {t} = useTranslation('common');

    const [language, setLanguage] = useState(languages[i18n.language]);

    const handleLanguageChange = (newLanguage: string) => {
        i18n.changeLanguage(newLanguage);
        setLanguage(languages[newLanguage]);
    }

    return (
        <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
                    <FontAwesomeIcon icon={['fas', 'globe']} />
                    <span className="px-2">{t(language)}</span>               
            </Dropdown.Toggle>
    
            <Dropdown.Menu variant="dark">
                <Dropdown.Item onClick = {() => handleLanguageChange('en')}>{t('language.en')}</Dropdown.Item>
                <Dropdown.Item onClick = {() => handleLanguageChange('nl')}>{t('language.nl')}</Dropdown.Item>
            </Dropdown.Menu>
      </Dropdown>
    )
}