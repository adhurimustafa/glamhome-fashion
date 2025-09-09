import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const INSTAGRAM_URL = "https://www.instagram.com/glam_fashion.store";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="bg-[#E7D6CB] text-[#222]">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* NAVIGATION */}
          <nav aria-label="Navigation principale" className="space-y-6">
            <h4 className="font-serif font-medium text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/presentation" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Commander
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* COLLECTIONS */}
          <nav aria-label="Raccourcis collections" className="space-y-6">
            <h4 className="font-serif font-medium text-lg">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Femme
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Prestige
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                  Nouveautés
                </Link>
              </li>
            </ul>
          </nav>

          {/* CONTACT */}
          <section aria-labelledby="footer-contact" className="space-y-6">
            <h4 id="footer-contact" className="font-serif font-medium text-lg">Contact</h4>
            <address className="not-italic space-y-3 text-sm leading-relaxed">
              <p>123 Rue de l'Élégance, Paris</p>
              <p>+33 1 23 45 67 89</p>
              <p>
                <a
                  href="mailto:contact@glamhome.fashion"
                  className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded"
                >
                  contact@glamhome.fashion
                </a>
              </p>
            </address>

            {/* Réseaux */}
            <div className="flex gap-4 pt-2">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-[#222] hover:text-[#B48A7C] hover:bg-transparent p-0 h-auto w-auto focus-visible:ring-[#B48A7C]/40"
              >
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ouvrir Instagram (nouvel onglet)"
                >
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">Instagram</span>
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-[#222] hover:text-[#B48A7C] hover:bg-transparent p-0 h-auto w-auto focus-visible:ring-[#B48A7C]/40"
              >
                <a href="mailto:contact@glamhome.fashion" aria-label="Envoyer un email">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </div>
          </section>
        </div>

        {/* BAS DE PAGE */}
        <div className="border-t border-[#222]/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-sm font-light">© {year} GLAMHOME FASHION</p>

            <nav aria-label="Liens légaux" className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <Link to="/legal/privacy" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                Politique de confidentialité
              </Link>
              <Link to="/legal/terms" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                Conditions
              </Link>
              <Link to="/legal/cgv" className="hover:text-[#B48A7C] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B48A7C]/40 rounded">
                CGV
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
