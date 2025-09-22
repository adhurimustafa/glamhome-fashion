# Déploiement sur Azure Static Web Apps

Ce projet utilise Azure Static Web Apps pour héberger l'application front-end construite avec Vite/React.

## Étapes pour créer une ressource Azure Static Web Apps

1. Connectez-vous à votre compte Azure via le portail [Azure Portal](https://portal.azure.com).
2. Recherchez "Static Web Apps" dans la barre de recherche et cliquez sur **Créer**.
3. Remplissez les informations nécessaires :
   - **Nom de la ressource** : Choisissez un nom unique pour votre application.
   - **Plan de tarification** : Sélectionnez le plan gratuit ou un autre selon vos besoins.
   - **Région** : Choisissez une région proche de vos utilisateurs.
   - **Source de déploiement** : Sélectionnez GitHub et connectez votre dépôt.
4. Une fois la ressource créée, récupérez le **token de déploiement** :
   - Allez dans **Paramètres** > **Clés de déploiement**.
   - Copiez le token principal.

## Configuration du workflow GitHub Actions

1. Ajoutez le token de déploiement comme secret dans votre dépôt GitHub :
   - Allez dans **Settings** > **Secrets and variables** > **Actions**.
   - Cliquez sur **New repository secret**.
   - Nommez le secret `AZURE_STATIC_WEB_APPS_API_TOKEN` et collez le token.

2. Le workflow GitHub Actions est défini dans `.github/workflows/swa.yml` et se déclenche sur chaque push vers la branche `main`.

## Structure du workflow

- **Build** :
  - Installe les dépendances avec `npm ci`.
  - Construit le projet avec `npm run build`.
- **Déploiement** :
  - Déploie les fichiers générés dans le dossier `dist` vers Azure Static Web Apps.

## Notes

- Assurez-vous que le fichier `vite.config.ts` est correctement configuré pour le déploiement en production.
- Vérifiez que toutes les dépendances nécessaires sont incluses dans `package.json`.