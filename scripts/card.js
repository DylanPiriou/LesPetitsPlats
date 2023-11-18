export const card = (recipe) => {
    const recipesSection = document.querySelector(".recipes_section");

    // Création de la carte de recette
    const recipeCard = document.createElement("article");
    recipeCard.classList = "recipe_card";
    recipesSection.appendChild(recipeCard);

    const recipeDuration = document.createElement("span");
    recipeDuration.classList = "recipe_duration";
    recipeDuration.textContent = `${recipe.time} min`;
    recipeCard.appendChild(recipeDuration);

    // Ajout de l'image à la carte de recette
    const recipeImg = document.createElement("img");
    recipeImg.classList = "recipe_img";
    recipeImg.src = `assets/imgs/${recipe.image}`;
    recipeCard.appendChild(recipeImg);

    // Création et ajout du contenu de la recette
    const recipeContent = document.createElement("div");
    recipeContent.classList = "recipe_content";
    recipeCard.appendChild(recipeContent);

    // Ajout du titre de la recette au contenu
    const recipeTitle = document.createElement("h3");
    recipeTitle.classList = "recipe_title";
    recipeTitle.textContent = recipe.name;
    recipeContent.appendChild(recipeTitle);

    // Ajout de la description de la recette
    const recipeDescription = document.createElement("div");
    recipeDescription.classList = "recipe_description";
    recipeContent.appendChild(recipeDescription);

    // Titre de la description de la recette
    const recipeDescriptionTitle = document.createElement("h4");
    recipeDescriptionTitle.classList = "recipe_description_title";
    recipeDescriptionTitle.textContent = "Recette";
    recipeDescription.appendChild(recipeDescriptionTitle);

    // Texte de la description de la recette
    const recipeDescriptionText = document.createElement("p");
    recipeDescriptionText.classList = "recipe_description_txt";
    recipeDescriptionText.textContent = recipe.description;
    recipeDescription.appendChild(recipeDescriptionText);

    // Ajout des ingrédients
    const recipeIngredients = document.createElement("div");
    recipeIngredients.classList = "recipe_ingredients";
    recipeContent.appendChild(recipeIngredients);

    // Titre des ingrédients
    const recipeIngredientsTitle = document.createElement("h4");
    recipeIngredientsTitle.classList = "recipe_ingredients_title";
    recipeIngredientsTitle.textContent = "Ingrédients";
    recipeIngredients.appendChild(recipeIngredientsTitle);

    // Liste des ingrédients
    const recipeIngredientsList = document.createElement("div");
    recipeIngredientsList.classList = "recipe_ingredients_list";
    recipeIngredients.appendChild(recipeIngredientsList);

    // Génération dynamique des ingrédients (à partir de la liste d'ingrédients de la recette)
    recipe.ingredients.forEach(ingredient => {
        const ingredientItem = document.createElement("div");
        ingredientItem.classList = "recipe_ingredient";

        const ingredientTitle = document.createElement("h5");
        ingredientTitle.classList = "recipe_ingredient_title";
        ingredientTitle.textContent = ingredient.ingredient;
        ingredientItem.appendChild(ingredientTitle);

        const ingredientText = document.createElement("p");
        ingredientText.classList = "recipe_ingredient_txt";
        ingredientText.textContent = ingredient.quantity && ingredient.unit ? `${ingredient.quantity} ${ingredient.unit}` : ingredient.quantity;
        ingredientItem.appendChild(ingredientText);

        recipeIngredientsList.appendChild(ingredientItem);
    });

    console.log(recipe)
};
