param storageAccountName string
param location string = resourceGroup().location

resource storageAccount 'Microsoft.Storage/storageAccounts@2022-09-01' = {
  name: storageAccountName
  location: location
  sku: {
    name: 'Standard_RAGRS'
  }
  kind: 'StorageV2'
  properties: {
    accessTier: 'Hot'
  }
}

resource blobContainer 'Microsoft.Storage/storageAccounts/blobServices/containers@2022-09-01' = {
  name: 'images'
  parent: storageAccount
  properties: {
    publicAccess: 'Blob'
  }
}

resource cdnProfile 'Microsoft.Cdn/profiles@2021-06-01' = {
  name: '${storageAccountName}-cdn'
  location: location
  sku: {
    name: 'Standard_AzureFrontDoor'
  }
}

resource cdnEndpoint 'Microsoft.Cdn/profiles/endpoints@2021-06-01' = {
  name: '${storageAccountName}-endpoint'
  parent: cdnProfile
  properties: {
    origins: [
      {
        name: 'storageOrigin'
        hostName: '${storageAccount.name}.blob.core.windows.net'
      }
    ]
    isHttpAllowed: false
    isHttpsAllowed: true
  }
}

output cdnEndpoint string = cdnEndpoint.properties.hostName
output blobEndpoint string = storageAccount.properties.primaryEndpoints.blob