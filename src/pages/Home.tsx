import { useTranslation } from "react-i18next";
import HeroCarousel from "@/components/home/HeroCarousel";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import QuickOrderForm from "@/components/home/QuickOrderForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Truck, Shield, HeartHandshake } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <HeroCarousel />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            {t("home.newArrivals.kicker")}
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
            {t("home.newArrivals.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t("home.newArrivals.subtitle")}
          </p>
        </div>
      </section>

      <section id="collection">
        <FeaturedCollection />
      </section>

      <section className="py-16 bg-luxury-pearl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
              {t("home.partners.kicker")}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-accent mb-6">
              {t("home.partners.title")}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/images/dresses/90cc8124-51aa-40ad-adad-494a20a6249c.png"
                alt={t("home.partners.alt1")}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="128" height="128" loading="lazy" decoding="async" sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/images/dresses/2e50308f-c8b7-42bf-9ffb-ff5c5fe3041a.png"
                alt={t("home.partners.alt2")}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="256" height="256" loading="lazy" decoding="async" sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/images/dresses/3099fb54-51fd-42dc-9be6-12025210e82c.png"
                alt={t("home.partners.alt3")}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="512" height="512" loading="lazy" decoding="async" sizes="64px"
              />
            </div>
            <div className="flex items-center justify-center p-6 transition-all duration-300 hover:scale-105">
              <img
                src="/images/dresses/bf5bb623-c977-4166-a974-1f331812e41d.png"
                alt={t("home.partners.alt4")}
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                width="1024" height="1024" loading="lazy" decoding="async" sizes="64px"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="order" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
                {t("home.order.kicker")}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
                {t("home.order.title")}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {t("home.order.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="shadow-elegant border-0">
                  <CardContent className="p-8">
                    <QuickOrderForm />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-accent mb-4 flex items-center">
                      <Truck className="h-5 w-5 text-primary mr-2" />
                      {t("home.delivery.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("home.payment.text")}
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-soft border-0">
                  <CardContent className="p-6">
                    <h3 className="font-serif text-xl font-medium text-accent mb-4 flex items-center">
                      <Shield className="h-5 w-5 text-primary mr-2" />
                      {t("home.payment.title")}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {t("home.payment.text")}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
                {t("home.about.kicker")}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
                {t("home.about.title")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("home.about.p1")}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t("home.about.p2")}
              </p>
              <Link to="/about">
                <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground">
                  {t("home.about.cta")}
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
                      <h3 className="font-serif text-lg font-medium mb-2">
                        {t("home.values.excellence.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.values.excellence.text")}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <HeartHandshake className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">
                        {t("home.values.passion.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.values.passion.text")}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Truck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">
                        {t("home.values.delivery.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.values.delivery.text")}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-medium mb-2">
                        {t("home.values.guarantee.title")}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t("home.values.guarantee.text")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 gradient-hero text-white text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              {t("home.cta.title")}
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              {t("home.cta.text")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection">
                <Button size="lg" variant="secondary" className="px-8 py-3 text-lg hover:shadow-soft">
                  {t("home.cta.viewCollection")}
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg text-white border-white hover:bg-white hover:text-primary">
                  {t("home.cta.contactUs")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
