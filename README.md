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
```

# Prerequisites for Deployment

To deploy the infrastructure, ensure the following prerequisites are met:

1. **Azure CLI**:
   - Install the Azure CLI from [https://learn.microsoft.com/en-us/cli/azure/install-azure-cli](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli).

2. **Log in to Azure**:
   - Run `az login` to authenticate with your Azure account.

3. **Create a Resource Group**:
   - Use the following command to create a resource group:
     ```bash
     az group create --name <ResourceGroupName> --location <Region>
     ```
   - Replace `<ResourceGroupName>` with your desired name and `<Region>` with the Azure region (e.g., `eastus`).

4. **Set Deployment Parameters**:
   - Ensure you have the `infra/storage.bicep` file ready.
   - Use the provided deployment scripts (`deploy.ps1` for PowerShell or `deploy.sh` for Bash) to deploy the infrastructure.

5. **Run the Deployment Script**:
   - For PowerShell:
     ```powershell
     ./infra/deploy.ps1 -ResourceGroupName <ResourceGroupName> -Location <Region>
     ```
   - For Bash:
     ```bash
     ./infra/deploy.sh <ResourceGroupName> <Region>
     ```

After deployment, the outputs `cdnEndpoint` and `blobEndpoint` will provide the CDN and Blob Storage endpoints.
