#!/bin/bash

# Bash Deployment Script

RESOURCE_GROUP_NAME=$1
TEMPLATE_FILE="./infra/storage.bicep"
LOCATION=${2:-"eastus"}

az deployment group create \
  --resource-group $RESOURCE_GROUP_NAME \
  --template-file $TEMPLATE_FILE \
  --parameters location=$LOCATION storageAccountName=$(uuidgen)