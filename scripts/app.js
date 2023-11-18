import { recipes } from "./recipes.js";

// Sélection de tous les éléments de titre et de contenu des dropdowns
const dropdownTitles = document.querySelectorAll(".dropdown_title-section");
const dropdownContents = document.querySelectorAll(".dropdown_content");
const chevrons = document.querySelectorAll(".dropdown_title-chevron");
const dropdownInputs = document.querySelectorAll(".dropdown_search-input");

// Ajout d'un gestionnaire d'événement pour chaque titre de dropdown
dropdownTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        dropdownContents[index].classList.toggle("active");
        chevrons[index].classList.toggle("active");
    });
});

dropdownInputs.forEach(input => {
    input.addEventListener("keydown", (e) => {
        const search = e.target.value;
        const results = uniqueIngredients.filter(ingredient => ingredient.toLowerCase().includes(search));
        if(e.key === "Enter"){
            console.log(results);
        }
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


// Liste d'items par défaut
const dropdownList = document.getElementById("ingredients_list");
const appareilsList = document.getElementById("appareils_list");
const ustensilesList = document.getElementById("ustensiles_list");
for ( const ingredient of firstIngredients ) {
    const li = document.createElement("li");
    li.classList = "dropdown_item";
    li.textContent = ingredient;
    dropdownList.appendChild(li);
}
for ( const appliance of firstAppliances ) {
    const li = document.createElement("li");
    li.classList = "dropdown_item";
    li.textContent = appliance;
    appareilsList.appendChild(li);
}
for ( const ustensil of firstUstensils ) {
    const li = document.createElement("li");
    li.classList = "dropdown_item";
    li.textContent = ustensil;
    ustensilesList.appendChild(li);
}
