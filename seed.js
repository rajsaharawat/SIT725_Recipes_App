const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/recipeDB";

const RecipeSchema = new mongoose.Schema({
  recipeId: Number,
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

const sampleRecipes = [
  {
    recipeId: 1,
    title: "Spicy Veggie Pasta",
    image: "/images/pasta.jpg",
    shortDescription: "A quick weeknight pasta with a little chilli kick.",
    cookingTime: "25 minutes",
    servings: 2,
    difficulty: "Easy",
    ingredients: [
      "200g penne pasta",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 cup mixed capsicum, sliced",
      "1 cup cherry tomatoes, halved",
      "1 tsp chilli flakes",
      "2 tbsp olive oil",
      "Salt and pepper to taste",
    ],
    steps: [
      "Cook the pasta according to packet instructions.",
      "Sauté onion and garlic in olive oil until soft.",
      "Add capsicum, cherry tomatoes and chilli flakes; cook for 5–7 minutes.",
      "Stir in the drained pasta, season with salt and pepper, and toss well.",
      "Serve warm, optionally topped with grated cheese.",
    ],
  },
  {
    recipeId: 2,
    title: "Creamy Mushroom Risotto",
    image: "/images/risotto.jpg",
    shortDescription: "Comforting risotto with mushrooms and parmesan.",
    cookingTime: "40 minutes",
    servings: 3,
    difficulty: "Medium",
    ingredients: [
      "1 cup arborio rice",
      "2 cups vegetable stock",
      "1 cup mushrooms, sliced",
      "1 small onion, finely chopped",
      "2 tbsp butter",
      "2 tbsp grated parmesan",
      "Salt and pepper to taste",
    ],
    steps: [
      "Heat butter and sauté onion until translucent.",
      "Add mushrooms and cook until lightly browned.",
      "Stir in rice and toast for 1–2 minutes.",
      "Add warm stock a ladle at a time, stirring until absorbed.",
      "Repeat until rice is creamy and cooked through.",
      "Stir in parmesan, season, and serve.",
    ],
  },
];

async function seed() {
  console.log("Connecting to MongoDB at:", MONGO_URI);
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("✅ Connected, clearing old recipes...");
    await Recipe.deleteMany({});
    console.log("✅ Inserting sample recipes...");
    await Recipe.insertMany(sampleRecipes);
    console.log("✅ Seeding complete!");
  } catch (err) {
    console.error("❌ Mongo connection or seeding failed:");
    console.error(err.name, "-", err.message);
  } finally {
    await mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
}

seed();
