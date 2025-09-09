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
    image: "/lovable-uploads/be2a2ed6-6b02-48f8-a618-8f78b3b7f534.png",
    title: "Robes de soirée d'exception",
    subtitle: "Élégance couture, prêtes à briller.",
    description: "",
    cta: {
      text: "",
      href: ""
    }
  },
  {
    id: 2,
    image: "/lovable-uploads/0ab5813f-0047-4366-b470-f302465aeb63.png",
    title: "Robes de soirée d'exception",
    subtitle: "Élégance couture, prêtes à briller.",
    description: "",
    cta: {
      text: "",
      href: ""
    }
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleCTAClick = (href: string) => {
    if (href === "#collection") {
      const element = document.querySelector('#collection');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      {/* LCP Preload for first slide */}
      <link 
        rel="preload" 
        as="image" 
        href={slides[0].image} 
        type="image/png"
        fetchPriority="high"
      />
      
      <section 
        className="hero relative w-full overflow-hidden min-h-[75vh] md:min-h-[82vh] lg:min-h-[92vh]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ zIndex: 10 }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              {/* TODO: When Lovable supports srcset/picture, implement responsive images:
                   - Breakpoints: 3840, 2560, 1920, 1280, 768, 480px
                   - Formats: WebP/AVIF + JPEG fallback
                   - Keep existing sizes="100vw" attribute
                   Example:
                   <picture>
                     <source media="(min-width: 1920px)" srcset="image-3840.avif 3840w, image-2560.avif 2560w" type="image/avif">
                     <source media="(min-width: 1920px)" srcset="image-3840.webp 3840w, image-2560.webp 2560w" type="image/webp">
                     <img src="image-1920.jpg" sizes="100vw" />
                   </picture>
              */}
              <img
                src={slide.image}
                alt={index === 0 ? "Robes de soirée — shooting château" : "Robes de soirée — shooting désert"}
                className="h-full w-full object-cover"
                width="1920"
                height="1280"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="100vw"
              />
              
              {/* Optimized Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/38 via-black/15 to-black/5" />
              
              {/* Content - Title and Slogan only */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-[900px] px-4 animate-fade-in">
                  <h1 
                    className="font-serif font-semibold leading-none mb-6"
                    style={{ 
                      fontSize: 'clamp(38px, 6vw, 74px)',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="opacity-95"
                    style={{ 
                      fontSize: 'clamp(16px, 2.4vw, 22px)'
                    }}
                  >
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows - reduced z-index */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={prevSlide}
          aria-label="Slide précédent"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={nextSlide}
          aria-label="Slide suivant"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dots Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "bg-white scale-110" 
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Aller au slide ${index + 1} - ${index === 0 ? 'Robes de soirée — shooting château' : 'Robes de soirée — shooting désert'}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroCarousel;