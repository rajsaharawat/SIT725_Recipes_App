document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("recipe-details");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (!id) {
    container.innerHTML = `<p class="red-text">No recipe selected.</p>`;
    return;
  }

  fetch(`/api/recipes/${id}`)
    .then(res => res.json())
    .then(recipe => {
      if (recipe.error) {
        container.innerHTML = `<p class="red-text">${recipe.error}</p>`;
        return;
      }

      container.innerHTML = `
        <div class="card">
          <div class="card-image">
            <img src="${recipe.image}" alt="${recipe.title}">
            <span class="card-title">${recipe.title}</span>
          </div>
          <div class="card-content">
            <p><strong>Cooking time:</strong> ${recipe.cookingTime}</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>

            <h5>Ingredients</h5>
            <ul class="collection">
              ${recipe.ingredients
                .map(ing => `<li class="collection-item">${ing}</li>`)
                .join("")}
            </ul>

            <h5>Steps</h5>
            <ol class="browser-default">
              ${recipe.steps
                .map(step => `<li>${step}</li>`)
                .join("")}
            </ol>
          </div>
        </div>
      `;
    })
    .catch(err => {
      console.error(err);
      container.innerHTML = `<p class="red-text">Could not load recipe.</p>`;
    });
});
