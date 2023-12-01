import { recipes } from "./recipes.js";

// Fonction recherche 1
export function filterRecipesByValue(value) {
    console.log(value);

    const filteredRecipes = recipes.filter(recipe => {
        const lowerCaseValue = value.toLowerCase();

        // Vérifier si la valeur est présente dans le nom de la recette
        const nameMatch = recipe.name.toLowerCase().includes(lowerCaseValue);

        // Vérifier si la valeur est présente dans les ingrédients de la recette
        const ingredientsMatch = recipe.ingredients.some(ingredient =>
            ingredient.ingredient.toLowerCase().includes(lowerCaseValue)
        );

        // Vérifier si la valeur est présente dans les ustensiles de la recette
        const ustensilsMatch = recipe.ustensils.some(ustensil =>
            ustensil.toLowerCase().includes(lowerCaseValue)
        );

        // Vérifier si la valeur est présente dans la propriété appliance de la recette
        const applianceMatch = recipe.appliance.toLowerCase().includes(lowerCaseValue);

        // Retourner true si la valeur est présente dans au moins une propriété de la recette
        return nameMatch || ingredientsMatch || ustensilsMatch || applianceMatch;
    });

        return filteredRecipes;
}
