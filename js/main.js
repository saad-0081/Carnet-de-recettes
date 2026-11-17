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