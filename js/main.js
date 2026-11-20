import {
    getRecipes,
    searchRecipes,
    addRecipe,
    deleteRecipe
} from "./api.js";
import {
    renderRecipes,
    renderNoResults
} from "./display.js";

import {
    validateName,
    validateCuisine,
    validateDifficulty,
    validateTime
} from "./validation.js";

let recipes = [];
let createdRecipeIds = [];
let retryAction = getRecipes;

const loading = document.querySelector("#loading");
const errorMessage = document.querySelector("#error-message");
const errorText = document.querySelector("#error-text");
const searchInput = document.querySelector("#search");
const form = document.querySelector("#recipe-form");
const submitButton = document.querySelector("#submit-btn");

// Afficher une erreur
function showError(error) {
    if (!error.response) {
        errorText.textContent =
            "Impossible de contacter le serveur.  deconnexion.";
    } else if (error.response.status === 404) {
        errorText.textContent = "Ressource introuvable (404).";
    } else if (error.response.status === 500) {
        errorText.textContent = "Erreur interne du serveur (500).";
    } else {
        errorText.textContent =
            "Une erreur inattendue est survenue.";
    }

    errorMessage.classList.remove("hidden");
}

async function loadRecipes(request = getRecipes) {
    retryAction = request;

    loading.classList.remove("hidden");
    errorMessage.classList.add("hidden");

    try {
        const data = await request();

        recipes = data.recipes;

        if (recipes.length === 0) {
            renderNoResults();
        } else {
            renderRecipes(recipes);
        }

    } catch (error) {
        showError(error);

    } finally {
        loading.classList.add("hidden");
    }
}

function init() {
    loadRecipes();
}

init();

// Recherche
searchInput.addEventListener("input", async() => {
    const keyword = searchInput.value.trim();

    if (keyword === "") {
        loadRecipes(getRecipes);
    } else {
        loadRecipes(() => searchRecipes(keyword));
    }
});

// Afficher toutes les recettes
document.addEventListener("click", event => {
    if (event.target.id === "show-all") {
        searchInput.value = "";
        loadRecipes(getRecipes);
    }
});

// Ajouter une recette
form.addEventListener("submit", async event => {
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

        createdRecipeIds.push(newRecipe.id);

        recipes.unshift(newRecipe);
        renderRecipes(recipes);

        document.querySelector("#success-message").textContent =
            "Recette ajoutée avec succès !";

        form.reset();

    } catch (error) {
        showError(error);

    } finally {
        submitButton.disabled = false;
        submitButton.textContent = "Ajouter la recette";
    }
});

// Supprimer une recette
document.addEventListener("click", async event => {
    const button = event.target.closest("button[data-id]");

    if (!button) {
        return;
    }

    const confirmed = confirm(
        "Voulez-vous vraiment supprimer cette recette ?"
    );

    if (!confirmed) {
        return;
    }

    const id = Number(button.dataset.id);

    try {
        if (!createdRecipeIds.includes(id)) {
            await deleteRecipe(id);
        }

        recipes = recipes.filter(recipe => recipe.id !== id);

        createdRecipeIds = createdRecipeIds.filter(
            recipeId => recipeId !== id
        );

        renderRecipes(recipes);

        alert("Recette supprimée avec succès !");

    } catch (error) {
        showError(error);
            await deleteRecipe(id);

            recipes = recipes.filter(recipe => recipe.id !== id);
            renderRecipes(recipes);

            alert("Recette supprimée avec succès !");
        } catch (error) {
            console.error("Erreur :", error.message);
            alert("Erreur lors de la suppression !");
        }
    }
});

// Réessayer erreur
document.querySelector("#retry-btn").addEventListener("click", () => {
    loadRecipes(retryAction);
});