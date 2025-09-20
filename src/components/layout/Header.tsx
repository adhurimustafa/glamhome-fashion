import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);

    // éviter le scroll en arrière-plan quand le menu mobile est ouvert
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/collection", label: t("nav.collection") },
    { href: "/contact", label: t("nav.contact") }
  ];

  const isActive = (href: string) =>
    href === "/" ? location.pathname === "/" : location.pathname.startsWith(href);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 will-change-transform
      ${isScrolled ? "bg-white/92 backdrop-blur-sm" : "bg-white/92 backdrop-blur-sm"}
      `}
      // ✅ plus de border-b ici
      style={{ transform: "translateZ(0)" }}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="GLAMHOME FASHION - Home"
          >
            <img
              src="/images/logos/logo-256.png"
              alt="GLAMHOME FASHION"
              className="h-9 lg:h-11 w-auto object-contain"
              width="256"
              height="256"
              loading="eager"
              decoding="sync"
              sizes="44px"
            />
          </Link>

          {/* Nav (desktop) */}
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

          {/* Actions (desktop) */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("aria.instagram")}
              className="text-[#0F0F0F] hover:text-[#B48A7C]"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={t("aria.email")}
              className="text-[#0F0F0F] hover:text-[#B48A7C]"
            >
              <Mail className="h-5 w-5" />
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="ml-2 border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
            >
              <Link to="/collection">{t("nav.shop")}</Link>
            </Button>
          </div>

          {/* Toggle (mobile) */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-[#0F0F0F] hover:text-[#B48A7C]"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Nav (mobile) */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 lg:hidden overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-lg font-medium transition-colors hover:text-[#B48A7C] text-center py-3 ${
                      isActive(item.href) ? "text-[#B48A7C]" : "text-[#0F0F0F]"
                    }`}
                    onClick={handleNavClick}
                  >
                    {item.label}
                  </Link>
                ))}

                {/* Mobile actions */}
                <div className="flex items-center justify-center gap-4 pt-8 border-t border-gray-200">
                  <LanguageSwitcher />
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t("aria.instagram")}
                    className="text-[#0F0F0F] hover:text-[#B48A7C]"
                  >
                    <Instagram className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label={t("aria.email")}
                    className="text-[#0F0F0F] hover:text-[#B48A7C]"
                  >
                    <Mail className="h-6 w-6" />
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
                  >
                    <Link to="/collection">{t("nav.shop")}</Link>
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
