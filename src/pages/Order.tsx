import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Mail, Phone, MessageCircle, Package, Truck, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

const Order = () => {
  const { t } = useTranslation();

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
              {t("order.hero.title")}
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              {t("order.hero.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* Ordering Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              {t("order.options.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("order.options.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Email Order */}
            <Card className="text-center border-0 shadow-elegant hover:shadow-strong transition-all duration-500 animate-scale-in">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{t("order.options.email.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t("order.options.email.text")}
                </p>
                <Button 
                  onClick={handleEmailOrder}
                  className="w-full gradient-primary hover:shadow-soft transition-all duration-300"
                >
                  {t("order.options.email.button")}
                </Button>
              </CardContent>
            </Card>

            {/* Phone Order */}
            <Card className="text-center border-0 shadow-elegant hover:shadow-strong transition-all duration-500 animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">{t("order.options.phone.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t("order.options.phone.text")}
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
                <CardTitle className="font-serif text-xl">{t("order.options.form.title")}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {t("order.options.form.text")}
                </p>
                <Button 
                  variant="outline"
                  className="w-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={() => window.location.href = "/contact"}
                >
                  {t("order.options.form.button")}
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
              {t("order.benefits.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("order.benefits.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Package, key: "packaging" },
              { icon: Truck, key: "delivery" },
              { icon: Star, key: "service" },
              { icon: ShoppingCart, key: "payment" }
            ].map((benefit, index) => (
              <Card 
                key={benefit.key}
                className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-accent mb-4">
                    {t(`order.benefits.items.${benefit.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {t(`order.benefits.items.${benefit.key}.text`)}
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
              {t("order.process.title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t("order.process.subtitle")}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["selection", "confirmation", "delivery"].map((step, index) => (
                <div 
                  key={step}
                  className="text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center mx-auto shadow-elegant">
                      <span className="text-2xl font-serif font-bold text-white">
                        0{index + 1}
                      </span>
                    </div>
                    {index < 2 && (
                      <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                    )}
                  </div>
                  <h3 className="font-serif text-xl font-medium text-accent mb-4">
                    {t(`order.process.steps.${step}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`order.process.steps.${step}.text`)}
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
              {t("order.cta.title")}
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {t("order.cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="px-8 py-3 text-lg hover:shadow-soft transition-all duration-300"
                onClick={handleEmailOrder}
              >
                {t("order.cta.email")}
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300"
                onClick={() => window.location.href = "/contact"}
              >
                {t("order.cta.contact")}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Order;
