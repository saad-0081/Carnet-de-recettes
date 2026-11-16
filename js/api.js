import axios from "axios";

const api = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 10000
});

export async function getRecipes() {
    const response = await api.get("/recipes?limit=12");
    return response.data;
}