import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/common.json";
import fr from "./locales/fr/common.json";
import sq from "./locales/sq/common.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Ressources + namespace par défaut "translation"
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      sq: { translation: sq },
    },
    ns: ["translation"],
    defaultNS: "translation",

    // ⚙️ FR par défaut
    fallbackLng: "fr",

    // Mappe en-US → en, fr-FR → fr, etc.
    supportedLngs: ["fr", "en", "sq"],
    nonExplicitSupportedLngs: true,
    load: "languageOnly",

    interpolation: { escapeValue: false },

    // Détection de langue fiable
    detection: {
      order: ["localStorage", "htmlTag", "navigator", "querystring"],
      lookupLocalStorage: "i18nextLng",
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },

    // Pas de Suspense pour éviter d’afficher les clés brutes pendant le chargement
    react: { useSuspense: false },

    // En dev, log utile dans la console
    debug: import.meta.env.MODE === "development",

    // Évite de retourner null/"" si une clé existe mais vide
    returnNull: false,
    returnEmptyString: false,
  });

// Met à jour <html lang="...">
i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng;
  }
});

export default i18n;
