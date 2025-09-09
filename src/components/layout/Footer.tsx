import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#E7D6CB] text-[#222]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-serif font-medium text-lg">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-[#B48A7C] transition-colors duration-300">Accueil</Link></li>
              <li><Link to="/presentation" className="hover:text-[#B48A7C] transition-colors duration-300">À propos</Link></li>
              <li><Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300">Collection</Link></li>
              <li><Link to="/order" className="hover:text-[#B48A7C] transition-colors duration-300">Commander</Link></li>
              <li><Link to="/contact" className="hover:text-[#B48A7C] transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-6">
            <h4 className="font-serif font-medium text-lg">Collections</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300">Femme</Link></li>
              <li><Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300">Prestige</Link></li>
              <li><Link to="/collection" className="hover:text-[#B48A7C] transition-colors duration-300">Nouveautés</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif font-medium text-lg">Contact</h4>
            <div className="space-y-3 text-sm leading-relaxed">
              <p>123 Rue de l'Élégance, 75001 Paris</p>
              <p>+33 1 23 45 67 89</p>
              <p>
                <a href="mailto:contact@glamhome.fashion" className="hover:text-[#B48A7C] transition-colors duration-300">
                  contact@glamhome.fashion
                </a>
              </p>
            </div>

            <div className="flex space-x-4 pt-2">
              <Button asChild variant="ghost" size="icon" className="text-[#222] hover:text-[#B48A7C] hover:bg-transparent p-0 h-auto w-auto" aria-label="Instagram">
                <a href="https://www.instagram.com/glam_fashion.store" target="_blank" rel="noopener noreferrer">
                  <Instagram className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon" className="text-[#222] hover:text-[#B48A7C] hover:bg-transparent p-0 h-auto w-auto" aria-label="Email">
                <a href="mailto:contact@glamhome.fashion">
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#222]/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm font-light">© GLAMHOME FASHION</p>
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
              <a href="#" className="hover:text-[#B48A7C] transition-colors duration-300">Politique de confidentialité</a>
              <a href="#" className="hover:text-[#B48A7C] transition-colors duration-300">Conditions</a>
              <a href="#" className="hover:text-[#B48A7C] transition-colors duration-300">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
