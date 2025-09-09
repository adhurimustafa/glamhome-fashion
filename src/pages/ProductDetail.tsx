import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, Heart, Share2, Minus, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);

  const sizes = ["S", "M", "L"];

  useEffect(() => {
    if (!slug) return;

    // Find product by slug
    const foundProduct = productsData.find((p: Product) => p.slug === slug);
    setProduct(foundProduct || null);

    if (foundProduct) {
      // Find related products (same category, excluding current product)
      const related = productsData
        .filter((p: Product) => p.category === foundProduct.category && p.slug !== slug)
        .slice(0, 4);
      setRelatedProducts(related);

      // Update SEO
      document.title = `${foundProduct.name} – GLAMHOME FASHION`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${foundProduct.name} - ${foundProduct.description} Prix: ${foundProduct.price}€`);
      }

      // Add JSON-LD structured data
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": foundProduct.name,
        "description": foundProduct.description,
        "image": `/lovable-uploads/${foundProduct.images[0].replace('.jpg', '.png')}`,
        "brand": {
          "@type": "Brand",
          "name": "GLAMHOME FASHION"
        },
        "offers": {
          "@type": "Offer",
          "price": foundProduct.price,
          "priceCurrency": "EUR",
          "availability": "https://schema.org/InStock"
        }
      });
      document.head.appendChild(script);

      return () => {
        // Cleanup
        document.title = "GLAMHOME FASHION — Robes de soirée & haute élégance";
        const existingScript = document.querySelector('script[type="application/ld+json"]');
        if (existingScript) {
          document.head.removeChild(existingScript);
        }
      };
    }
  }, [slug]);

  const handleQuantityChange = (increment: boolean) => {
    setQuantity(prev => {
      const newQuantity = increment ? prev + 1 : prev - 1;
      return Math.max(1, Math.min(10, newQuantity));
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Taille requise",
        description: "Veuillez sélectionner une taille avant de commander.",
        variant: "destructive"
      });
      return;
    }
    
    // Redirect to order page with product and size
    window.location.href = `/order?product=${slug}&size=${selectedSize}&quantity=${quantity}`;
  };

  const getBadgeVariant = (badge: string) => {
    if (badge.includes("New")) return "default";
    if (badge.includes("Trending")) return "secondary";
    if (badge.includes("Only")) return "destructive";
    if (badge.includes("Prestige")) return "outline";
    return "default";
  };

  if (!product) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Produit non trouvé</h1>
          <Button asChild variant="outline">
            <Link to="/collection">Retour à la collection</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav aria-label="Fil d'Ariane" className="flex items-center space-x-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-[#B48A7C] transition-colors flex items-center">
            <Home className="h-4 w-4 mr-1" />
            Accueil
          </Link>
          <span>/</span>
          <Link to="/collection" className="hover:text-[#B48A7C] transition-colors">
            Collection
          </Link>
          <span>/</span>
          <span className="text-[#0F0F0F] font-medium">{product.name}</span>
        </nav>
      </div>

      {/* Product Details */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Gallery - Left */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                {/* Badges */}
                {product.badges.length > 0 && (
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.badges.map((badge, index) => (
                      <Badge key={index} variant={getBadgeVariant(badge)} className="shadow-sm">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <img
                  src={`/lovable-uploads/${product.images[0].replace('.jpg', '.png')}`}
                  alt={`${product.name} - Robe de soirée GLAMHOME FASHION`}
                  className="w-full h-full object-cover"
                  width="800"
                  height="1067"
                  loading="eager"
                  decoding="sync"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            {/* Product Info - Right */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-light text-[#0F0F0F] mb-4">
                  {product.name}
                </h1>
                <div className="text-3xl font-semibold text-[#B48A7C] mb-4">
                  {product.price}€
                </div>
                
                {/* Tags */}
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline">{product.category}</Badge>
                  <Badge variant="outline">{product.color}</Badge>
                </div>
              </div>

              {/* Description */}
              <div>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-2">
                <Label htmlFor="size">Taille</Label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une taille" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map(size => (
                      <SelectItem key={size} value={size}>
                        Taille {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantité</Label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(false)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="quantity"
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Math.min(10, parseInt(e.target.value) || 1)))}
                    className="w-20 text-center"
                    min="1"
                    max="10"
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(true)}
                    disabled={quantity >= 10}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-[#B48A7C] hover:bg-[#B48A7C]/90 text-white"
                  onClick={handleAddToCart}
                >
                  Commander maintenant
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
                >
                  <Link to={`/contact?product=${slug}`}>Poser une question</Link>
                </Button>
              </div>

              {/* Additional Actions */}
              <div className="flex gap-4 pt-4 border-t">
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Favoris
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Partager
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-serif font-light text-center mb-12">
              Vous aimerez aussi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card 
                  key={relatedProduct.slug}
                  className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 rounded-lg"
                >
                  <Link to={`/product/${relatedProduct.slug}`}>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={`/lovable-uploads/${relatedProduct.images[0].replace('.jpg', '.png')}`}
                        alt={`${relatedProduct.name} - Robe de soirée GLAMHOME FASHION`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        width="400"
                        height="533"
                        loading="lazy"
                        decoding="async"
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-medium text-[#0F0F0F] mb-2 line-clamp-1">
                        {relatedProduct.name}
                      </h3>
                      <div className="text-lg font-semibold text-[#B48A7C]">
                        {relatedProduct.price}€
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;