# TODO: Images Responsive - Optimisations futures

## ⏳ En attente du support CDN

### Fonctionnalités requises :
- Support des éléments `<picture>` et `<source>`
- Support de l'attribut `srcset` avec descripteurs de largeur
- Support des formats modernes (WebP, AVIF)

### Breakpoints cibles :
```
3840px - Ultra-wide displays
2560px - Large desktop 
1920px - Standard desktop
1280px - Small desktop/large tablet
768px  - Tablet
480px  - Mobile
```

### Formats de compression :
1. **AVIF** (priorité) - Meilleur ratio compression/qualité
2. **WebP** (fallback) - Support navigateurs large
3. **JPEG** (fallback final) - Compatibilité universelle

### Implémentation prévue :

#### Hero (slides château/désert) :
```html
<picture>
  <source media="(min-width: 1920px)" 
          srcset="hero-3840.avif 3840w, hero-2560.avif 2560w" 
          type="image/avif">
  <source media="(min-width: 1920px)" 
          srcset="hero-3840.webp 3840w, hero-2560.webp 2560w" 
          type="image/webp">
  <source media="(min-width: 1280px)" 
          srcset="hero-1920.avif 1920w, hero-1280.avif 1280w" 
          type="image/avif">
  <source media="(min-width: 1280px)" 
          srcset="hero-1920.webp 1920w, hero-1280.webp 1280w" 
          type="image/webp">
  <source srcset="hero-768.avif 768w, hero-480.avif 480w" 
          type="image/avif">
  <source srcset="hero-768.webp 768w, hero-480.webp 480w" 
          type="image/webp">
  <img src="hero-1920.jpg" 
       sizes="100vw" 
       loading="eager" 
       fetchpriority="high"
       alt="Hero image">
</picture>
```

#### Galerie robes :
```html
<picture>
  <source srcset="dress-1280.avif 1280w, dress-768.avif 768w, dress-480.avif 480w" 
          type="image/avif">
  <source srcset="dress-1280.webp 1280w, dress-768.webp 768w, dress-480.webp 480w" 
          type="image/webp">
  <img src="dress-800.jpg" 
       sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
       loading="lazy"
       decoding="async"
       alt="Robe description">
</picture>
```

### Compression recommandée :
- **Qualité AVIF** : 65-70 (excellent)
- **Qualité WebP** : 80-85 (très bon)  
- **Qualité JPEG** : 85-90 (baseline)

### Gains de performance attendus :
- **Réduction poids** : 60-80% vs images actuelles
- **LCP improvement** : -0.5 à -1.5s
- **Bandwidth saving** : ~70% sur mobile

### Notes d'implémentation :
- ✅ Attributs `sizes` déjà optimisés - à conserver
- ✅ `loading` et `decoding` déjà configurés
- ✅ `fetchpriority` déjà en place pour LCP
- ✅ Dimensions `width/height` déjà définies

### Outils de génération recommandés :
1. **Sharp** (Node.js) - automatisation
2. **Squoosh** (web) - test/prototypage  
3. **ImageMagick** - batch processing
4. **Cloudinary/ImageKit** - service cloud

---
*Mise à jour : Décembre 2024*
*Status : En attente support CDN*