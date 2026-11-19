import { getRecipes, searchRecipes } from "./api.js";
import { renderRecipes, renderNoResults } from "./display.js";
async function init() {
    try {
        const data = await getRecipes();
        renderRecipes(data.recipes);
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

init();
const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", async() => {
    const searchTerm = searchInput.value.trim();

    if (searchTerm === "") {
        const data = await getRecipes();
        renderRecipes(data.recipes);
        return;
    }

    const data = await searchRecipes(searchTerm);

    if (data.recipes.length === 0) {
        renderNoResults();
    } else {
        renderRecipes(data.recipes);
    }
});
document.addEventListener("click", async(event) => {
    if (event.target.id === "show-all") {
        const data = await getRecipes();
        renderRecipes(data.recipes);
        searchInput.value = "";
    }
});
const form = document.querySelector("#recipe-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const cuisine = document.querySelector("#cuisine").value;
    const difficulty = document.querySelector("#difficulty").value;
    const time = document.querySelector("#prepTimeMinutes").value;

    document.querySelector("#name-error").textContent = validateName(name);
    document.querySelector("#cuisine-error").textContent = validateCuisine(cuisine);
    document.querySelector("#difficulty-error").textContent = validateDifficulty(difficulty);
    document.querySelector("#time-error").textContent = validateTime(time);
});