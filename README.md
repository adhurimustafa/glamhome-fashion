# GLAMHOME FASHION

Vite + React + TypeScript. Front e-commerce orienté catalogage simple : **tous les produits sont dans un seul JSON**.

## Points clés
- Produits centralisés : `src/data/products.json`
- i18n (FR/EN/SQ) : textes **UI** via i18next, contenus **produits** depuis le JSON
- Home : Hero carousel + collection à la une
- Collection : grille + hover-swap (si 2ᵉ image), filtres (catégorie, couleur, prix)
- Détail produit : carrousel images, contenu localisé, bouton Commander
- Images : `public/images/{dresses,homepage,logos}`

## Ajouter un produit
1. Déposer 1 ou 2 images dans `public/images/dresses/` (ex: `r25.png`, `r25.1.png`)
2. Ajouter un objet dans `src/data/products.json` :
```json
{
  "slug": "r25",
  "images": ["/images/dresses/r25.png", "/images/dresses/r25.1.png"],
  "price": 459,
  "name": { "fr": "Robe R25", "en": "Dress R25", "sq": "Fustan R25" },
  "description": { "fr": "Texte FR", "en": "Text EN", "sq": "Tekst SQ" },
  "category": { "fr": "Soirée", "en": "Evening", "sq": "Mbrëmje" },
  "color": { "fr": "Vert émeraude", "en": "Emerald green", "sq": "E gjelbër smerald" }
}
