import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Handle mobile menu scroll lock
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "#collection", label: "Collection", isScroll: true },
    { href: "/order", label: "Order" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  const handleNavClick = (item: any) => {
    if (item.isScroll) {
      const element = document.querySelector('#collection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/72 backdrop-blur-[8px] border-b border-black/8' 
        : 'bg-white/72 backdrop-blur-[8px] border-b border-black/8'
    }`}>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Glam Fashion - Return to homepage"
          >
            <img 
              src="/lovable-uploads/bf5bb623-c977-4166-a974-1f331812e41d.png"
              alt="Glam Fashion logo"
              className="h-9 lg:h-11 w-auto object-contain"
              width="256"
              height="256"
              loading="eager"
              decoding="sync"
              sizes="44px"
            />
            <span className="sr-only">GLAMHOME FASHION</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isScroll ? (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-sm font-medium transition-colors hover:text-[#B48A7C] text-[#0F0F0F]"
                >
                  {item.label}
                </button>
              ) : (
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
              )
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Account" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Shopping bag" className="text-[#0F0F0F] hover:text-[#B48A7C]">
              <ShoppingBag className="h-5 w-5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#0F0F0F] hover:text-[#B48A7C]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-white z-40 md:hidden overflow-y-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  item.isScroll ? (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item)}
                      className="text-lg font-medium transition-colors hover:text-[#B48A7C] text-[#0F0F0F] text-center py-3"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <Link
                      key={item.href}
                      to={item.href}
                      className={`text-lg font-medium transition-colors hover:text-[#B48A7C] text-center py-3 ${
                        isActive(item.href) ? "text-[#B48A7C]" : "text-[#0F0F0F]"
                      }`}
                      onClick={() => handleNavClick(item)}
                    >
                      {item.label}
                    </Link>
                  )
                ))}
                <div className="flex items-center justify-center space-x-6 pt-8 border-t border-gray-200">
                  <Button variant="ghost" size="icon" aria-label="Account" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <User className="h-6 w-6" />
                  </Button>
                  <Button variant="ghost" size="icon" aria-label="Shopping bag" className="text-[#0F0F0F] hover:text-[#B48A7C]">
                    <ShoppingBag className="h-6 w-6" />
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