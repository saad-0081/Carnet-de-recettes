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
export function validateDifficulty(difficulty) {
    if (difficulty === "") {
        return "Veuillez choisir une difficulté";
    }

    return "";
}

export function validateTime(time) {
    const minutes = Number(time);

    if (time === "" || minutes < 1 || minutes > 300) {
        return "Le temps  entre 1 et 300 minutes";
    }

    return "";
}