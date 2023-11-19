export function handleDropdown (titles, contents, chevrons) {
    // Ajout d'un gestionnaire d'événement pour chaque titre de dropdown
    titles.forEach((title, index) => {
        title.addEventListener("click", () => {
            contents[index].classList.toggle("active");
            chevrons[index].classList.toggle("active");
        });
    });
}