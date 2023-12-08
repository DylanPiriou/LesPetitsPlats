import { recipes } from "./recipes.js";

// Fonction recherche 2
export function filterRecipesByValue(value) {
    const filteredRecipes = [];

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];
        const lowerCaseValue = value.toLowerCase();

        let nameMatch = false;
        let ingredientsMatch = false;
        let ustensilsMatch = false;
        let applianceMatch = false;

        // Vérifier si la valeur est présente dans le nom de la recette
        if (recipe.name.toLowerCase().includes(lowerCaseValue)) {
            nameMatch = true;
        }

        // Vérifier si la valeur est présente dans les ingrédients de la recette
        for (let j = 0; j < recipe.ingredients.length; j++) {
            const ingredient = recipe.ingredients[j].ingredient;
            if (ingredient.toLowerCase().includes(lowerCaseValue)) {
                ingredientsMatch = true;
                break;
            }
        }

        // Vérifier si la valeur est présente dans les ustensiles de la recette
        for (let k = 0; k < recipe.ustensils.length; k++) {
            const ustensil = recipe.ustensils[k];
            if (ustensil.toLowerCase().includes(lowerCaseValue)) {
                ustensilsMatch = true;
                break;
            }
        }

        // Vérifier si la valeur est présente dans la propriété appliance de la recette
        if (recipe.appliance.toLowerCase().includes(lowerCaseValue)) {
            applianceMatch = true;
        }

        // Retourner true si la valeur est présente dans au moins une propriété de la recette
        if (nameMatch || ingredientsMatch || ustensilsMatch || applianceMatch) {
            filteredRecipes.push(recipe);
        }
    }

    return filteredRecipes;
}
