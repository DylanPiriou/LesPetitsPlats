// Logique pour ajouter/supprimer des tags
export function handleTags(li) {
    const tagsContainer = document.querySelectorAll(".tags");
    li.addEventListener("click", (e) => {
        const content = e.target.textContent;
        const tag = document.createElement("div");
        tag.classList = "tag";
        tag.textContent = content;
        tagsContainer[0].appendChild(tag);
        const closeBtn = document.createElement("img");
        closeBtn.classList = "close_btn";
        closeBtn.src = "assets/svg/close.svg";
        tag.appendChild(closeBtn);

        closeBtn.addEventListener("click", (e) => {
            e.target.parentNode.remove();
        });
    })
}