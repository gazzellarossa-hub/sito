import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations
import translationEN from "./locales/en/translation.json";
import translationIT from "./locales/it/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "it", // default language
    fallbackLng: "en",

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;