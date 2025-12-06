const express = require("express");
const path = require("path");
const recipes = require("./data/recipes");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from /public
app.use(express.static(path.join(__dirname, "public")));

// GET /api/recipes - list of recipes (summary)
app.get("/api/recipes", (req, res) => {
  const summaries = recipes.map(r => ({
    id: r.id,
    title: r.title,
    image: r.image,
    shortDescription: r.shortDescription,
    cookingTime: r.cookingTime,
    difficulty: r.difficulty
  }));
  res.json(summaries);
});

// GET /api/recipes/:id - full details
app.get("/api/recipes/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) {
    return res.status(404).json({ error: "Recipe not found" });
  }
  res.json(recipe);
});

app.listen(PORT, () => {
  console.log(`Recipe app running at http://localhost:${PORT}`);
});
