import { displayRecipeCards } from "../gallery.js";
import { setFilteredRecipes } from "./recipesState.js";
import { filterRecipesByValue } from "./search.js";

export function handleSearchInput() {
    // Écouteur d'événement pour le champ de recherche
    const searchInput = document.querySelector(".search_input");
    const searchBtn = document.querySelector(".search_button");

    // Au click du bouton "Enter"
    searchInput.addEventListener("keydown", e => {
        if (e.key === 'Enter') {
            const value = e.target.value.trim();
            handleSearch(value);
        }
    });
    // Au click du bouton rechercher de l'input
    searchBtn.addEventListener("click", () => {
        const value = searchInput.value.trim();
        handleSearch(value);
    });
    
    // Fonction recherche
    function handleSearch(value) {
        const filteredRecipes = filterRecipesByValue(value);
        displayRecipeCards(filteredRecipes);
        setFilteredRecipes(filteredRecipes);
        displayRecipeCards(filteredRecipes);
    }
}
