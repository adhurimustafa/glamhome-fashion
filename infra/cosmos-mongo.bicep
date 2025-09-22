param accountName string
param location string = resourceGroup().location

resource cosmosAccount 'Microsoft.DocumentDB/databaseAccounts@2023-03-15' = {
  name: accountName
  location: location
  kind: 'MongoDB'
  properties: {
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        locationName: location
        failoverPriority: 0
      }
    ]
    capabilities: [
      {
        name: 'EnableMongo'
      }
    ]
  }
}

resource glamhomeDatabase 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases@2023-03-15' = {
  name: 'glamhome'
  parent: cosmosAccount
  properties: {
    resource: {
      id: 'glamhome'
    }
  }
}

resource productsCollection 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-03-15' = {
  name: 'products'
  parent: glamhomeDatabase
  properties: {
    resource: {
      id: 'products'
      shardKey: {
        '/slug': 'Hash'
      }
    }
  }
}

resource ordersCollection 'Microsoft.DocumentDB/databaseAccounts/mongodbDatabases/collections@2023-03-15' = {
  name: 'orders'
  parent: glamhomeDatabase
  properties: {
    resource: {
      id: 'orders'
      shardKey: {
        '/customerId': 'Hash'
      }
    }
  }
}