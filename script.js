let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.getElementById("deleteButton");

document.addEventListener("DOMContentLoaded", function() {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevents the default action of Enter key (like form submission)
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteAllTasks);

    displayTask(); 
});

function addTask() {
    const newTask = todoInput.value.trim(); 
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false
        });
        todoInput.value = ""; // Clear the input field after adding the task
        saveToLocalStorage(); // Save the updated tasks to localStorage
        displayTask(); // Update the UI to show the new task
    }
}

function deleteAllTasks() {
}

function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo)); // Store the updated tasks in localStorage
}


function deleteTask(index) {
    todo.splice(index, 1); // Remove the task at the specified index
    saveToLocalStorage(); // Save the updated tasks to localStorage
    renderTasks(); // Update the UI after deletion
}
