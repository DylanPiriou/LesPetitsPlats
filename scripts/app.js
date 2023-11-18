import { card } from "./card.js";
import { recipes } from "./recipes.js";
import { handleTags } from "./tags.js";

const dropdownTitles = document.querySelectorAll(".dropdown_title-section");
const dropdownContents = document.querySelectorAll(".dropdown_content");
const chevrons = document.querySelectorAll(".dropdown_title-chevron");
const dropdownInputs = document.querySelectorAll(".dropdown_search-input");
const dropdownList = document.getElementById("ingredients_list");
const appareilsList = document.getElementById("appareils_list");
const ustensilesList = document.getElementById("ustensiles_list");

// Ajout d'un gestionnaire d'événement pour chaque titre de dropdown
dropdownTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        dropdownContents[index].classList.toggle("active");
        chevrons[index].classList.toggle("active");
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

function handleSearchResults(results, listElement) {
    // Effacer les anciens résultats
    listElement.innerHTML = "";

    // Afficher les nouveaux résultats de la recherche
    results.forEach(result => {
        console.log(result)
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = result;
        listElement.appendChild(li);
        handleTags(li);
    });
}

// Liste d'items par défaut
function handleDefaultItems() {
    for (const ingredient of firstIngredients) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = ingredient;
        dropdownList.appendChild(li);
        handleTags(li);
    }
    for (const appliance of firstAppliances) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = appliance;
        appareilsList.appendChild(li);
        handleTags(li);
    }
    for (const ustensil of firstUstensils) {
        const li = document.createElement("li");
        li.classList = "dropdown_item";
        li.textContent = ustensil;
        ustensilesList.appendChild(li);
        handleTags(li);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    handleDefaultItems();
    const dropdonwItem = document.querySelectorAll(".dropdown_item");
    console.log(dropdonwItem)
    dropdonwItem && dropdonwItem.forEach(item => {
        item.addEventListener("click", () => {
            console.log("click")
        })
    })
})

// Gestion des données issues des recettes
// Extraction des appareils uniques avec la première lettre en majuscule
const uniqueAppliances = Array.from(new Set(recipes.map(recipe => {
    const appliance = recipe.appliance.toLowerCase();
    return appliance.charAt(0).toUpperCase() + appliance.slice(1);
})));
console.log(uniqueAppliances);
const firstAppliances = uniqueAppliances.slice(0, 6);

// Extraction des ingrédients uniques avec la première lettre en majuscule
const allIngredients = recipes.flatMap(recipe => recipe.ingredients.map(x => x.ingredient.toLowerCase()));
const uniqueIngredients = Array.from(new Set(allIngredients)).map(ingredient => ingredient.charAt(0).toUpperCase() + ingredient.slice(1));
console.log(uniqueIngredients);
const firstIngredients = uniqueIngredients.slice(0, 6);

// Extraction des ustensiles uniques avec la première lettre en majuscule
const uniqueUstensils = Array.from(new Set(recipes.flatMap(recipe => recipe.ustensils.map(ustensil => ustensil.toLowerCase())))).map(ustensil => ustensil.charAt(0).toUpperCase() + ustensil.slice(1));
console.log(uniqueUstensils);
const firstUstensils = uniqueUstensils.slice(0, 6);

// Créartion des cartes
const gallery = recipes.slice(0, 10).map(recipe => {
    card(recipe);
});
