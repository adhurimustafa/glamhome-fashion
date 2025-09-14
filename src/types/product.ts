export type Localized = {
  fr: string;
  en: string;
  sq: string;
};

export type Badge = {
  type: "new" | "trending" | "only" | "prestige";
  count?: number;
};

export interface Product {
  slug: string;
  images: string[];
  price: number;
  name: Localized;
  description: Localized;
  category: Localized;
  color: Localized;
  badges?: Badge[];
}
