import { card } from "./card.js";
import { handleErrorMessage } from "./utils/handleErrorMessage.js";
import { recipes } from "./utils/recipes.js";
import { getFilteredRecipes } from "./utils/recipesState.js";

// Création des cartes
const galleryContainer = document.querySelector(".recipes_section");
let displayedRecipes = []; // Tableau pour stocker les cartes affichées

// Fonction pour créer et afficher une carte de recette
export function displayRecipeCard(recipe) {
	const recipeCard = card(recipe);
	galleryContainer.appendChild(recipeCard);
	displayedRecipes.push(recipeCard); // Ajoute la carte à la liste des recettes affichées
}

// Affichage des cartes de recette
export function displayRecipeCards(recipesToDisplay) {
	const galleryContainer = document.querySelector(".recipes_section");
	galleryContainer.innerHTML = "";
	displayedRecipes = [];
	if (recipesToDisplay.length > 0) {
		recipesToDisplay.forEach((recipe) => {
			displayRecipeCard(recipe);
		});
		updateRecipeCount();
	} else {
		handleErrorMessage("Pas de résultats. Veuillez réessayer.");
		updateRecipeCount();
	}
}

// Affichage les cartes au chargement initial
export function handleDefaultCards() {
	displayRecipeCards(recipes);
}

// Fonction pour mettre à jour le compteur de recettes
export function updateRecipeCount() {
	const numberRecipes = document.querySelector(".txt_filter");
	numberRecipes.textContent = `${displayedRecipes.length} recettes`;
}

export function handleUpdateWithDropdown(content) {
	const updatedRecipes = getFilteredRecipes();

	const filteredRecipes =
		updatedRecipes.length !== 0
			? updatedRecipes.filter((recipe) => {
					// Vérifie si tous les éléments de content sont présents dans la recette
					return content.every((tag) => {
						const lowerCaseTag = tag.toLowerCase();

						// Vérifie si l'élément de content est présent dans les ingrédients de la recette
						const ingredientMatch = recipe.ingredients.some((ingredient) =>
							ingredient.ingredient.toLowerCase().includes(lowerCaseTag)
						);

						// Vérifie si l'élément de content est présent dans les ustensiles de la recette
						const ustensilsMatch = recipe.ustensils.some((ustensil) =>
							ustensil.toLowerCase().includes(lowerCaseTag)
						);

						// Vérifie si l'élément de content est égal à la propriété appliance de la recette
						const applianceMatch = recipe.appliance
							.toLowerCase()
							.includes(lowerCaseTag);

						// Retourne true si l'élément de content est présent dans au moins une catégorie de la recette
						return ingredientMatch || ustensilsMatch || applianceMatch;
					});
			  })
			: recipes.filter((recipe) => {
					// Vérifie si tous les éléments de content sont présents dans la recette
					return content.every((tag) => {
						const lowerCaseTag = tag.toLowerCase();

						// Vérifie si l'élément de content est présent dans les ingrédients de la recette
						const ingredientMatch = recipe.ingredients.some((ingredient) =>
							ingredient.ingredient.toLowerCase().includes(lowerCaseTag)
						);

						// Vérifie si l'élément de content est présent dans les ustensiles de la recette
						const ustensilsMatch = recipe.ustensils.some((ustensil) =>
							ustensil.toLowerCase().includes(lowerCaseTag)
						);

						// Vérifie si l'élément de content est égal à la propriété appliance de la recette
						const applianceMatch = recipe.appliance
							.toLowerCase()
							.includes(lowerCaseTag);

						// Retourne true si l'élément de content est présent dans au moins une catégorie de la recette
						return ingredientMatch || ustensilsMatch || applianceMatch;
					});
			  });

	displayRecipeCards(filteredRecipes);
}
