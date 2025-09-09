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
    title: "Accessoires Dorés",
    description: "Une sélection raffinée d'accessoires aux finitions dorées rose pour sublimer votre quotidien.",
    image: collection1,
    category: "Accessoires",
    price: "À partir de 89€"
  },
  {
    id: 2,
    title: "Maroquinerie de Luxe",
    description: "Des sacs et petite maroquinerie d'exception pour accompagner votre style avec élégance.",
    image: collection2,
    category: "Mode",
    price: "À partir de 195€"
  },
  {
    id: 3,
    title: "Art de la Table",
    description: "Transformez vos moments précieux avec notre collection de décoration et art de vivre.",
    image: collection3,
    category: "Décoration",
    price: "À partir de 45€"
  }
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 bg-neutral-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Nos Coups de Cœur
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            Collection Signature
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez une sélection exclusive de pièces qui incarnent notre vision 
            de l'élégance moderne et intemporelle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-medium text-accent mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-medium text-primary">
                    {item.price}
                  </span>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    Découvrir
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