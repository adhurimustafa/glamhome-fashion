import { useMemo, useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { Product, LangKey } from '@/types/product';
import { normalizeLang, formatPriceEUR } from '@/utils/price';
import productsJson from '@/data/products.json';

const PRODUCTS = productsJson as Product[];

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { t, i18n } = useTranslation();
  const lang = useMemo<LangKey>(() => normalizeLang(i18n.language), [i18n.language]);

  const product = useMemo(
    () => PRODUCTS.find((p) => p.slug === slug),
    [slug]
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  useEffect(() => {
    if (product) {
      document.title = `${product.name[lang]} · GlamHome Fashion`;
    }
  }, [product, lang]);

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  const images = product.images ?? [];
  const clampIndex = (i: number) => {
    if (images.length === 0) return 0;
    return (i + images.length) % images.length;
  };

  const goPrev = () => setIndex((i) => clampIndex(i - 1));
  const goNext = () => setIndex((i) => clampIndex(i + 1));

  return (
    <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-8">
      <nav className="mb-4 text-sm text-gray-500">
        <Link to="/collection" className="hover:underline">
          {t('breadcrumbs.collection', 'Collection')}
        </Link>
        <span className="mx-2">/</span>
        <span>{product.name[lang]}</span>
      </nav>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Carousel */}
        <div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-50">
            {images.length > 0 ? (
              <img
                key={images[index]}
                src={images[index]}
                alt={product.name[lang]}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                {t('product.noImage', 'Aucune image')}
              </div>
            )}

            {images.length > 1 && (
              <>
                <button
                  onClick={goPrev}
                  aria-label={t('product.prevImage', 'Image précédente')}
                  className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
                >
                  ‹
                </button>
                <button
                  onClick={goNext}
                  aria-label={t('product.nextImage', 'Image suivante')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
                >
                  ›
                </button>
              </>
            )}
          </div>

          {images.length > 1 && (
            <div className="mt-3 grid grid-cols-6 gap-2">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setIndex(i)}
                  className={`aspect-[3/4] overflow-hidden rounded-xl border ${
                    index === i ? 'border-black' : 'border-transparent'
                  }`}
                  aria-label={t('product.thumbnail', 'Miniature')}
                >
                  <img
                    src={src}
                    alt={product.name[lang]}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Infos */}
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-semibold">{product.name[lang]}</h1>

          <div className="mt-2 flex items-center gap-2">
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
              {product.category[lang]}
            </span>
            <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
              {product.color[lang]}
            </span>
          </div>

          <div className="mt-4 text-xl font-semibold">
            {formatPriceEUR(product.price, lang)}
          </div>

          <p className="mt-4 text-gray-700 whitespace-pre-line">
            {product.description[lang]}
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="#order"
              className="inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-white hover:bg-black/90"
            >
              {t('buttons.order', 'Commander')}
            </a>
            <Link
              to="/collection"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-50"
            >
              {t('buttons.backToCollection', 'Retour à la collection')}
            </Link>
          </div>

          {/* Section de commande (ancre) */}
          <div id="order" className="mt-10 rounded-2xl border border-gray-200 p-4">
            <h2 className="text-lg font-medium">{t('order.title', 'Commander cette robe')}</h2>
            <p className="mt-2 text-sm text-gray-600">
              {t(
                'order.instructions',
                'Indiquez la référence et contactez-nous. (Formulaire/CTA à brancher ici si nécessaire.)'
              )}
            </p>
            <div className="mt-4">
              <a
                href="/order"
                className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 hover:bg-gray-50"
              >
                {t('order.openOrderPage', 'Aller à la page commande')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
