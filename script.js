
const todos = document.querySelectorAll('.todo');

for (const todo of todos) {
    todo.onclick = function () {
        confirm(`Valider "${todo.innerHTML}" ?`)
    }
}
