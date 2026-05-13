const input = document.querySelector("input");
const todoList = document.querySelector(".todo-list");

input.addEventListener("keydown", function (event) {

    // Vérifie si on appuie sur Entrée
    if (event.key === "Enter") {

        // Récupère le texte du champ input
        const taskText = input.value.trim();

        todoList.innerHTML += `<li><input type="checkbox" class="chekbox"> ${taskText}</li>`
        // Vide le champ input
        input.value = "";

    }
});