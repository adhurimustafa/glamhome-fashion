import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: process.env.REACT_APP_AZURE_AD_B2C_CLIENT_ID || "", // Provide a default or throw an error
    authority: process.env.REACT_APP_AZURE_AD_B2C_AUTHORITY || "", // Provide a default or throw an error
    redirectUri: process.env.REACT_APP_AZURE_AD_B2C_REDIRECT_URI || "", // Provide a default or throw an error
  },
};

if (!msalConfig.auth.clientId || !msalConfig.auth.authority || !msalConfig.auth.redirectUri) {
  throw new Error("Missing required Azure AD B2C environment variables.");
}

const msalInstance = new PublicClientApplication(msalConfig);

const login = async () => {
  try {
    const loginResponse = await msalInstance.loginPopup({
      scopes: ["openid", "profile", "email"],
    });
    console.log("Login successful:", loginResponse);
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const logout = () => {
  msalInstance.logoutPopup();
};

export { msalInstance, login, logout };