document.addEventListener("DOMContentLoaded", () => {
  const listContainer = document.getElementById("recipe-list");

  fetch("/api/recipes")
    .then(res => res.json())
    .then(recipes => {
      recipes.forEach(recipe => {
        const card = document.createElement("div");
        card.className = "col s12 m6 l4";

        card.innerHTML = `
          <div class="card hoverable">
            <div class="card-image">
              <img src="${recipe.image}" alt="${recipe.title}">
              <span class="card-title">${recipe.title}</span>
            </div>
            <div class="card-content">
              <p>${recipe.shortDescription}</p>
              <p><strong>Time:</strong> ${recipe.cookingTime}</p>
              <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
            </div>
            <div class="card-action">
              <a href="recipe.html?id=${recipe.id}">View details</a>
            </div>
          </div>
        `;

        listContainer.appendChild(card);
      });
    })
    .catch(err => {
      console.error(err);
      listContainer.innerHTML = `<p class="red-text">Could not load recipes.</p>`;
    });
});
