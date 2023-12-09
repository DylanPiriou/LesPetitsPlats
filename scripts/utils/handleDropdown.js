export function handleDropdown(titles, contents, chevrons) {
	// Ajout d'un gestionnaire d'événement pour chaque titre de dropdown
	titles.forEach((title, index) => {
		title.addEventListener("click", (event) => {
			// Empêche l'événement de se propager au document
			event.stopPropagation();

			// Ferme tous les autres dropdowns
			contents.forEach((content, i) => {
				if (i !== index && content.classList.contains("active")) {
					content.classList.remove("active");
					chevrons[i].classList.remove("active");
				}
			});

			// Ouvre ou ferme le dropdown cliqué
			contents[index].classList.toggle("active");
			chevrons[index].classList.toggle("active");
		});
	});

	// Ajout d'un gestionnaire d'événement pour chaque contenu de dropdown
	contents.forEach((content) => {
		content.addEventListener("click", (event) => {
			// Empêche l'événement de se propager au document
			event.stopPropagation();
		});
	});

	// Ajout d'un gestionnaire d'événement au document pour fermer les dropdowns
	document.addEventListener("click", () => {
		contents.forEach((content, index) => {
			if (content.classList.contains("active")) {
				content.classList.remove("active");
				chevrons[index].classList.remove("active");
			}
		});
	});
}
