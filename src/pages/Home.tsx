import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import QuickOrderForm from "@/components/home/QuickOrderForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <HeroCarousel />

      {/* Featured Collection */}
      <section id="collection">
        <FeaturedCollection />
      </section>

      {/* Partners Logos Section */}
      <section className="py-16 bg-luxury-pearl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
              Nos Partenaires
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent mb-6">
              Ils Nous Font Confiance
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/90cc8124-51aa-40ad-adad-494a20a6249c.png"
                alt="Logo partenaire 1"
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="128"
                height="128"
                loading="lazy"
                decoding="async"
                sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/2e50308f-c8b7-42bf-9ffb-ff5c5fe3041a.png"
                alt="Logo partenaire 2"
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="256"
                height="256"
                loading="lazy"
                decoding="async"
                sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/3099fb54-51fd-42dc-9be6-12025210e82c.png"
                alt="Logo partenaire 3"
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="512"
                height="512"
                loading="lazy"
                decoding="async"
                sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/lovable-uploads/bf5bb623-c977-4166-a974-1f331812e41d.png"
                alt="Logo partenaire 4"
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="1024"
                height="1024"
                loading="lazy"
                decoding="async"
                sizes="64px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Order Section */}
      <section id="order" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
                Commande Rapide
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
                Votre Robe de Rêve
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Commandez directement votre modèle préféré. Notre équipe vous contactera 
                dans les plus brefs délais pour finaliser votre commande.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Order Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-elegant border-0">
                  <CardContent className="p-8">
                    <QuickOrderForm />
                  </CardContent>
                </Card>
              </div>

              {/* Delivery Info */}
              <div className="space-y-6">
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-accent mb-4 flex items-center">
                      <Truck className="h-5 w-5 text-primary mr-2" />
                      Livraison & Retours
                    </h3>
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-foreground">Livraison gratuite</p>
                          <p>Dès 100€ d'achat partout en France</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-foreground">Retours 30 jours</p>
                          <p>Échange ou remboursement gratuit</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-foreground">Service client</p>
                          <p>Disponible 6j/7 pour vous accompagner</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-accent mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      Paiement Sécurisé
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Toutes vos transactions sont protégées par un cryptage SSL. 
                      Nous acceptons les principales cartes bancaires et PayPal.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

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