import { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Home, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import productsData from "@/data/products.json";

interface Product {
  slug: string;
  name: Record<string, string>;
  description: Record<string, string>;
  price: number;
  badges: { type: string; count?: number }[];
  thumb: string;
  images: string[];
  color: Record<string, string>;
  category: Record<string, string>;
}

const localeMap: Record<string, string> = {
  fr: "fr-FR",
  en: "en-US",
  sq: "sq-AL",
};

const Collection = () => {
  const { t, i18n } = useTranslation();
  const lang = (i18n.language as "fr" | "en" | "sq") || "en";

  const [products] = useState<Product[]>(productsData as Product[]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const nf = useMemo(
    () =>
      new Intl.NumberFormat(localeMap[lang] || "en-US", {
        style: "currency",
        currency: "EUR",
      }),
    [lang]
  );

  // Unique categories & colors (dans la langue active)
  const categories = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.category[lang] || p.category.en)))],
    [products, lang]
  );

  const colors = useMemo(
    () => ["all", ...Array.from(new Set(products.map((p) => p.color[lang] || p.color.en)))],
    [products, lang]
  );

  // SEO meta
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${t("collection.title")} – Glam Fashion`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("collection.metaDescription"));
    }

    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute("href", window.location.origin + "/collection");
    }

    return () => {
      document.title = prevTitle || "GLAMHOME FASHION — Robes de soirée & haute élégance";
    };
  }, [t]);

  // Filters
  useEffect(() => {
    let filtered = products;

    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      filtered = filtered.filter((product) =>
        (product.name[lang] || product.name.en).toLowerCase().includes(q)
      );
    }

    if (categoryFilter !== "all") {
      filtered = filtered.filter(
        (product) => (product.category[lang] || product.category.en) === categoryFilter
      );
    }

    if (colorFilter !== "all") {
      filtered = filtered.filter(
        (product) => (product.color[lang] || product.color.en) === colorFilter
      );
    }

    if (priceFilter !== "all") {
      switch (priceFilter) {
        case "under-400":
          filtered = filtered.filter((product) => product.price < 400);
          break;
        case "400-500":
          filtered = filtered.filter((product) => product.price >= 400 && product.price <= 500);
          break;
        case "over-500":
          filtered = filtered.filter((product) => product.price > 500);
          break;
      }
    }

    setFilteredProducts(filtered);
  }, [searchTerm, categoryFilter, colorFilter, priceFilter, products, lang]);

  return (
    <main className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav
          aria-label={t("collection.breadcrumb.aria")}
          className="flex items-center space-x-2 text-sm text-muted-foreground"
        >
          <Link
            to="/"
            className="hover:text-[#B48A7C] transition-colors flex items-center"
            aria-label={t("collection.breadcrumb.homeAria")}
          >
            <Home className="h-4 w-4 mr-1" />
            {t("nav.home")}
          </Link>
          <span>/</span>
          <span className="text-[#0F0F0F] font-medium">{t("collection.title")}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-12 bg-gradient-to-b from-luxury-pearl to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-6xl font-serif font-light text-[#0F0F0F]">
              {t("collection.title")}
            </h1>
            <div
              className="flex items-center bg-[#B48A7C] text-white px-3 py-1 rounded-full text-sm font-medium"
              role="status"
              aria-live="polite"
              aria-atomic="true"
              aria-label={t("collection.title")}
            >
              <Eye className="h-4 w-4 mr-1" />
              <span>{filteredProducts.length}</span>
            </div>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("collection.subtitle")}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Filter className="h-4 w-4" />
              <span>{t("collection.filters.title")}</span>
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-sm">
              <label htmlFor="collection-search" className="sr-only">
                {t("collection.filters.search")}
              </label>
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="collection-search"
                placeholder={t("collection.filters.search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
                aria-label={t("collection.filters.search")}
              />
            </div>

            {/* Category */}
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px]" aria-label={t("collection.filters.category")}>
                <SelectValue placeholder={t("collection.filters.category")} />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? t("collection.filters.category") : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Color */}
            <Select value={colorFilter} onValueChange={setColorFilter}>
              <SelectTrigger className="w-[180px]" aria-label={t("collection.filters.color")}>
                <SelectValue placeholder={t("collection.filters.color")} />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color === "all" ? t("collection.filters.color") : color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Price */}
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-[180px]" aria-label={t("collection.filters.price")}>
                <SelectValue placeholder={t("collection.filters.price")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t("collection.filters.price")}</SelectItem>
                <SelectItem value="under-400">{t("collection.filters.under400")}</SelectItem>
                <SelectItem value="400-500">{t("collection.filters.between400_500")}</SelectItem>
                <SelectItem value="over-500">{t("collection.filters.over500")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8" id="products-grid">
            {filteredProducts.map((product) => (
              <Card
                key={product.slug}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-elegant hover:-translate-y-2 transition-all duration-500 rounded-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Badges */}
                  {product.badges?.length > 0 && (
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                      {product.badges.map((badge, index) => (
                        <Badge
                          key={index}
                          variant={
                            badge.type === "new"
                              ? "default"
                              : badge.type === "trending"
                              ? "secondary"
                              : badge.type === "only"
                              ? "destructive"
                              : badge.type === "prestige"
                              ? "outline"
                              : "default"
                          }
                          className="text-xs shadow-sm"
                        >
                          {t(`collection.badges.${badge.type}`, { count: badge.count })}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <img
                    src={`/images/dresses/${product.images[0].replace(".jpg", ".png")}`}
                    alt={`${product.name[lang] || product.name.en} - ${t("collection.productAlt")}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    width="600"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-serif text-lg font-medium text-[#0F0F0F] mb-2">
                    {product.name[lang] || product.name.en}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2 leading-relaxed">
                    {product.description[lang] || product.description.en}
                  </p>

                  <div className="text-xl font-semibold text-[#B48A7C] mb-3">
                    {nf.format(product.price)}
                  </div>

                  <div className="flex gap-2 mb-4">
                    <Badge variant="outline" className="text-xs">
                      {product.category[lang] || product.category.en}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {product.color[lang] || product.color.en}
                    </Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 border-[#B48A7C] text-[#B48A7C] hover:bg-[#B48A7C] hover:text-white"
                    >
                      <Link to={`/product/${product.slug}`}>{t("collection.buttons.view")}</Link>
                    </Button>
                    <Button asChild size="sm" className="flex-1 bg-[#B48A7C] hover:bg-[#B48A7C]/90">
                      <Link to={`/order?product=${product.slug}`}>{t("collection.buttons.order")}</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground mb-4">{t("collection.empty")}</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setColorFilter("all");
                  setPriceFilter("all");
                }}
              >
                {t("collection.reset")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Collection;
