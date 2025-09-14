import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traduction
import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import sq from "./locales/sq/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sq: { translation: sq },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "fr", "sq"],
    interpolation: {
      escapeValue: false, // react déjà protégé contre XSS
    },
    detection: {
      order: ["localStorage", "querystring", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    debug: process.env.NODE_ENV === "development", // utile pour voir les logs i18n
  });

// Met à jour <html lang="...">
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
