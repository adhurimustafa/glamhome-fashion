import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  cta: {
    text: string;
    href: string;
  };
}

const slides: Slide[] = [
  {
    id: 1,
    image: hero1,
    title: "Élégance Intemporelle",
    subtitle: "Collection Automne-Hiver 2024",
    description: "Découvrez notre nouvelle collection alliant mode et décoration d'intérieur pour un style de vie raffiné.",
    cta: {
      text: "Découvrir la Collection",
      href: "/collection"
    }
  },
  {
    id: 2,
    image: hero2,
    title: "Art de Vivre",
    subtitle: "Accessoires & Décoration",
    description: "Transformez votre intérieur avec nos pièces uniques et nos accessoires de mode exceptionnels.",
    cta: {
      text: "Explorer les Tendances",
      href: "/collection"
    }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentSlide ? "translate-x-0" : 
            index < currentSlide ? "-translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="relative h-full w-full">
            <img
              src={slide.image}
              alt={index === 0 ? "Glam Home Fashion — Robe soirée, modèle 1" : "Glam Home Fashion — Robe soirée, modèle 2"}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 gradient-overlay" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center text-center text-white">
              <div className="max-w-4xl px-4 animate-fade-in">
                <p className="text-lg md:text-xl font-light tracking-wide mb-4 opacity-90">
                  {slide.subtitle}
                </p>
                <h1 className="text-5xl md:text-7xl font-serif font-light leading-tight mb-6">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto opacity-90">
                  {slide.description}
                </p>
                <Link to={slide.cta.href}>
                  <Button 
                    size="lg" 
                    className="gradient-primary hover:shadow-elegant transition-all duration-300 text-white border-0 px-8 py-3 text-lg font-medium"
                  >
                    {slide.cta.text}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-10"
        onClick={prevSlide}
        aria-label="Slide précédent"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-10"
        onClick={nextSlide}
        aria-label="Slide suivant"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Aller au slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;