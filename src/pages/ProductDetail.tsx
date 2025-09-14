import { useMemo, useState } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productsRaw from "@/data/products.json";
import type { Product } from "@/types/product";
import { formatPrice, normalizeLang } from "@/utils/price";
import { Button } from "@/components/ui/button";
// Si tu as un formulaire de commande:
import QuickOrderForm from "@/components/home/QuickOrderForm";

const products = productsRaw as Product[];

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const { t, i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);

  const product = useMemo(
    () => products.find((p) => p.slug === slug),
    [slug]
  );

  const [idx, setIdx] = useState(0);

  if (!product) {
    // Redirection 404 si le slug est inconnu
    return <Navigate to="/404" replace />;
  }

  const hasPrev = idx > 0;
  const hasNext = idx < product.images.length - 1;

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Carrousel simple */}
        <div>
          <div className="relative aspect-square bg-neutral-50 rounded-xl overflow-hidden">
            <img
              key={product.images[idx]}
              src={product.images[idx]}
              alt={product.name[lang]}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />

            {/* flèches */}
            {hasPrev && (
              <button
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1"
                aria-label={t("aria.prev", "Précédent")}
              >
                ‹
              </button>
            )}
            {hasNext && (
              <button
                onClick={() => setIdx((i) => Math.min(product.images.length - 1, i + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full px-3 py-1"
                aria-label={t("aria.next", "Suivant")}
              >
                ›
              </button>
            )}
          </div>

          {/* vignettes */}
          <div className="mt-3 flex gap-2">
            {product.images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIdx(i)}
                className={`h-16 w-16 rounded-md overflow-hidden ring-2 transition
                  ${i === idx ? "ring-black" : "ring-transparent hover:ring-neutral-300"}`}
                aria-label={t("aria.goToImage", "Aller à l’image")}
              >
                <img src={src} alt={`${product.name[lang]} ${i + 1}`} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Infos produit */}
        <div className="space-y-4">
          <nav className="text-sm text-neutral-500">
            <Link to="/collection" className="underline hover:no-underline">
              {t("collection.title", "Collection")}
            </Link>{" "}
            / <span>{product.name[lang]}</span>
          </nav>

          <h1 className="text-2xl md:text-3xl font-serif">{product.name[lang]}</h1>

          <div className="flex flex-wrap gap-2">
            <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">{product.category[lang]}</span>
            <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">{product.color[lang]}</span>
          </div>

          <p className="text-neutral-700">{product.description[lang]}</p>

          <div className="text-2xl font-semibold">
            {formatPrice(product.price, lang)}
          </div>

          <div className="flex gap-3 pt-2">
            <Button asChild className="bg-black text-white hover:bg-black/85">
              <a href="#order">{t("common.order", "Commander")}</a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/collection">{t("collection.actions.back", "Retour à la collection")}</Link>
            </Button>
          </div>

          {/* Ancre commande */}
          <div id="order" className="pt-8 border-t mt-8">
            <h2 className="text-xl font-medium mb-3">{t("common.order", "Commander")}</h2>
            {/* Si tu veux préremplir le formulaire, adapte QuickOrderForm */}
            <QuickOrderForm />
          </div>
        </div>
      </div>
    </section>
  );
}
