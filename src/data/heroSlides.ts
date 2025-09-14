// src/data/heroSlides.ts
export interface Slide {
  id: number;
  image: string;
  alt: string;
}

// ⚠️ Doivent exister dans public/images/homepage/
export const slides: Slide[] = [
  { id: 1, image: "/images/homepage/g1.png", alt: "Glamour Collection — visuel 1" },
  { id: 2, image: "/images/homepage/g2.png", alt: "Glamour Collection — visuel 2" },
  { id: 3, image: "/images/homepage/g3.png", alt: "Glamour Collection — visuel 3" },
  { id: 4, image: "/images/homepage/g4.png", alt: "Glamour Collection — visuel 4" },
  { id: 5, image: "/images/homepage/g5.png", alt: "Glamour Collection — visuel 5" },
  { id: 6, image: "/images/homepage/g6.png", alt: "Glamour Collection — visuel 6" },
  { id: 7, image: "/images/homepage/g7.png", alt: "Glamour Collection — visuel 7" }
];
