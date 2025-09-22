# PowerShell Script to Export Cosmos DB Connection String

param (
    [string]$ResourceGroupName,
    [string]$AccountName
)

# Retrieve the connection string
$connectionString = az cosmosdb keys list `
  --resource-group $ResourceGroupName `
  --name $AccountName `
  --type connection-strings `
  --query "connectionStrings[0].connectionString" `
  --output tsv

# Set the GitHub secret
gh secret set COSMOS_CONN --body "$connectionString"