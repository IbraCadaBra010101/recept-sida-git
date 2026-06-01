function renderRecipes(list) {
  var grid = document.getElementById("recipe-grid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = "<p class='no-results'>Inga recept hittades i den kategorin.</p>";
    return;
  }

  grid.innerHTML = list
    .map(function (recipe) {
      return (
        "<article class='recipe-card'>" +
        "<img src='" + recipe.image + "' alt='" + recipe.name + "' class='recipe-card__img'>" +
        "<div class='recipe-card__body'>" +
        "<span class='recipe-card__tag'>" + recipe.tag + "</span>" +
        "<h3>" + recipe.name + "</h3>" +
        "<p class='recipe-card__desc'>" + recipe.description + "</p>" +
        "<p class='recipe-card__time'>⏱ " + recipe.time + "</p>" +
        "</div>" +
        "</article>"
      );
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", function () {
  renderRecipes(recipes);
  initFilters(renderRecipes);
});
