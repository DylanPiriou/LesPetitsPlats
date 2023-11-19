import { recipes } from "./recipes.js";

// Gestion des données issues des recettes
// Fonction pour obtenir des éléments uniques avec la première lettre en majuscule
function getUniqueCapitalizedElements(array) {
    return Array.from(new Set(array.flatMap(item => item.toLowerCase())))
        .map(element => element.charAt(0).toUpperCase() + element.slice(1));
}

// Utilisation de la fonction pour les appareils
export const uniqueAppliances = getUniqueCapitalizedElements(recipes.map(recipe => recipe.appliance));

// Utilisation de la fonction pour les ingrédients
export const uniqueIngredients = getUniqueCapitalizedElements(recipes.flatMap(recipe => recipe.ingredients.map(x => x.ingredient)));

// Utilisation de la fonction pour les ustensiles
export const uniqueUstensils = getUniqueCapitalizedElements(recipes.flatMap(recipe => recipe.ustensils));
