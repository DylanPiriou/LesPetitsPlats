import { displayRecipeCards, handleDefaultCards } from "../gallery.js";
import { setFilteredRecipes } from "./recipesState.js";
import { filterRecipesByValue } from "./search.js";
import { deleteTags } from "./tags.js";

export function handleSearchInput() {
    // Écouteur d'événement pour le champ de recherche
    const searchInput = document.querySelector(".search_input");
    const searchBtn = document.querySelector(".search_button");

    // Au changement de valeur de l'input (supérieur ou égale à 3)
    searchInput.addEventListener("input", e => {
        const value = e.target.value.trim();
        if(value.length >= 3) {
            handleSearch(value);
        } else {
            deleteTags();
            handleDefaultCards();
        }
    })

    // Fonction recherche
    function handleSearch(value) {
        const filteredRecipes = filterRecipesByValue(value);
        displayRecipeCards(filteredRecipes);
        setFilteredRecipes(filteredRecipes);
        displayRecipeCards(filteredRecipes);
    }
}
