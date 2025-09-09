import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Filter, Search, Grid, List } from "lucide-react";
import collection1 from "@/assets/collection-1.jpg";
import collection2 from "@/assets/collection-2.jpg";
import collection3 from "@/assets/collection-3.jpg";

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  tags: string[];
  isNew?: boolean;
  isSale?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Collier Éternité Rose Gold",
    description: "Bijou raffiné en or rose 18 carats avec cristaux Swarovski",
    price: "189€",
    image: collection1,
    category: "Bijoux",
    tags: ["Élégant", "Cristaux", "Or Rose"],
    isNew: true
  },
  {
    id: 2,
    name: "Sac Cuir Premium Milano",
    description: "Maroquinerie italienne en cuir véritable, finitions dorées",
    price: "295€",
    originalPrice: "345€",
    image: collection2,
    category: "Maroquinerie",
    tags: ["Cuir", "Italie", "Premium"],
    isSale: true
  },
  {
    id: 3,
    name: "Plateau Décoratif Marbre",
    description: "Art de la table en marbre blanc veiné avec détails dorés",
    price: "125€",
    image: collection3,
    category: "Décoration",
    tags: ["Marbre", "Artisanal", "Luxe"]
  },
  {
    id: 4,
    name: "Foulard Soie Imprimé",
    description: "Carré de soie naturelle avec motifs exclusifs peints à la main",
    price: "89€",
    image: collection1,
    category: "Accessoires",
    tags: ["Soie", "Artisanal", "Français"]
  },
  {
    id: 5,
    name: "Vase Céramique Artisanal",
    description: "Pièce unique créée par un artisan français, finition mate",
    price: "156€",
    image: collection3,
    category: "Décoration",
    tags: ["Céramique", "Artisanal", "Unique"],
    isNew: true
  },
  {
    id: 6,
    name: "Bracelet Perles Nacrées",
    description: "Bracelet délicat avec perles de culture et fermoir or",
    price: "134€",
    image: collection2,
    category: "Bijoux",
    tags: ["Perles", "Culture", "Délicat"]
  }
];

const categories = ["Tous", "Bijoux", "Maroquinerie", "Décoration", "Accessoires"];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "Tous" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
              Notre Collection
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              Découvrez une sélection exclusive de pièces d'exception, 
              soigneusement choisies pour leur beauté et leur qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "gradient-primary" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex justify-between items-center">
            <p className="text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
            </p>
          </div>

          <div className={`grid gap-8 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id}
                className={`group overflow-hidden border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-1/3" : "w-full"
                }`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className={`object-cover group-hover:scale-105 transition-transform duration-700 ${
                      viewMode === "list" ? "h-full w-full" : "w-full h-64"
                    }`}
                    loading="lazy"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <Badge className="bg-success text-success-foreground">
                        Nouveau
                      </Badge>
                    )}
                    {product.isSale && (
                      <Badge className="bg-destructive text-destructive-foreground">
                        Promo
                      </Badge>
                    )}
                  </div>
                  
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">
                      {product.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                  <h3 className="font-serif text-xl font-medium text-accent mb-3">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      className="gradient-primary hover:shadow-soft transition-all duration-300"
                    >
                      Voir Détails
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium text-accent mb-2">
                Aucun produit trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche ou de sélectionner une autre catégorie.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Collection;