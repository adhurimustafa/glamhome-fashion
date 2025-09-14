import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Eye, ShoppingCart } from "lucide-react";

interface CollectionItem {
  id: number;
  key: string; // clé i18n
  image: string;
  price: string;
}



const FeaturedCollection = () => {
  const { t } = useTranslation();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "unset";
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const handleOrderClick = () => {
    const element = document.querySelector("#order");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/order";
    }
  };

  const currentItem = featuredItems[currentImageIndex];

  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <Card
              key={item.id}
              className="gallery-card group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="media relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={t(`products.${item.key}.alt`)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    {t(`products.${item.key}.category`)}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 text-gray-800 px-3 py-1 text-xs font-medium rounded-full">
                    {t(`products.${item.key}.color`)}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-medium text-accent mb-2">
                  {t(`products.${item.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {t(`products.${item.key}.description`)}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-primary">{item.price}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => openLightbox(index)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    {t("collection.buttons.view")}
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 gradient-primary hover:shadow-soft transition-all duration-300"
                    onClick={handleOrderClick}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    {t("collection.buttons.order")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <Link to="/collection">
            <Button size="lg" className="gradient-primary px-8 py-3 text-lg">
              {t("collection.reset")}
            </Button>
          </Link>
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white"
                onClick={closeLightbox}
              >
                <X className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white"
                onClick={prevImage}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
                onClick={nextImage}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              <div className="relative">
                <img
                  src={currentItem.image}
                  alt={t(`products.${currentItem.key}.alt`)}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">
                    {t(`products.${currentItem.key}.title`)}
                  </h3>
                  <p className="text-lg opacity-90">{t(`products.${currentItem.key}.description`)}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xl font-medium text-primary-light">{currentItem.price}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                      {t(`products.${currentItem.key}.color`)}
                    </span>
                  </div>
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
