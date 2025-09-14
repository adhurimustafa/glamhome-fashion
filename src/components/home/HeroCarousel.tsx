import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { slides, type Slide } from "@/data/heroSlides";

// ⏱️ 2000 ms = 2 s
const AUTO_DELAY = 2000;

const HeroCarousel = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = (index: number) =>
    setCurrentSlide((index + slides.length) % slides.length);
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  // Auto-play toutes les 2s. Pause uniquement au survol.
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;
    const id = setInterval(() => {
      setCurrentSlide((i) => (i + 1) % slides.length);
    }, AUTO_DELAY);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  if (slides.length === 0) return null;

  return (
    <>
      {/* LCP preload du premier visuel */}
      <link rel="preload" as="image" href={slides[0].image} fetchPriority="high" />

      <section
        className="hero relative w-full overflow-hidden aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] max-[767px]:aspect-[4/5]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{ zIndex: 10 }}
      >
        {slides.map((slide: Slide, index: number) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.alt}
                className="h-full w-full object-cover object-center"
                width={1920}
                height={1280}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "low"}
                sizes="100vw"
              />

              {/* Dégradé de lisibilité */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />

              {/* Contenu (titre + slogan + CTA) */}
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-[900px] px-4">
                  <h1
                    className="font-serif font-bold leading-none mb-4"
                    style={{ fontSize: "clamp(48px, 8vw, 96px)", letterSpacing: "-0.02em" }}
                  >
                    {t("home.hero.title", "Glamour Collection")}
                  </h1>
                  <p
                    className="mb-8 opacity-95"
                    style={{ fontSize: "clamp(18px, 3vw, 26px)" }}
                  >
                    {t("home.hero.subtitle", "Élégance en chaque silhouette")}
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-black hover:bg-white/90 font-medium px-8 py-3 text-lg shadow-lg"
                  >
                    <Link to="/collection">{t("home.hero.cta", "Voir la Collection")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Flèches */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={prevSlide}
          aria-label={t("home.hero.prev", "Slide précédent")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={nextSlide}
          aria-label={t("home.hero.next", "Slide suivant")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Bullets */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((s, index) => (
            <button
              key={s.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`${t("home.hero.goto", "Aller au slide")} ${index + 1} - ${s.alt}`}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroCarousel;
