import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, Heart, Truck, Shield } from "lucide-react";

export default function About() {
  return (
    <main className="container mx-auto px-4 py-16">
      {/* HERO STORY */}
      <section className="grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-neutral-500">
            Notre histoire
          </p>
          <h1 className="font-serif text-3xl md:text-5xl mt-3">
            L’Art de l’Élégance au Quotidien
          </h1>

          <div className="mt-6 space-y-4 text-neutral-700 leading-relaxed">
            <p>
              Chez <span className="font-medium">GLAMHOME FASHION</span>, chaque
              pièce raconte une histoire d’élégance et de sophistication. Notre
              passion pour l’excellence se reflète dans chaque détail, chaque
              couture et chaque instant précieux.
            </p>
            <p>
              Nos modèles sont soigneusement sélectionnés pour leur{" "}
              <em>design exceptionnel</em> et une{" "}
              <em>qualité irréprochable</em>, afin de sublimer votre silhouette
              lors de vos moments d’exception.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B48A7C] hover:bg-[#a57c6d] text-white"
            >
              <Link to="/collection">Explorer la Collection</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>

        {/* Remplace l'image ci-dessous par ton visuel “atelier/boutique” si tu en as un.
            Exemple : "/lovable-uploads/atelier.jpg" */}
        <div className="relative overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
          <img
            src="/lovable-uploads/m1.jpg"
            alt="Univers GLAMHOME FASHION"
            className="w-full h-[380px] md:h-[520px] object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </section>

      {/* VALUES / PILLARS */}
      <section className="mt-16">
        <h2 className="sr-only">Nos engagements</h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <Star className="h-5 w-5 text-[#B48A7C]" />
              <p className="font-medium">Excellence</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Qualité premium garantie sur chaque pièce.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <Heart className="h-5 w-5 text-[#B48A7C]" />
              <p className="font-medium">Créé avec amour</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Le souci du détail, de la coupe aux finitions.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-[#B48A7C]" />
              <p className="font-medium">Livraison soignée</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Emballage protecteur et envoi rapide.
            </p>
          </div>

          <div className="rounded-xl border border-neutral-200 p-5">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-[#B48A7C]" />
              <p className="font-medium">Satisfaction</p>
            </div>
            <p className="mt-3 text-sm text-neutral-600">
              Service attentionné et suivi personnalisé.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND NOTE */}
      <section className="mt-16 rounded-xl border border-neutral-200 p-6 md:p-8 bg-white">
        <h2 className="font-serif text-2xl md:text-3xl">
          Notre Vision de la Mode
        </h2>
        <p className="mt-4 text-neutral-700 leading-relaxed">
          Créer un pont entre la mode et l’art de vivre, où chaque détail compte
          pour faire de votre style une expression unique de votre
          personnalité. Des matières choisies avec soin, des coupes flatteuses
          et des lignes intemporelles : voilà notre promesse.
        </p>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="mt-16 flex flex-wrap items-center gap-3">
        <Button
          asChild
          className="bg-[#B48A7C] hover:bg-[#a57c6d] text-white"
        >
          <Link to="/collection">Voir la Collection</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/order">Commander maintenant</Link>
        </Button>
      </section>
    </main>
  );
}