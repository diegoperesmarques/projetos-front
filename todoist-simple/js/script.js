//Seleção de elementos 
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


//Eventos 
todoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    console.log("Enviou o formulário");

    const inputValue = todoInput.value;

    if (inputValue) {
        console.log(inputValue);
    }

});