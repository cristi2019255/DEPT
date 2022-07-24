import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// import English translation
import aboutEn from "./locales/en/about.json";
import careersEn from "./locales/en/careers.json";
import commonEn from "./locales/en/common.json";
import contactEn from "./locales/en/contact.json";
import contactFormEn from "./locales/en/contactForm.json";
import homeEn from "./locales/en/home.json";
import notFoundEn from "./locales/en/notFound.json";
import servicesEn from "./locales/en/services.json";
import storiesEn from "./locales/en/stories.json";
import workEn from "./locales/en/work.json";

// import Dutch translation
import aboutNl from "./locales/nl/about.json";
import careersNl from "./locales/nl/careers.json";
import commonNl from "./locales/nl/common.json";
import contactNl from "./locales/nl/contact.json";
import contactFormNl from "./locales/nl/contactForm.json";
import homeNl from "./locales/nl/home.json";
import notFoundNl from "./locales/nl/notFound.json";
import servicesNl from "./locales/nl/services.json";
import storiesNl from "./locales/nl/stories.json";
import workNl from "./locales/nl/work.json";

import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    about: aboutEn,
    careers: careersEn,
    common: commonEn,
    contact: contactEn,
    contactForm: contactFormEn,
    home: homeEn,
    notFound: notFoundEn,
    services: servicesEn,
    stories: storiesEn,
    work: workEn,
  },
  nl: {
    about: aboutNl,
    careers: careersNl,
    common: commonNl,
    contact: contactNl,
    contactForm: contactFormNl,
    home: homeNl,
    notFound: notFoundNl,
    services: servicesNl,
    stories: storiesNl,
    work: workNl,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
