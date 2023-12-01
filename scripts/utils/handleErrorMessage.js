export function handleErrorMessage(content) {
    const galleryContainer = document.querySelector(".recipes_section");
    const noResultsMessage = document.createElement('p');
    noResultsMessage.textContent = content;
    galleryContainer.appendChild(noResultsMessage);
}