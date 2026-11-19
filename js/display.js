export function renderRecipes(recipes) {
    const container = document.querySelector("#recipes");
    container.replaceChildren();

    recipes.forEach(recipe => {
        const card = document.createElement("article");
        card.className = "bg-white rounded-xl shadow-md overflow-hidden";

        const image = document.createElement("img");
        image.src = recipe.image || "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=600";
        image.alt = recipe.name;
        image.className = "w-full h-48 object-cover";

        image.onerror = () => {
            image.src = "https://placehold.co/600x400?text=Recipe";
        };

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

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Supprimer";
        deleteButton.className = "bg-red-500 text-white px-4 py-2 rounded-lg mt-3";
        deleteButton.dataset.id = recipe.id;

        content.append(title, cuisine, difficulty, time, deleteButton);
        card.append(image, content);
        container.appendChild(card);
    });
}

export function renderNoResults() {
    const container = document.querySelector("#recipes");
    container.replaceChildren();

    const message = document.createElement("p");
    message.textContent = "Aucune recette trouvée";

    const button = document.createElement("button");
    button.textContent = "Afficher toutes les recettes";
    button.id = "show-all";
    button.className = "bg-red-500 text-white px-4 py-2 rounded-lg mt-4";

    container.append(message, button);
}