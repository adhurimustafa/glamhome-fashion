import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Eye, ShoppingCart } from "lucide-react";

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  color: string;
  altText: string;
}

const featuredItems: CollectionItem[] = [
  {
    id: 1,
    title: "Robe Émeraude Élégance",
    description: "Robe de soirée en satin émeraude avec détails dorés et fente élégante.",
    image: "/lovable-uploads/ffc06c00-6ffc-4cb7-ba44-4ac0525d5b77.png",
    category: "Soirée",
    price: "459€",
    color: "Vert émeraude",
    altText: "Robe longue fendue vert émeraude, décolleté bardot — Glam Home Fashion"
  },
  {
    id: 2,
    title: "Robe Fuchsia Glamour",
    description: "Robe longue en dentelle fuchsia avec manches longues et traîne sophistiquée.",
    image: "/lovable-uploads/8ef503f8-1dce-401a-97b4-759411b0f1fe.png",
    category: "Cocktail",
    price: "399€",
    color: "Fuchsia",
    altText: "Robe longue fuchsia manches en tulle, fente haute — Glam Home Fashion"
  },
  {
    id: 3,
    title: "Robe Noire Asymétrique",
    description: "Design avant-gardiste avec découpes asymétriques et fente audacieuse.",
    image: "/lovable-uploads/a018e30d-8796-4cea-8975-4cc98c1d06a9.png",
    category: "Moderne",
    price: "425€",
    color: "Noir",
    altText: "Robe noire asymétrique découpes, fente — Glam Home Fashion"
  },
  {
    id: 4,
    title: "Robe Rose Poudrée",
    description: "Élégance romantique avec décolleté bardot et drapé délicat.",
    image: "/lovable-uploads/fab7fcbb-98b4-427f-9167-bf507006a59d.png",
    category: "Romantique",
    price: "379€",
    color: "Rose poudré",
    altText: "Robe rose poudré décolleté bardot, fente — Glam Home Fashion"
  },
  {
    id: 5,
    title: "Robe Noire Dentelle",
    description: "Raffinement intemporel avec dentelle délicate et silhouette sirène.",
    image: "/lovable-uploads/e8ca46d4-6f23-4fd5-be4d-31b18cc0078b.png",
    category: "Classique",
    price: "445€",
    color: "Noir",
    altText: "Robe noire off-shoulder dentelle, fente — Glam Home Fashion"
  },
  {
    id: 6,
    title: "Robe Grise Métallisée",
    description: "Texture métallisée sophistiquée avec drapé sculptural.",
    image: "/lovable-uploads/1f44e598-de15-44f9-913a-7870bf06ba74.png",
    category: "Luxe",
    price: "495€",
    color: "Gris perle",
    altText: "Robe gris perle drapée, fente — Glam Home Fashion"
  },
  {
    id: 7,
    title: "Robe Noire Paillettes",
    description: "Création exclusive avec broderies de perles et silhouette majestueuse.",
    image: "/lovable-uploads/373fe360-5684-4f42-a6bf-ebc91be6d05d.png",
    category: "Prestige",
    price: "650€",
    color: "Noir",
    altText: "Robe noire perles/strass dégradés, manches longues — Glam Home Fashion"
  }
];

const FeaturedCollection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    setCurrentImageIndex((prev) => (prev + 1) % featuredItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
  };

  const handleOrderClick = () => {
    const element = document.querySelector('#order');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to /order page if #order doesn't exist
      window.location.href = '/order';
    }
  };

  const currentItem = featuredItems[currentImageIndex];
  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Dernières Créations
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            Nos Nouvelles Arrivées
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez notre collection exclusive de robes de soirée, chaque pièce 
            reflétant notre passion pour l'excellence et le raffinement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  src={item.image}
                  alt={item.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  width="600"
                  height="800"
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
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-medium text-primary">
                    {item.price}
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-colors focus:ring-2 focus:ring-primary/50"
                    onClick={() => openLightbox(index)}
                    aria-label={`Voir en détail ${item.title}`}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Voir
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-primary hover:shadow-soft transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    onClick={handleOrderClick}
                    aria-label={`Commander ${item.title}`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-1" />
                    Commander
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-slide-up">
          <Link to="/collection">
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-soft transition-all duration-300 px-8 py-3 text-lg focus:ring-2 focus:ring-primary/50"
            >
              Voir Toute la Collection
            </Button>
          </Link>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
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
                  src={currentItem.image}
                  alt={currentItem.altText}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                  width="600"
                  height="800"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">{currentItem.title}</h3>
                  <p className="text-lg opacity-90">{currentItem.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-xl font-medium text-primary-light">{currentItem.price}</span>
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full">{currentItem.color}</span>
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