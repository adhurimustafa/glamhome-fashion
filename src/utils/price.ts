// Formatage prix selon la langue (EUR)
export const formatPrice = (price: number, lang: string) => {
  const base = (lang || "fr").toLowerCase().split("-")[0];
  const locale =
    base === "fr" ? "fr-FR" :
    base === "sq" ? "sq-AL" :
    "en-GB";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0
  }).format(price);
};

// Normalise "fr-FR" -> "fr"
export const normalizeLang = (lang?: string) =>
  (lang || "fr").toLowerCase().split("-")[0] as "fr" | "en" | "sq";
