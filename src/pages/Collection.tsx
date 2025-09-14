import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Product, LangKey } from '@/types/product';
import { normalizeLang, formatPriceEUR } from '@/utils/price';

// IMPORTANT : Vite permet l'import JSON direct (tsconfig resolveJsonModule doit être true)
import productsJson from '@/data/products.json';

const PRODUCTS = productsJson as Product[];

type PriceRange = { min: number; max: number };

export default function Collection() {
  const { t, i18n } = useTranslation();
  const lang = useMemo<LangKey>(() => normalizeLang(i18n.language), [i18n.language]);

  const bounds = useMemo<PriceRange>(() => {
    const prices = PRODUCTS.map(p => p.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, []);

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedColor, setSelectedColor] = useState<string>('all');
  const [minPrice, setMinPrice] = useState<number>(bounds.min);
  const [maxPrice, setMaxPrice] = useState<number>(bounds.max);
  const [search, setSearch] = useState<string>('');

  const categories = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach(p => set.add(p.category[lang]));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [lang]);

  const colors = useMemo(() => {
    const set = new Set<string>();
    PRODUCTS.forEach(p => set.add(p.color[lang]));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [lang]);

  const filtered = useMemo(() => {
    return PRODUCTS.filter(p => {
      const catOK = selectedCategory === 'all' || p.category[lang] === selectedCategory;
      const colorOK = selectedColor === 'all' || p.color[lang] === selectedColor;
      const priceOK = p.price >= minPrice && p.price <= maxPrice;
      const q = search.trim().toLowerCase();
      const searchOK =
        q.length === 0 ||
        p.name[lang].toLowerCase().includes(q) ||
        p.description[lang].toLowerCase().includes(q) ||
        p.category[lang].toLowerCase().includes(q) ||
        p.color[lang].toLowerCase().includes(q);

      return catOK && colorOK && priceOK && searchOK;
    });
  }, [lang, selectedCategory, selectedColor, minPrice, maxPrice, search]);

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8">
      {/* Header + Filters */}
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold">
          {t('collection.title', 'Collection')}
        </h1>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          {/* Search */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 min-w-[70px]">
              {t('filters.search', 'Recherche')}
            </label>
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('filters.searchPlaceholder', 'Rechercher…')}
              className="w-full md:w-64 rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
            />
          </div>

          {/* Category */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 min-w-[70px]">
              {t('filters.category', 'Catégorie')}
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
            >
              <option value="all">{t('filters.all', 'Toutes')}</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Color */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600 min-w-[70px]">
              {t('filters.color', 'Couleur')}
            </label>
            <select
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              className="rounded-lg border border-gray-300 px-3 py-2 outline-none focus:ring-2 focus:ring-black/10"
            >
              <option value="all">{t('filters.all', 'Toutes')}</option>
              {colors.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">{t('filters.price', 'Prix')}</label>
            <input
              type="number"
              min={bounds.min}
              max={bounds.max}
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              className="w-24 rounded-lg border border-gray-300 px-2 py-2 outline-none focus:ring-2 focus:ring-black/10"
              aria-label={t('filters.min', 'Min')}
            />
            <span className="text-gray-400">—</span>
            <input
              type="number"
              min={bounds.min}
              max={bounds.max}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-24 rounded-lg border border-gray-300 px-2 py-2 outline-none focus:ring-2 focus:ring-black/10"
              aria-label={t('filters.max', 'Max')}
            />
          </div>
        </div>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <p className="py-12 text-center text-gray-500">
          {t('collection.noResults', 'Aucun produit ne correspond à votre recherche.')}
        </p>
      ) : (
        <ul
          role="list"
          className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((p) => (
            <li key={p.slug} className="group">
              <Link to={`/collection/${p.slug}`} className="block focus:outline-none">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50">
                  {/* Image 1 */}
                  <img
                    src={p.images[0]}
                    alt={p.name[lang]}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                    loading="lazy"
                  />
                  {/* Image 2 (hover swap) */}
                  {p.images[1] && (
                    <img
                      src={p.images[1]}
                      alt={p.name[lang]}
                      className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      loading="lazy"
                    />
                  )}
                </div>
              </Link>

              <div className="mt-3 flex flex-col gap-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-medium">
                    <Link to={`/collection/${p.slug}`} className="hover:underline">
                      {p.name[lang]}
                    </Link>
                  </h3>
                  <span className="shrink-0 text-sm font-semibold">
                    {formatPriceEUR(p.price, lang)}
                  </span>
                </div>

                <p className="text-sm text-gray-600 line-clamp-2">
                  {p.description[lang]}
                </p>

                <div className="mt-1 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
                    {p.category[lang]}
                  </span>
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
                    {p.color[lang]}
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <Link
                    to={`/collection/${p.slug}`}
                    className="inline-flex items-center justify-center rounded-full border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
                  >
                    {t('buttons.view', 'Voir')}
                  </Link>
                  <Link
                    to={`/collection/${p.slug}#order`}
                    className="inline-flex items-center justify-center rounded-full bg-black px-3 py-2 text-sm text-white hover:bg-black/90"
                  >
                    {t('buttons.order', 'Commander')}
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
