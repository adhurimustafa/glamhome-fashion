# How to Retrieve the Azure Publish Profile

To deploy your application to Azure App Service, you need the publish profile. Follow these steps to retrieve it:

1. **Log in to the Azure Portal**:
   - Go to [https://portal.azure.com](https://portal.azure.com).

2. **Navigate to Your App Service**:
   - In the left-hand menu, select **App Services**.
   - Click on the name of your App Service.

3. **Download the Publish Profile**:
   - In the App Service overview page, look for the **Get publish profile** option.
   - Click on it to download the publish profile as an `.xml` file.

4. **Add the Publish Profile to GitHub Secrets**:
   - Open your GitHub repository.
   - Go to **Settings** > **Secrets and variables** > **Actions**.
   - Add a new secret named `AZURE_PUBLISH_PROFILE`.
   - Paste the contents of the `.xml` file into the secret value.

5. **Set the App Name**:
   - Add another secret named `AZURE_WEBAPP_NAME`.
   - Use the name of your App Service as the value.

Your GitHub Actions workflow is now ready to deploy your application to Azure App Service.