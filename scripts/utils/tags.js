import { handleUpdateWithDropdown } from "../gallery.js";
import { filterRecipesByValue } from "./search.js";

// Créer un tableau pour stocker les tags sélectionnés
let selectedTags = [];

// Logique pour ajouter/supprimer des tags
export function handleTags(itemList) {
    const tagsContainer = document.querySelectorAll(".tags");
    itemList.addEventListener("click", (e) => {
        const content = e.target.textContent;

        // Vérifier si le tag est déjà ajouté
        const isAlreadyAdded = selectedTags.includes(content);
        if (isAlreadyAdded) return;

        // Création du tag
        const tag = document.createElement("div");
        tag.classList = "tag";
        tag.textContent = content;
        tagsContainer[0].appendChild(tag);
        const closeBtn = document.createElement("img");
        closeBtn.classList = "close_btn";
        closeBtn.src = "assets/svg/close.svg";
        tag.appendChild(closeBtn);

        // Ajouter le tag au tableau selectedTags
        selectedTags.push(content);
        console.log(selectedTags);
        handleUpdateWithDropdown(selectedTags); // Mettre à jour avec les tags actuels

        closeBtn.addEventListener("click", (e) => {
            const removedTag = e.target.parentNode.textContent;
            const index = selectedTags.indexOf(removedTag);
            if (index !== -1) {
                selectedTags.splice(index, 1); // Supprimer le tag du tableau selectedTags
                handleUpdateWithDropdown(selectedTags); // Mettre à jour avec les tags actuels après suppression
            }
            e.target.parentNode.remove();
        });
    });
}
