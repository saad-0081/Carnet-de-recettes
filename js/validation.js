export function validateName(name) {
    if (name.trim().length < 3) {
        return "Le nom doit contenir au moins 3 caractères";
    }

    if (name.trim().length > 60) {
        return "Le nom ne doit pas dépasser 60 caractères";
    }

    return "";
}

export function validateCuisine(cuisine) {
    if (cuisine.trim() === "") {
        return "La cuisine est obligatoire";
    }

    return "";
}