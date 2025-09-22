# PowerShell Deployment Script

param (
    [string]$ResourceGroupName,
    [string]$TemplateFile = "./infra/storage.bicep",
    [string]$Location = "eastus"
)

az deployment group create `
  --resource-group $ResourceGroupName `
  --template-file $TemplateFile `
  --parameters location=$Location storageAccountName="$(New-Guid)"