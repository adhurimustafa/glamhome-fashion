#!/bin/bash

# Bash Script to Export Cosmos DB Connection String

RESOURCE_GROUP_NAME=$1
ACCOUNT_NAME=$2

# Retrieve the connection string
CONNECTION_STRING=$(az cosmosdb keys list \
  --resource-group $RESOURCE_GROUP_NAME \
  --name $ACCOUNT_NAME \
  --type connection-strings \
  --query "connectionStrings[0].connectionString" \
  --output tsv)

# Set the GitHub secret
echo "$CONNECTION_STRING" | gh secret set COSMOS_CONN