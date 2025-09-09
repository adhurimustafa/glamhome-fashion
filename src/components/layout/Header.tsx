import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Fermer le menu dès qu'on change de route (sécurité UX)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Scroll state + scroll-lock mobile
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);

    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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
      className={`fixed inset-x-0 top-0 z-[100] transition-colors duration-300
        ${isScrolled ? "bg-white/90 backdrop-blur border-b border-neutral-200" : "bg-white/90 backdrop-blur border-b border-neutral-200"}`}
    >
      {/* Hauteur fixe = 64px (16 * 4) pour caler le menu mobile en top-16 */}
      <nav className="container mx-auto h-16 px-4">
        <div className="flex h-full items-center gap-4">
          {/* Logo (gauche) */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="GLAMHOME FASHION — retour à l'accueil"
          >
            <img
              src="/lovable-uploads/bf5bb623-c977-4166-a974-1f331812e41d.png"
              alt="GLAMHOME FASHION"
              className="h-9 lg:h-11 w-auto object-contain"
              width={256}
              height={256}
              loading="eager"
              decoding="sync"
              sizes="44px"
            />
          </Link>

          {/* Nav centre (flex-1 pour centrer naturellement) */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`text-sm font-medium transition-colors hover:text-[#B48A7C] 
                    ${active ? "text-[#B48A7C] border-b-2 border-[#B48A7C] pb-1" : "text-[#0F0F0F]"}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Actions (droite) */}
          <div className="hidden lg:flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" aria-label="Instagram" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <a href="https://www.instagram.com/glam_fashion.store" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Email" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <a href="mailto:contact@glamhome.fashion">
                <Mail className="h-5 w-5" />
              </a>
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

          {/* Bouton burger (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden ml-auto text-[#0F0F0F] hover:text-[#B48A7C]"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Overlay mobile */}
        {isMenuOpen && (
          <div className="fixed inset-x-0 top-16 bottom-0 bg-white z-[90] overflow-y-auto lg:hidden">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => {
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-lg font-medium text-center py-3 transition-colors hover:text-[#B48A7C]
                        ${active ? "text-[#B48A7C]" : "text-[#0F0F0F]"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}

                <div className="flex items-center justify-center gap-6 pt-8 border-t border-gray-200">
                  <Button asChild variant="ghost" size="icon" aria-label="Instagram" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <a href="https://www.instagram.com/glam_fashion.store" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-6 w-6" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" aria-label="Email" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <a href="mailto:contact@glamhome.fashion">
                      <Mail className="h-6 w-6" />
                    </a>
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
