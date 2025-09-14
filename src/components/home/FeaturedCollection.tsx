import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Eye, ShoppingCart } from "lucide-react";
import products from "@/data/products.json";

type Lang = "fr" | "en" | "sq";

interface Localized {
  fr: string;
  en: string;
  sq: string;
}

interface Product {
  slug: string;
  name: Localized;
  description: Localized;
  category: Localized;
  color: Localized;
  price: number;          // euros
  images: string[];       // /images/dresses/...
}

const FeaturedCollection = () => {
  const { t, i18n } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);     // index du produit
  const [lightboxImgIdx, setLightboxImgIdx] = useState(0); // index de la photo dans le produit

  const lang: Lang = useMemo(() => {
    const code = (i18n.language || "fr").slice(0, 2).toLowerCase();
    if (code === "fr" || code === "en" || code === "sq") return code as Lang;
    return "fr";
  }, [i18n.language]);

  const items = (products as Product[]).map((p) => {
    const name = p.name[lang] || p.name.en || p.name.fr;
    const description = p.description[lang] || p.description.en || p.description.fr;
    const category = p.category[lang] || p.category.en || p.category.fr;
    const color = p.color[lang] || p.color.en || p.color.fr;
    const priceText = p.price > 0 ? `${p.price}€` : t("collection.price", { defaultValue: "—" });
    const image = p.images[0];
    const alt = `${name} — Glam Home Fashion`;
    return { ...p, name, description, category, color, priceText, image, alt };
  });

  const openLightbox = (idx: number) => {
    setCurrentIndex(idx);
    setLightboxImgIdx(0);   // on repart de la 1ʳᵉ photo du produit
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  // Naviguer entre PRODUITS
  const nextProduct = () => {
    setCurrentIndex((i) => {
      const next = (i + 1) % items.length;
      setLightboxImgIdx(0);
      return next;
    });
  };
  const prevProduct = () => {
    setCurrentIndex((i) => {
      const prev = (i - 1 + items.length) % items.length;
      setLightboxImgIdx(0);
      return prev;
    });
  };

  const current = items[currentIndex];

  // Naviguer entre PHOTOS d’un même produit
  const nextPhoto = () => {
    setLightboxImgIdx((i) => (i + 1) % current.images.length);
  };
  const prevPhoto = () => {
    setLightboxImgIdx((i) => (i - 1 + current.images.length) % current.images.length);
  };

  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        {/* Grille produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {items.map((item, index) => (
            <Card
              key={item.slug}
              className="gallery-card group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <div className="media relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width={600}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 text-xs font-medium rounded-full">
                    {item.color}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-medium text-accent mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-primary">
                    {item.priceText}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors focus:ring-2 focus:ring-primary/50"
                    onClick={() => openLightbox(index)}
                    aria-label={`${t("collection.buttons.view")} ${item.name}`}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    {t("collection.buttons.view")}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary hover:shadow-soft transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    onClick={() => {
                      const el = document.querySelector("#order");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      else window.location.href = "/order";
                    }}
                    aria-label={`${t("collection.buttons.order")} ${item.name}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {t("collection.buttons.order")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up">
          <Link to="/collection">
            <Button size="lg" className="gradient-primary hover:shadow-soft transition-all duration-300 px-8 py-3 text-lg">
              {t("home.cta.viewCollection")}
            </Button>
          </Link>
        </div>

        {/* Lightbox */}
        {lightboxOpen && current && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              {/* Fermer */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 focus:ring-2 focus:ring-white/50"
                onClick={closeLightbox}
                aria-label="Fermer"
              >
                <X className="h-6 w-6" />
              </Button>

              {/* Produit précédent/suivant */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/50"
                onClick={prevProduct}
                aria-label="Robe précédente"
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/50"
                onClick={nextProduct}
                aria-label="Robe suivante"
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="relative">
                {/* PHOTO courante de la robe */}
                <img
                  src={current.images[lightboxImgIdx]}
                  alt={current.alt}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                  width={800}
                  height={1067}
                  loading="eager"
                />

                {/* Bandeau descriptif */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">{current.name}</h3>
                  <p className="text-lg opacity-90">{current.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xl font-medium text-primary-light">{current.price > 0 ? `${current.price}€` : "—"}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{current.color}</span>
                  </div>

                  {/* Contrôles photo (si plusieurs images) */}
                  {current.images.length > 1 && (
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {current.images.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setLightboxImgIdx(i)}
                            className={`h-2.5 w-2.5 rounded-full ${i === lightboxImgIdx ? "bg-white" : "bg-white/40"}`}
                            aria-label={`Aller à la photo ${i + 1}`}
                          />
                        ))}
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="text-white border-white/50 hover:bg-white/10" onClick={prevPhoto}>
                          <ChevronLeft className="h-4 w-4 mr-1" /> Photo
                        </Button>
                        <Button variant="outline" size="sm" className="text-white border-white/50 hover:bg-white/10" onClick={nextPhoto}>
                          Photo <ChevronRight className="h-4 w-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default FeaturedCollection;
