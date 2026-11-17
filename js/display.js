export function renderRecipes(recipes) {
    const container = document.querySelector("#recipes");

    container.replaceChildren();

    recipes.forEach(recipe => {
        const card = document.createElement("article");
        card.className = "bg-white rounded-xl shadow-md overflow-hidden";

        const image = document.createElement("img");
        image.src = recipe.image;
        image.alt = recipe.name;
        image.className = "w-full h-48 object-cover";

        const content = document.createElement("div");
        content.className = "p-4";

        const title = document.createElement("h3");
        title.textContent = recipe.name;
        title.className = "text-xl font-bold text-gray-800";

        const cuisine = document.createElement("p");
        cuisine.textContent = `Cuisine : ${recipe.cuisine}`;

        const difficulty = document.createElement("p");
        difficulty.textContent = `Difficulté : ${recipe.difficulty}`;

        const time = document.createElement("p");
        time.textContent = `Préparation : ${recipe.prepTimeMinutes} min`;

        content.append(title, cuisine, difficulty, time);
        card.append(image, content);
        container.appendChild(card);
    });
}
export function renderNoResults() {
    const container = document.querySelector("#recipes");

    container.replaceChildren();

    const message = document.createElement("p");
    message.textContent = "Aucune recette trouvée";

    container.appendChild(message);
}