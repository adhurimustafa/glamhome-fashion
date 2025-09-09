import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Mail, Phone, MessageCircle, Package, Truck, Star } from "lucide-react";

const Order = () => {
  const handleEmailOrder = () => {
    window.location.href = "mailto:orders@example.com?subject=Commande Glam Home Fashion&body=Bonjour,%0D%0A%0D%0AJe souhaite passer commande pour les articles suivants:%0D%0A%0D%0A- [Nom du produit]%0D%0A- [Quantité]%0D%0A%0D%0AMerci de me recontacter pour finaliser ma commande.%0D%0A%0D%0ACordialement";
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-light to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
              Commander
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              Découvrez nos différentes options pour passer commande et profiter 
              de notre service personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Comment Commander
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Nous offrons plusieurs moyens de passer commande pour votre convenance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Order */}
            <Card className="text-center border-0 shadow-elegant hover:shadow-strong transition-all duration-500 animate-scale-in">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Commande par Email</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Envoyez-nous votre liste de souhaits par email et nous vous 
                  recontacterons pour finaliser votre commande.
                </p>
                <Button 
                  onClick={handleEmailOrder}
                  className="w-full gradient-primary hover:shadow-soft transition-all duration-300"
                >
                  Envoyer un Email
                </Button>
              </CardContent>
            </Card>

            {/* Phone Order */}
            <Card className="text-center border-0 shadow-elegant hover:shadow-strong transition-all duration-500 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Commande par Téléphone</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Contactez notre équipe directement pour un conseil personnalisé 
                  et passer votre commande.
                </p>
                <Button 
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.location.href = "tel:+33123456789"}
                >
                  +33 1 23 45 67 89
                </Button>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="text-center border-0 shadow-elegant hover:shadow-strong transition-all duration-500 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Formulaire de Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Utilisez notre formulaire de contact pour une demande détaillée 
                  avec vos préférences.
                </p>
                <Button 
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.location.href = "/contact"}
                >
                  Aller au Formulaire
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Nos Avantages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pourquoi choisir Glam Home Fashion pour vos achats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Package,
                title: "Emballage Soigné",
                description: "Chaque commande est emballée avec le plus grand soin dans nos coffrets signature."
              },
              {
                icon: Truck,
                title: "Livraison Gratuite",
                description: "Frais de port offerts dès 100€ d'achat partout en France métropolitaine."
              },
              {
                icon: Star,
                title: "Service Premium",
                description: "Un accompagnement personnalisé du choix à la livraison de vos articles."
              },
              {
                icon: ShoppingCart,
                title: "Paiement Sécurisé",
                description: "Toutes nos transactions sont sécurisées et vos données protégées."
              }
            ].map((benefit, index) => (
              <Card 
                key={benefit.title}
                className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-accent mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Processus de Commande
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comment se déroule votre commande, étape par étape.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sélection",
                  description: "Parcourez notre collection et sélectionnez vos coups de cœur. Contactez-nous pour plus d'informations."
                },
                {
                  step: "02", 
                  title: "Confirmation",
                  description: "Nous vous confirmons la disponibilité, les prix et vous proposons les meilleures options de livraison."
                },
                {
                  step: "03",
                  title: "Livraison",
                  description: "Recevez votre commande soigneusement emballée dans notre coffret signature directement chez vous."
                }
              ].map((step, index) => (
                <div 
                  key={step.step}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto shadow-elegant">
                      <span className="text-2xl font-serif font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-accent mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Prêt à Passer Commande ?
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Notre équipe est à votre disposition pour vous accompagner 
              dans votre choix et finaliser votre commande.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-3 text-lg hover:shadow-soft transition-all duration-300"
                onClick={handleEmailOrder}
              >
                Commander par Email
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => window.location.href = "/contact"}
              >
                Nous Contacter
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Order;