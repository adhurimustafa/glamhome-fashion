# Managing Secrets in GitHub Actions

To securely manage secrets in your GitHub repository, follow these steps:

1. **Navigate to Secrets**:
   - Go to your GitHub repository.
   - Click on **Settings** > **Secrets and variables** > **Actions**.

2. **Add a New Secret**:
   - Click on **New repository secret**.
   - Add the following secrets:
     - `AZURE_OPENAI_ENDPOINT`: Your Azure OpenAI endpoint.
     - `AZURE_OPENAI_KEY`: Your Azure OpenAI key.
     - `AZURE_OPENAI_DEPLOYMENT`: Your Azure OpenAI deployment name.
     - `AZURE_API_VERSION`: The API version (e.g., `2024-05-01-preview`).

3. **Access Secrets in GitHub Actions**:
   - Use the secrets in your workflow file. For example:
     ```yaml
     env:
       AZURE_OPENAI_ENDPOINT: ${{ secrets.AZURE_OPENAI_ENDPOINT }}
       AZURE_OPENAI_KEY: ${{ secrets.AZURE_OPENAI_KEY }}
       AZURE_OPENAI_DEPLOYMENT: ${{ secrets.AZURE_OPENAI_DEPLOYMENT }}
       AZURE_API_VERSION: ${{ secrets.AZURE_API_VERSION }}
     ```

4. **Best Practices**:
   - Never hardcode sensitive information in your codebase.
   - Use `.env` files for local development and GitHub Secrets for CI/CD pipelines.
   - Add `.env` files to `.gitignore` to prevent them from being committed.

By following these steps, you can ensure that sensitive information is securely managed and not exposed in your codebase.