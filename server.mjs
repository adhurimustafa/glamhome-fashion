import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config({ path: ".env.local" });

const app = express();
app.use(cors());
app.use(express.json());

// Variables d'environnement
const BASE = (process.env.AZURE_OPENAI_ENDPOINT || "").replace(/\/+$/, "");
const PROJECT = process.env.AZURE_PROJECT || "glamhome-ai";
const API_VERSION = process.env.AZURE_API_VERSION || "2024-05-01-preview";
const DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT || "gpt-4o";
const KEY = process.env.AZURE_OPENAI_KEY;
const COSMOS_CONN = process.env.COSMOS_CONN;

// Vérification de la connexion à Cosmos DB
if (!COSMOS_CONN) {
    console.error("❌ COSMOS_CONN environment variable is not set.");
    process.exit(1);
}

const client = new MongoClient(COSMOS_CONN);
const db = client.db("glamhome");

// Route principale
app.post("/api/chat", async (req, res) => {
    const text = req.body?.message ?? "Bonjour GlamHome !";

    const url = `${BASE}/api/projects/${PROJECT}/responses?api-version=${API_VERSION}`;

    const body = {
        messages: [
            {
                role: "user",
                content: [{ type: "text", text }]
            }
        ],
        deployment: DEPLOYMENT
    };

    try {
        const r = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": KEY
            },
            body: JSON.stringify(body)
        });

        if (!r.ok) {
            const errText = await r.text();
            console.error("❌ Erreur API Azure:", r.status, errText);
            return res
                .status(502)
                .json({ error: "Upstream error", status: r.status, body: errText });
        }

        const data = await r.json();
        console.log("✅ Réponse brute Azure:", JSON.stringify(data, null, 2));

        // Extraction “robuste” du texte
        const reply =
            data?.output_text ??
            data?.output?.[0]?.content?.[0]?.text?.value ??
            data?.choices?.[0]?.message?.content ??
            JSON.stringify(data);

        res.json({ reply });
    } catch (e) {
        console.error("❌ Exception serveur:", e);
        res.status(500).json({ error: e.message });
    }
});

// Endpoint pour récupérer les produits
app.get("/api/products", async (req, res) => {
    try {
        const products = await db.collection("products").find().toArray();
        res.json(products);
    } catch (error) {
        console.error("❌ Error fetching products:", error);
        res.status(500).json({ error: "Failed to fetch products." });
    }
});

// Endpoint pour récupérer les commandes
app.get("/api/orders", async (req, res) => {
    try {
        const orders = await db.collection("orders").find().toArray();
        res.json(orders);
    } catch (error) {
        console.error("❌ Error fetching orders:", error);
        res.status(500).json({ error: "Failed to fetch orders." });
    }
});

// Lancement du serveur
app.listen(3000, () => {
    console.log("✅ GlamHome AI server: http://localhost:3000");
});