export type LangKey = 'fr' | 'en' | 'sq';

export type LocalizedText = Record<LangKey, string>;

export type Badge =
  | { type: 'new' | 'trending' | 'only' | 'prestige'; count?: number };

export interface Product {
  slug: string;
  images: string[]; // ex: ["/images/dresses/r1.png", "/images/dresses/r1.1.png"]
  price: number;    // en EUR (entier)
  name: LocalizedText;
  description: LocalizedText;
  category: LocalizedText;
  color: LocalizedText;
  badges?: Badge[];
}
