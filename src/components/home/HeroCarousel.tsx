import { useState, useEffect, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { slides as rawSlides, type Slide } from "@/data/heroSlides";

// 2 secondes
const AUTO_DELAY = 2000;

export default function HeroCarousel() {
  const { t } = useTranslation();

  const baseSlides = useMemo(() => rawSlides.slice(), []);
  const [slides, setSlides] = useState<Slide[]>([]);
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Préchargement + filtre 404
  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      const ok = await Promise.all(
        baseSlides.map(
          (s) =>
            new Promise<Slide | null>((resolve) => {
              const img = new Image();
              img.onload = () => resolve(s);
              img.onerror = () => resolve(null);
              img.src = s.image;
            })
        )
      );
      if (cancelled) return;
      const filtered = ok.filter(Boolean) as Slide[];
      setSlides(filtered);
      setCurrent(0);
    };
    load();
    return () => {
      cancelled = true;
    };
  }, [baseSlides]);

  const clear = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const start = () => {
    clear();
    if (hover || slides.length <= 1) return;
    // ❗ On ne respecte PAS "prefers-reduced-motion" pour garantir 2s
    timerRef.current = window.setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, AUTO_DELAY);
  };

  // Lancer/arrêter selon hover & nb slides
  useEffect(() => {
    start();
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hover, slides.length]);

  // Pause quand l’onglet n’est plus visible
  useEffect(() => {
    const onVis = () => (document.visibilityState === "visible" ? start() : clear());
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hover, slides.length]);

  const go = (idx: number) => {
    const n = slides.length;
    if (!n) return;
    setCurrent(((idx % n) + n) % n);
    start(); // reset après interaction
  };
  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  if (slides.length === 0) return null;

  return (
    <>
      <link rel="preload" as="image" href={slides[0].image} fetchPriority="high" />
      <section
        className="hero relative w-full overflow-hidden aspect-[16/9] md:aspect-[16/9] lg:aspect-[16/9] max-[767px]:aspect-[4/5]"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{ zIndex: 10 }}
      >
        {slides.map((s, i) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== current}
          >
            <div className="relative h-full w-full">
              <img
                src={s.image}
                alt={s.alt}
                className="h-full w-full object-cover object-center"
                width={1920}
                height={1280}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={i === 0 ? "high" : "low"}
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
              <div className="absolute inset-0 flex items-center justify-center text-center text-white">
                <div className="max-w-[900px] px-4">
                  <h1 className="font-serif font-bold leading-none mb-4" style={{ fontSize: "clamp(48px, 8vw, 96px)", letterSpacing: "-0.02em" }}>
                    {t("home.hero.title", "Glamour Collection")}
                  </h1>
                  <p className="mb-8 opacity-95" style={{ fontSize: "clamp(18px, 3vw, 26px)" }}>
                    {t("home.hero.subtitle", "Élégance en chaque silhouette")}
                  </p>
                  <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 font-medium px-8 py-3 text-lg shadow-lg">
                    <Link to="/collection">{t("home.hero.cta", "Voir la Collection")}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={prev}
          aria-label={t("home.hero.prev", "Slide précédent")}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 hover:text-white z-20"
          onClick={next}
          aria-label={t("home.hero.next", "Slide suivant")}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-white scale-110" : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => go(i)}
              aria-label={`${t("home.hero.goto", "Aller au visuel")} ${i + 1} - ${s.alt}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
