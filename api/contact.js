// api/contact.js — Vercel Serverless Function
// Saves contact form submissions to MongoDB
// Set MONGODB_URI in your Vercel environment variables

import { MongoClient } from "mongodb";

let client;
let db;

async function connectDB() {
  if (db) return db;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI environment variable is not set");
  }

  client = new MongoClient(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
  });

  await client.connect();
  db = client.db("portfolio");
  return db;
}

export default async function handler(req, res) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: "Message too long" });
    }

    const database = await connectDB();
    const collection = database.collection("messages");

    const doc = {
      name: name.trim().slice(0, 100),
      email: email.trim().toLowerCase().slice(0, 200),
      message: message.trim().slice(0, 2000),
      createdAt: new Date(),
      ip: req.headers["x-forwarded-for"] || req.connection?.remoteAddress || "unknown",
    };

    await collection.insertOne(doc);

    return res.status(200).json({
      success: true,
      message: "Message received! I'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error.message);
    return res.status(500).json({ error: "Server error. Please try again." });
  }
}
