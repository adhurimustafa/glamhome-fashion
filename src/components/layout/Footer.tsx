import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-primary">
              Glam Home Fashion
            </h3>
            <p className="text-sm leading-relaxed opacity-90">
              Découvrez l'élégance au quotidien avec notre collection exclusive de mode et décoration d'intérieur.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-primary transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/order" className="hover:text-primary transition-colors">
                  Commander
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Collections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Mode Femme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accessoires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Décoration
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Lifestyle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Nouveautés
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <p>123 Rue de l'Élégance<br />75001 Paris, France</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <p>+33 1 23 45 67 89</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <p>contact@glamhome.fashion</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent-light mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-75">
              © 2024 Glam Home Fashion. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-primary transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Conditions d'utilisation
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;