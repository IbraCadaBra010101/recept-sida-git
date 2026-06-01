function filterRecipes(category) {
  if (!category || category === "alla") {
    return recipes;
  }
  return recipes.filter(function (recipe) {
    return recipe.category === category;
  });
}

function initFilters(onFilter) {
  var buttons = document.querySelectorAll(".filter-btn");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      buttons.forEach(function (btn) {
        btn.classList.remove("active");
      });
      button.classList.add("active");

      var category = button.getAttribute("data-category");
      onFilter(filterRecipes(category));
    });
  });
}
