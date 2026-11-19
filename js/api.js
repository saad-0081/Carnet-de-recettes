import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000
});

export async function getRecipes() {
    const response = await api.get("/recipes?limit=12");
    return response.data;
}
export async function searchRecipes(keyword) {
    const response = await api.get("/recipes/search", {
        params: {
            q: keyword
        }
    });

    return response.data;
}
export async function addRecipe(recipeData) {
    const response = await api.post("/recipes/add", recipeData);
    return response.data;
}
export async function deleteRecipe(id) {
    const response = await api.delete(`/recipes/${id}`);
    return response.data;
}