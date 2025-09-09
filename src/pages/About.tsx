import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Award, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-light to-secondary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-serif font-light text-accent mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-accent/80 leading-relaxed">
              Découvrez l'histoire passionnante de Glam Home Fashion, 
              une aventure dédiée à l'art de vivre avec élégance.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-serif font-light text-accent mb-6">
                Une Passion Née de l'Excellence
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Tout a commencé par une vision simple : créer un univers où la mode 
                  et la décoration d'intérieur se rencontrent pour sublimer le quotidien. 
                  Depuis 2018, nous parcourons le monde à la recherche de créateurs 
                  exceptionnels et de pièces uniques.
                </p>
                <p>
                  Notre équipe de passionnés sélectionne chaque article avec un soin 
                  méticuleux, privilégiant la qualité, l'originalité et l'impact esthétique. 
                  Nous croyons que la beauté réside dans les détails et que chaque objet 
                  doit raconter une histoire.
                </p>
                <p>
                  Aujourd'hui, Glam Home Fashion est devenu une référence pour celles et 
                  ceux qui recherchent l'excellence et l'authenticité dans leurs choix 
                  de mode et de décoration.
                </p>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/30 rounded-3xl p-8">
                <img
                  src="/api/placeholder/600/400"
                  alt="Notre atelier de création"
                  className="w-full h-80 object-cover rounded-2xl shadow-elegant"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-neutral-warm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Nos Valeurs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Ce qui nous guide dans chacune de nos actions et décisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: "Passion",
                description: "Chaque pièce est choisie avec amour et dévotion pour l'excellence."
              },
              {
                icon: Award,
                title: "Qualité",
                description: "Nous ne transigeons jamais sur la qualité et l'authenticité de nos produits."
              },
              {
                icon: Users,
                title: "Proximité",
                description: "Une relation privilégiée avec nos clients et nos créateurs partenaires."
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Toujours à l'avant-garde des tendances pour vous surprendre."
              }
            ].map((value, index) => (
              <Card 
                key={value.title}
                className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-accent mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light text-accent mb-6">
              Notre Équipe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Rencontrez les passionnés qui donnent vie à Glam Home Fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sophie Laurent",
                role: "Directrice Artistique",
                description: "Experte en tendances mode et décoration avec plus de 15 ans d'expérience."
              },
              {
                name: "Marc Dubois",
                role: "Responsable Collections",
                description: "Spécialiste en sourcing international et relations créateurs."
              },
              {
                name: "Emma Martin",
                role: "Expérience Client",
                description: "Dédiée à offrir un service exceptionnel et personnalisé à chaque client."
              }
            ].map((member, index) => (
              <Card 
                key={member.name}
                className="text-center border-0 shadow-soft hover:shadow-elegant transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary-light to-secondary rounded-full mx-auto mb-6" />
                  <h3 className="font-serif text-xl font-medium text-accent mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
              Rejoignez Notre Aventure
            </h2>
            <p className="text-xl leading-relaxed mb-8 opacity-90">
              Découvrez comment nous pouvons transformer votre quotidien avec notre 
              sélection exclusive de mode et décoration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collection">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="px-8 py-3 text-lg hover:shadow-soft transition-all duration-300"
                >
                  Découvrir nos Collections
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

export default About;