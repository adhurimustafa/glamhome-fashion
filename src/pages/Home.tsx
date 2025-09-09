import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import { Button } from "@/components/ui/button";
import { Star, Truck, Shield, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Featured Collection */}
      <FeaturedCollection />

      {/* About Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Notre Histoire
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
                L'Art de l'Élégance au Quotidien
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Depuis notre création, nous nous consacrons à l'art de sublimer votre quotidien. 
                Chaque pièce de notre collection est soigneusement sélectionnée pour son design 
                exceptionnel et sa qualité irréprochable.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Notre vision ? Créer un pont entre la mode et l'art de vivre, où chaque détail 
                compte pour faire de votre maison et de votre style des expressions uniques de 
                votre personnalité.
              </p>
              <Link to="/about">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Découvrir Notre Histoire
                </Button>
              </Link>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary-light to-secondary rounded-3xl p-8 shadow-elegant">
                <div className="bg-white rounded-2xl p-8 shadow-soft">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Star className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">Excellence</h3>
                      <p className="text-sm text-muted-foreground">Qualité premium garantie</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartHandshake className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">Passion</h3>
                      <p className="text-sm text-muted-foreground">Créé avec amour</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">Livraison</h3>
                      <p className="text-sm text-muted-foreground">Gratuite dès 100€</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">Garantie</h3>
                      <p className="text-sm text-muted-foreground">Satisfaction assurée</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Prêt à Transformer Votre Style ?
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Rejoignez des milliers de clients qui ont fait confiance à notre expertise 
              pour sublimer leur quotidien avec élégance et raffinement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-3 text-lg hover:shadow-soft transition-all duration-300"
                >
                  Explorer la Collection
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Nous Contacter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;