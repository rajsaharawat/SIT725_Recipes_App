const recipes = [
  {
    id: 1,
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
      "Salt and pepper to taste"
    ],
    steps: [
      "Cook the pasta according to packet instructions.",
      "Sauté onion and garlic in olive oil until soft.",
      "Add capsicum, cherry tomatoes and chilli flakes; cook for 5–7 minutes.",
      "Stir in the drained pasta, season with salt and pepper, and toss well.",
      "Serve warm, optionally topped with grated cheese."
    ]
  },
  {
    id: 2,
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
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat butter and sauté onion until translucent.",
      "Add mushrooms and cook until lightly browned.",
      "Stir in rice and toast for 1–2 minutes.",
      "Add warm stock a ladle at a time, stirring until absorbed.",
      "Repeat until rice is creamy and cooked through.",
      "Stir in parmesan, season, and serve."
    ]
  }
];

module.exports = recipes;
