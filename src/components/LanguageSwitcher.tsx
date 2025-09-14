import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  // langue actuelle (simplifiée : fr / en / sq)
  const current =
    i18n.language?.startsWith("fr")
      ? "fr"
      : i18n.language?.startsWith("sq")
      ? "sq"
      : "en";

  const change = (lng: "en" | "fr" | "sq") => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng); // mémorise le choix
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() => change("fr")}
        className={`px-2 transition-colors ${
          current === "fr" ? "font-bold text-[#B48A7C]" : "text-gray-600 hover:text-[#B48A7C]"
        }`}
        aria-pressed={current === "fr"}
      >
        FR
      </button>
      <span className="text-gray-400">·</span>
      <button
        onClick={() => change("en")}
        className={`px-2 transition-colors ${
          current === "en" ? "font-bold text-[#B48A7C]" : "text-gray-600 hover:text-[#B48A7C]"
        }`}
        aria-pressed={current === "en"}
      >
        EN
      </button>
      <span className="text-gray-400">·</span>
      <button
        onClick={() => change("sq")}
        className={`px-2 transition-colors ${
          current === "sq" ? "font-bold text-[#B48A7C]" : "text-gray-600 hover:text-[#B48A7C]"
        }`}
        aria-pressed={current === "sq"}
      >
        SQ
      </button>
    </div>
  );
}
