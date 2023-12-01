import { handleDropdown } from "./utils/handleDropdown.js";
import { uniqueAppliances, uniqueIngredients, uniqueUstensils } from "./utils/formattedData.js";
import { handleTags } from "./utils/tags.js";
import { handleDefaultCards, updateRecipeCount } from "./gallery.js";
import { handleSearchInput } from "./utils/searchInputEvents.js";

const dropdownTitles = document.querySelectorAll(".dropdown_title-section");
const dropdownContents = document.querySelectorAll(".dropdown_content");
const chevrons = document.querySelectorAll(".dropdown_title-chevron");
const dropdownInputs = document.querySelectorAll(".dropdown_search-input");
const dropdownList = document.getElementById("ingredients_list");
const appareilsList = document.getElementById("appareils_list");
const ustensilesList = document.getElementById("ustensiles_list");

// Charger tous les items au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
    handleDefaultItems();
    handleDefaultCards();
    updateRecipeCount();
});


handleDropdown(dropdownTitles, dropdownContents, chevrons);

// Écouteurs d'événements pour chaque dropdown
dropdownInputs.forEach(input => {
    input.addEventListener("keydown", (e) => {
        const search = e.target.value.toLowerCase().trim();

        if (search === "") {
            handleDefaultItems();
        }

        if (e.key === "Enter") {
            if (e.target.id === "ingredientsInput") {
                filterAndUpdateDropdown(search, uniqueIngredients, dropdownList);
            } else if (e.target.id === "appliancesInput") {
                filterAndUpdateDropdown(search, uniqueAppliances, appareilsList);
            } else if (e.target.id === "ustensilsInput") {
                filterAndUpdateDropdown(search, uniqueUstensils, ustensilesList);
            }
        }
    });
});

// Fonction pour filtrer les éléments et mettre à jour le dropdown
function filterAndUpdateDropdown(search, itemList, dropdownType) {
    const filteredItems = itemList.filter(item => item.toLowerCase().includes(search));
    if (filteredItems.length > 0) {
        handleSearchResults(filteredItems, dropdownType);
    } else {
        handleDefaultItems();
    }
}

function handleSearchResults(results, listElement) {
    // Effacer les anciens résultats
    listElement.innerHTML = "";

    // Afficher les nouveaux résultats de la recherche
    results.forEach(result => {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = result;
        listElement.appendChild(li);
        handleTags(li);
    });
}

// Liste d'items par défaut
function handleDefaultItems() {
    for (const ingredient of uniqueIngredients) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = ingredient;
        dropdownList.appendChild(li);
        handleTags(li);
    }
    for (const appliance of uniqueAppliances) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = appliance;
        appareilsList.appendChild(li);
        handleTags(li);
    }
    for (const ustensil of uniqueUstensils) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = ustensil;
        ustensilesList.appendChild(li);
        handleTags(li);
    }
}

// Appel de la fonction qui gère les events liés à la barre de recherche
handleSearchInput();

