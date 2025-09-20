# Project: Glamhome Fashion
Stack: Vite + React + TypeScript, Tailwind, i18next (FR/EN/SQ).
Entry: index.html, vite.config.ts
Aliases TS: "@/src/*" via tsconfig.app.json
Data: src/data/products.json (source du catalogue)
Images: public/images/...

## Conventions
- i18n: pas de texte en dur → utiliser i18next.
- UI: composants réactifs Tailwind; types TS stricts.
- Produits: ajouter via products.json + images; garder clés FR/EN/SQ.
- Tests: Vitest + React Testing Library.

## Scripts
- Dev: npm run dev | pnpm dev | bun dev
- Build: npm run build | pnpm build | bun build
- Test: npm test (Vitest)

## Tâches pour l’agent
- Créer page /collections avec filtres (prix, couleur) + tests.
- Ajouter un produit (id Rxx) + images + i18n.
- Refactoriser le carrousel en <HeroCarousel/> réutilisable.
- Configurer Vitest + RTL si absent et générer 3 tests unitaires.
