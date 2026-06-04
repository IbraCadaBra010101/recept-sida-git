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
        "<article class='recipe-card' data-id='" + recipe.id + "' tabindex='0' role='button'>" +
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

  grid.querySelectorAll(".recipe-card").forEach(function (card) {
    card.addEventListener("click", function () {
      openModal(Number(card.getAttribute("data-id")));
    });
    card.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(Number(card.getAttribute("data-id")));
      }
    });
  });
}

function openModal(id) {
  var recipe = getRecipeById(id);
  var modal = document.getElementById("recipe-modal");
  if (!recipe || !modal) return;

  document.getElementById("modal-image").src = recipe.image;
  document.getElementById("modal-image").alt = recipe.name;
  document.getElementById("modal-title").textContent = recipe.name;
  document.getElementById("modal-tag").textContent = recipe.tag;
  document.getElementById("modal-time").textContent = recipe.time;
  document.getElementById("modal-servings").textContent = recipe.servings;
  document.getElementById("modal-difficulty").textContent = recipe.difficulty;
  document.getElementById("modal-description").textContent = recipe.description;
  document.getElementById("modal-ingredients").innerHTML = recipe.ingredients
    .map(function (item) {
      return "<li>" + item + "</li>";
    })
    .join("");
  document.getElementById("modal-instructions").textContent = recipe.instructions;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  var modal = document.getElementById("recipe-modal");
  if (!modal) return;
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initModal() {
  var modal = document.getElementById("recipe-modal");
  if (!modal) return;

  modal.querySelector(".modal__close").addEventListener("click", closeModal);
  modal.querySelector(".modal__backdrop").addEventListener("click", closeModal);

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderRecipes(recipes);
  initFilters(renderRecipes);
  initModal();
});
