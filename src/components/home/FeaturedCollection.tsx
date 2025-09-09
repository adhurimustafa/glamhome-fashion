import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

interface CollectionItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
}

const featuredItems: CollectionItem[] = [
  {
    id: 1,
    title: "Robe Émeraude Élégance",
    description: "Robe de soirée en satin émeraude avec détails dorés et fente élégante.",
    image: "/lovable-uploads/ffc06c00-6ffc-4cb7-ba44-4ac0525d5b77.png",
    category: "Soirée",
    price: "459€"
  },
  {
    id: 2,
    title: "Robe Fuchsia Glamour",
    description: "Robe longue en dentelle fuchsia avec manches longues et traîne sophistiquée.",
    image: "/lovable-uploads/8ef503f8-1dce-401a-97b4-759411b0f1fe.png",
    category: "Cocktail",
    price: "399€"
  },
  {
    id: 3,
    title: "Robe Noire Asymétrique",
    description: "Design avant-gardiste avec découpes asymétriques et fente audacieuse.",
    image: "/lovable-uploads/a018e30d-8796-4cea-8975-4cc98c1d06a9.png",
    category: "Moderne",
    price: "425€"
  },
  {
    id: 4,
    title: "Robe Rose Poudrée",
    description: "Élégance romantique avec décolleté bardot et drapé délicat.",
    image: "/lovable-uploads/fab7fcbb-98b4-427f-9167-bf507006a59d.png",
    category: "Romantique",
    price: "379€"
  },
  {
    id: 5,
    title: "Robe Noire Dentelle",
    description: "Raffinement intemporel avec dentelle délicate et silhouette sirène.",
    image: "/lovable-uploads/e8ca46d4-6f23-4fd5-be4d-31b18cc0078b.png",
    category: "Classique",
    price: "445€"
  },
  {
    id: 6,
    title: "Robe Grise Métallisée",
    description: "Texture métallisée sophistiquée avec drapé sculptural.",
    image: "/lovable-uploads/1f44e598-de15-44f9-913a-7870bf06ba74.png",
    category: "Luxe",
    price: "495€"
  },
  {
    id: 7,
    title: "Robe Noire Paillettes",
    description: "Création exclusive avec broderies de perles et silhouette majestueuse.",
    image: "/lovable-uploads/373fe360-5684-4f42-a6bf-ebc91be6d05d.png",
    category: "Prestige",
    price: "650€"
  }
];

const FeaturedCollection = () => {
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} - Robe de soirée ${item.category.toLowerCase()}`}
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4 sm:p-6">
                <h3 className="font-serif text-lg sm:text-xl font-medium text-accent mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-primary">
                    {item.price}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors text-xs px-3"
                  >
                    Voir
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
              className="gradient-primary hover:shadow-soft transition-all duration-300 px-8 py-3 text-lg"
            >
              Voir Toute la Collection
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;