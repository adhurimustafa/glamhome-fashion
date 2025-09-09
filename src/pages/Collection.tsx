import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Home, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import productsData from "@/data/products.json";

interface Product {
  slug: string;
  name: string;
  price: number;
  badges: string[];
  thumb: string;
  images: string[];
  color: string;
  category: string;
  description: string;
}

const Collection = () => {
  const [products] = useState<Product[]>(productsData);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  // Get unique categories and colors for filters
  const categories = ["all", ...new Set(products.map(p => p.category))];
  const colors = ["all", ...new Set(products.map(p => p.color))];

  // Update page title and meta
  useEffect(() => {
    document.title = "Collection – Glam Fashion";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez notre collection exclusive de robes de soirée. Élégance et sophistication pour vos événements les plus prestigieux.');
    }
    
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', window.location.origin + '/collection');
    }
    
    return () => {
      document.title = "GLAMHOME FASHION — Robes de soirée & haute élégance";
    };
  }, []);

  // Filter products based on search and filters
  useEffect(() => {
    let filtered = products;

    // Search by name
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (categoryFilter !== "all") {
      filtered = filtered.filter(product => product.category === categoryFilter);
    }

    // Filter by color
    if (colorFilter !== "all") {
      filtered = filtered.filter(product => product.color === colorFilter);
    }

    // Filter by price
    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "under-400":
          filtered = filtered.filter(product => product.price < 400);
          break;
        case "400-500":
          filtered = filtered.filter(product => product.price >= 400 && product.price <= 500);
          break;
        case "over-500":
          filtered = filtered.filter(product => product.price > 500);
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, colorFilter, priceFilter, products]);

  const getBadgeVariant = (badge: string) => {
    if (badge.includes("New")) return "default";
    if (badge.includes("Trending")) return "secondary";
    if (badge.includes("Only")) return "destructive";
    if (badge.includes("Prestige")) return "outline";
    return "default";
  };

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
      <section className="py-12 bg-gradient-to-b from-luxury-pearl to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-[#0F0F0F]">
              Collection
            </h1>
            <div className="flex items-center bg-[#B48A7C] text-white px-3 py-1 rounded-full text-sm font-medium">
              <Eye className="h-4 w-4 mr-1" />
              <span>28</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Nos robes de soirée sélectionnées
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>Filtres :</span>
            </div>
            
            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Rechercher par nom..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "Toutes catégories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Color Filter */}
            <Select value={colorFilter} onValueChange={setColorFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Couleur" />
              </SelectTrigger>
              <SelectContent>
                {colors.map(color => (
                  <SelectItem key={color} value={color}>
                    {color === "all" ? "Toutes couleurs" : color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price Filter */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Prix" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les prix</SelectItem>
                <SelectItem value="under-400">Moins de 400€</SelectItem>
                <SelectItem value="400-500">400€ - 500€</SelectItem>
                <SelectItem value="over-500">Plus de 500€</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <Card 
                key={product.slug}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 rounded-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Badges */}
                  {product.badges.length > 0 && (
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                      {product.badges.map((badge, index) => (
                        <Badge 
                          key={index} 
                          variant={getBadgeVariant(badge)}
                          className="text-xs shadow-sm"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  )}
                  
                  <img
                    src={`/lovable-uploads/${product.images[0].replace('.jpg', '.png')}`}
                    alt={`${product.name} - Robe de soirée Glam Fashion`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                
                <div className="p-6">
                  {/* Product Name */}
                  <h3 className="font-serif text-lg font-medium text-[#0F0F0F] mb-2">
                    {product.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                  
                  {/* Price */}
                  <div className="text-xl font-semibold text-[#B48A7C] mb-3">
                    {product.price}€
                  </div>
                  
                  {/* Tags */}
                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {product.category}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.color}
                    </Badge>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
                    >
                      <Link to={`/product/${product.slug}`}>Voir</Link>
                    </Button>
                    <Button 
                      asChild 
                      size="sm" 
                      className="flex-1 bg-[#B48A7C] hover:bg-[#B48A7C]/90"
                    >
                      <Link to={`/order?product=${product.slug}`}>Commander</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* No results message */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">
                Aucun produit trouvé avec ces critères.
              </p>
              <Button 
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setColorFilter("all");
                  setPriceFilter("all");
                }}
              >
                Réinitialiser les filtres
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Collection;