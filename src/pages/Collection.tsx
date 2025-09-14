import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productsRaw from "@/data/products.json";
import type { Product } from "@/types/product";
import { formatPrice, normalizeLang } from "@/utils/price";
import { Button } from "@/components/ui/button";

const products = productsRaw as Product[];

export default function Collection() {
  const { t, i18n } = useTranslation();
  const lang = normalizeLang(i18n.language);

  // Filtres
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const prices = useMemo(() => products.map(p => p.price), []);
  const [min, max] = [Math.min(...prices), Math.max(...prices)];
  const [priceMax, setPriceMax] = useState<number>(max);

  // Listes distinctes (localisées)
  const categories = useMemo(
    () => Array.from(new Set(products.map(p => p.category[lang]))).sort(),
    [lang]
  );
  const colors = useMemo(
    () => Array.from(new Set(products.map(p => p.color[lang]))).sort(),
    [lang]
  );

  // Filtrage
  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    return products.filter(p => {
      const name = p.name[lang].toLowerCase();
      const desc = p.description[lang].toLowerCase();
      const okQ = qLower ? (name.includes(qLower) || desc.includes(qLower)) : true;
      const okCat = cat ? p.category[lang] === cat : true;
      const okColor = color ? p.color[lang] === color : true;
      const okPrice = p.price <= priceMax;
      return okQ && okCat && okColor && okPrice;
    });
  }, [q, cat, color, priceMax, lang]);

  return (
    <section className="container mx-auto px-4 py-8">
      {/* Header + filtres */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h1 className="text-2xl md:text-3xl font-serif">
          {t("collection.title", "Collection")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 w-full md:w-auto">
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("collection.search", "Rechercher…")}
            className="border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-300"
            aria-label={t("collection.search", "Rechercher")}
          />

          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            className="border rounded-md px-3 py-2"
            aria-label={t("collection.filters.category", "Catégorie")}
          >
            <option value="">{t("collection.filters.allCategories", "Toutes catégories")}</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="border rounded-md px-3 py-2"
            aria-label={t("collection.filters.color", "Couleur")}
          >
            <option value="">{t("collection.filters.allColors", "Toutes couleurs")}</option>
            {colors.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>

          <label className="flex items-center gap-3">
            <span className="whitespace-nowrap text-sm text-neutral-600">
              {t("collection.filters.maxPrice", "Prix max")}
            </span>
            <input
              type="range"
              min={min}
              max={max}
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
              className="w-full"
            />
            <span className="text-sm font-medium min-w-[80px] text-right">
              {formatPrice(priceMax, lang)}
            </span>
          </label>
        </div>
      </div>

      {/* Grille produits */}
      {filtered.length === 0 ? (
        <p className="text-neutral-600">
          {t("collection.empty", "Aucun produit ne correspond aux filtres.")}
        </p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <li key={p.slug} className="group border rounded-xl overflow-hidden bg-white">
              <Link to={`/collection/${p.slug}`} className="block">
                <div className="relative aspect-[3/4] bg-neutral-50 overflow-hidden">
                  {/* image principale */}
                  <img
                    src={p.images[0]}
                    alt={p.name[lang]}
                    className="h-full w-full object-cover transition-opacity duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* hover-swap si 2e image */}
                  {!!p.images[1] && (
                    <img
                      src={p.images[1]}
                      alt={p.name[lang]}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                      decoding="async"
                    />
                  )}
                </div>
              </Link>

              <div className="p-4 space-y-2">
                <h3 className="font-medium">{p.name[lang]}</h3>
                <p className="text-sm text-neutral-600 line-clamp-2">
                  {p.description[lang]}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">
                    {p.category[lang]}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-neutral-100">
                    {p.color[lang]}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-semibold">
                    {formatPrice(p.price, lang)}
                  </span>
                  <div className="flex gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/collection/${p.slug}`}>
                        {t("collection.actions.view", "Voir")}
                      </Link>
                    </Button>
                    <Button asChild size="sm" className="bg-black text-white hover:bg-black/85">
                      {/* ancre order sur la fiche produit */}
                      <Link to={`/collection/${p.slug}#order`}>
                        {t("common.order", "Commander")}
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
