import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

interface CollectionImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
}

const collectionImages: CollectionImage[] = [
  {
    id: 1,
    src: "/lovable-uploads/ffc06c00-6ffc-4cb7-ba44-4ac0525d5b77.png",
    alt: "Robe de soirée Glam Fashion – #1",
    width: 600,
    height: 800
  },
  {
    id: 2,
    src: "/lovable-uploads/8ef503f8-1dce-401a-97b4-759411b0f1fe.png", 
    alt: "Robe de soirée Glam Fashion – #2",
    width: 600,
    height: 800
  },
  {
    id: 3,
    src: "/lovable-uploads/a018e30d-8796-4cea-8975-4cc98c1d06a9.png",
    alt: "Robe de soirée Glam Fashion – #3", 
    width: 600,
    height: 800
  },
  {
    id: 4,
    src: "/lovable-uploads/fab7fcbb-98b4-427f-9167-bf507006a59d.png",
    alt: "Robe de soirée Glam Fashion – #4",
    width: 600, 
    height: 800
  },
  {
    id: 5,
    src: "/lovable-uploads/e8ca46d4-6f23-4fd5-be4d-31b18cc0078b.png",
    alt: "Robe de soirée Glam Fashion – #5",
    width: 600,
    height: 800
  },
  {
    id: 6,
    src: "/lovable-uploads/1f44e598-de15-44f9-913a-7870bf06ba74.png",
    alt: "Robe de soirée Glam Fashion – #6",
    width: 600,
    height: 800
  },
  {
    id: 7,
    src: "/lovable-uploads/373fe360-5684-4f42-a6bf-ebc91be6d05d.png",
    alt: "Robe de soirée Glam Fashion – #7",
    width: 600,
    height: 800
  }
];

const Collection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update page title and meta
  useEffect(() => {
    document.title = "Collection – Glam Fashion";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez notre collection exclusive de robes de soirée. Élégance et sophistication pour vos événements les plus prestigieux.');
    }
    
    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/collection');
    }
    
    return () => {
      // Reset to default on unmount
      document.title = "GLAMHOME FASHION — Robes de soirée & haute élégance";
    };
  }, []);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % collectionImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + collectionImages.length) % collectionImages.length);
  };

  const currentImage = collectionImages[currentImageIndex];

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link 
            to="/" 
            className="hover:text-[#B48A7C] transition-colors flex items-center"
            aria-label="Retour à l'accueil"
          >
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <span>/</span>
          <span className="text-[#0F0F0F] font-medium">Collection</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-luxury-pearl to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-light text-[#0F0F0F] mb-4">
            Collection
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos robes de soirée sélectionnées
          </p>
        </div>
      </section>

      {/* Collection Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collectionImages.map((image, index) => (
              <Card 
                key={image.id}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-5xl max-h-full" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 focus:ring-2 focus:ring-white/50"
              onClick={closeLightbox}
              aria-label="Fermer la lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/50"
              onClick={prevImage}
              aria-label="Image précédente"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 focus:ring-2 focus:ring-white/50"
              onClick={nextImage}
              aria-label="Image suivante"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-[90vh] object-contain mx-auto"
                width={currentImage.width}
                height={currentImage.height}
              />
              
              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {collectionImages.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Collection;