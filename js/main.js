import { getRecipes } from "./api.js";
import { renderRecipes } from "./display.js";

async function init() {
    try {
        const data = await getRecipes();
        renderRecipes(data.recipes);
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

init();