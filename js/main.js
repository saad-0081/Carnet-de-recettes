import { getRecipes, searchRecipes, addRecipe } from "./api.js";
import { renderRecipes, renderNoResults } from "./display.js";
import {
    validateName,
    validateCuisine,
    validateDifficulty,
    validateTime
} from "./validation.js";

let recipes = [];

async function init() {
    try {
        const data = await getRecipes();
        recipes = data.recipes;
        renderRecipes(recipes);
    } catch (error) {
        console.error("Erreur :", error.message);
    }
}

init();

const searchInput = document.querySelector("#search");

searchInput.addEventListener("input", async() => {
    try {
        const searchTerm = searchInput.value.trim();

        if (searchTerm === "") {
            const data = await getRecipes();
            recipes = data.recipes;
            renderRecipes(recipes);
            return;
        }

        const data = await searchRecipes(searchTerm);
        recipes = data.recipes;

        if (recipes.length === 0) {
            renderNoResults();
        } else {
            renderRecipes(recipes);
        }
    } catch (error) {
        console.error("Erreur :", error.message);
    }
});

document.addEventListener("click", async(event) => {
    if (event.target.id === "show-all") {
        const data = await getRecipes();
        recipes = data.recipes;
        renderRecipes(recipes);
        searchInput.value = "";
    }
});

const form = document.querySelector("#recipe-form");
const submitButton = document.querySelector("#submit-btn");

form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const cuisine = document.querySelector("#cuisine").value.trim();
    const difficulty = document.querySelector("#difficulty").value;
    const time = document.querySelector("#prepTimeMinutes").value;

    const errors = [
        validateName(name),
        validateCuisine(cuisine),
        validateDifficulty(difficulty),
        validateTime(time)
    ];

    document.querySelector("#name-error").textContent = errors[0];
    document.querySelector("#cuisine-error").textContent = errors[1];
    document.querySelector("#difficulty-error").textContent = errors[2];
    document.querySelector("#time-error").textContent = errors[3];

    if (errors.some(error => error !== "")) {
        return;
    }

    const recipeData = {
        name,
        cuisine,
        difficulty,
        prepTimeMinutes: Number(time)
    };

    try {
        submitButton.disabled = true;
        submitButton.textContent = "Envoi en cours...";

        const newRecipe = await addRecipe(recipeData);

        recipes.unshift(newRecipe);
        renderRecipes(recipes);

        document.querySelector("#success-message").textContent =
            "Recette ajoutée avec succès !";

        form.reset();

    } catch (error) {
        console.error("Erreur :", error.message);
    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Ajouter la recette";
    }
});