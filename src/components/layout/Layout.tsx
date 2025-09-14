import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTranslation } from "react-i18next";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { i18n } = useTranslation();
  const current = i18n.language?.startsWith("fr") ? "fr" : "en";

  const changeLanguage = (lng: "fr" | "en") => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Barre de langue */}
      <div className="flex justify-end gap-2 p-2 text-sm bg-gray-100">
        <button
          onClick={() => changeLanguage("fr")}
          className={`px-2 py-1 rounded ${current === "fr" ? "font-bold underline" : ""}`}
        >
          FR
        </button>
        <span>|</span>
        <button
          onClick={() => changeLanguage("en")}
          className={`px-2 py-1 rounded ${current === "en" ? "font-bold underline" : ""}`}
        >
          EN
        </button>
      </div>

      {/* Header existant */}
      <Header />

      {/* Contenu principal */}
      <div className="flex-1">{children}</div>

      {/* Footer existant */}
      <Footer />
    </div>
  );
};

export default Layout;
