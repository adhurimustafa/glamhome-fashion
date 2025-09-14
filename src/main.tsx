// src/main.tsx
import "./i18n"; // <= AJOUTER CETTE LIGNE
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const el = document.getElementById("root");
if (!el) throw new Error("#root introuvable");

createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
