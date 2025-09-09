import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADER_H = 72; // hauteur du header en px (mobile)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLDivElement>(null);

  // Fermer le menu à chaque changement de route
  useEffect(() => {
    setIsMenuOpen(false);
    // déverrouiller le scroll si besoin
    document.body.style.overflow = "unset";
  }, [location.pathname]);

  // Lock scroll quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMenuOpen]);

  // Pousser la page sous le header fixe (avec safe-area iOS)
  useEffect(() => {
    const pad = `calc(env(safe-area-inset-top, 0px) + ${HEADER_H}px)`;
    document.documentElement.style.setProperty("--header-h", pad);
    document.body.style.paddingTop = pad;
    return () => { document.body.style.paddingTop = "0px"; };
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/presentation", label: "About" },
    { href: "/collection", label: "Collection" },
    { href: "/order", label: "Order" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 inset-x-0 z-[999] bg-white/92 backdrop-blur-sm border-b border-[#eee] shadow-sm"
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="GLAMHOME FASHION - Return to homepage"
          >
            <img
              src="/lovable-uploads/bf5bb623-c977-4166-a974-1f331812e41d.png"
              alt="GLAMHOME FASHION"
              className="h-9 lg:h-11 w-auto object-contain"
              width={256}
              height={256}
              loading="eager"
              decoding="sync"
            />
          </Link>

          {/* Nav desktop (centrée) */}
          <div className="hidden lg:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#B48A7C] ${
                  isActive(item.href)
                    ? "text-[#B48A7C] border-b-2 border-[#B48A7C] pb-1"
                    : "text-[#0F0F0F]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Actions desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="icon" aria-label="Instagram" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Email" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-2 border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
            >
              <Link to="/collection">Shop</Link>
            </Button>
          </div>

          {/* Bouton menu mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#0F0F0F] hover:text-[#B48A7C]"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Menu mobile (démarre sous le header) */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="fixed inset-x-0 bottom-0 z-[998] bg-white overflow-y-auto"
            style={{ top: "var(--header-h, 72px)" }} // commence sous le header
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-[#B48A7C] text-center py-3 ${
                      isActive(item.href) ? "text-[#B48A7C]" : "text-[#0F0F0F]"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="flex items-center justify-center space-x-6 pt-8 border-t border-gray-200">
                  <Button variant="ghost" size="icon" aria-label="Instagram" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <Instagram className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Email" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <Mail className="h-6 w-6" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
                  >
                    <Link to="/collection">Shop</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
