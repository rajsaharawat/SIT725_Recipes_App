const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- MIDDLEWARE ----------
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ---------- MONGODB CONNECTION ----------
const MONGO_URI = "mongodb://127.0.0.1:27017/recipeDB";

const RecipeSchema = new mongoose.Schema({
  recipeId: Number, // numeric id we use in URLs (?id=1, ?id=2)
  title: String,
  image: String,
  shortDescription: String,
  cookingTime: String,
  servings: Number,
  difficulty: String,
  ingredients: [String],
  steps: [String],
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

// ---------- REST API ENDPOINTS ----------

// GET /api/recipes  -> list of recipes (for cards on index.html)
app.get("/api/recipes", async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    // front-end expects "id" field
    const summaries = recipes.map((r) => ({
      id: r.recipeId,
      title: r.title,
      image: r.image,
      shortDescription: r.shortDescription,
      cookingTime: r.cookingTime,
      difficulty: r.difficulty,
    }));
    res.json(summaries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipes" });
  }
});

// GET /api/recipes/:id -> full recipe details
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    const recipe = await Recipe.findOne({ recipeId: id });

    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }

    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
});

// ---------- START SERVER WITH DB CONNECTION ----------
async function start() {
  console.log("Connecting to MongoDB at:", MONGO_URI);
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Connected to MongoDB (recipeDB)");
    app.listen(PORT, () => {
      console.log(`🍳 Recipe app running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Mongo connection failed:");
    console.error(err.name, "-", err.message);
  }
}

start();
