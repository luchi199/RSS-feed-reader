// backend/index.js
import express from "express";
import Parser from "rss-parser";
import cors from "cors";

const app = express();
const parser = new Parser();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/api/feed", async (req, res) => {
  try {
    const feed = await parser.parseURL(
      "https://css-tricks.com/feed/"
    );

    res.json(feed.items);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch feed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});