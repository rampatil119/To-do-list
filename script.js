const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');




const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("write some text")
    }


    const li = document.createElement('li')
    const p = document.createElement('p')
    p.innerHTML = inputText;
    li.appendChild(p)
    todoList.appendChild(li)

    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "Remove";
    deleteBtn.classList.add('btn', 'deleteBtn')
    li.appendChild(deleteBtn)


    const editBtn = document.createElement('editBtn')
    editBtn.innerHTML = "Edit"
    editBtn.classList.add('btn', 'editBtn')
    li.appendChild(editBtn)


    inputBox.value = ""

    saveLocalTodo(inputText)
}
const update = (e) => {
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement)
    }
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus()
        addBtn.value = "edit"

    }
}

const saveLocalTodo=(todo)=>{
    let todos;
    if (localStorage.getItem("todos")===null) {
        todo=[];
    }
    else{
        todos.JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
}

addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', update)



// const inputBox = document.getElementById('inputBox');
// const button = document.getElementById('button');
// const todo = document.getElementById('todo');

// // 🚀 Load tasks from Local Storage when page loads
// document.addEventListener("DOMContentLoaded", loadTasks);

// function addTodo() {
//     const inputText = inputBox.value.trim(); 
//     if (inputText.length <= 0) {
//         alert('Write something here');
//         return;
//     }

//     createTaskElement(inputText); // Create and display task
//     saveToLocalStorage(inputText); // Save to Local Storage

//     inputBox.value = ""; // Clear input field
// }

// function createTaskElement(taskText) {
//     const li = document.createElement('li');
//     const p = document.createElement('p');
//     p.innerHTML = taskText;
//     li.appendChild(p);
//     todo.appendChild(li);

//     const deleteBtn = document.createElement('button');
//     deleteBtn.innerHTML = "Remove";
//     deleteBtn.classList.add('deleteBtn');
//     deleteBtn.addEventListener("click", () => {
//         li.remove(); 
//         removeFromLocalStorage(taskText);
//     });
//     li.appendChild(deleteBtn);

//     const editbtn = document.createElement('button');
//     editbtn.innerHTML = "Edit";
//     editbtn.addEventListener('click', () => editTask(p, editbtn));
//     li.appendChild(editbtn);
// }

// function editTask(p, editbtn) {
//     if (editbtn.innerHTML == "Edit") {
//         p.contentEditable = true;
//         p.focus();
//         editbtn.innerHTML = "Save";
//     } else {
//         p.contentEditable = false;
//         editbtn.innerHTML = "Edit";
//         updateLocalStorage();
//     }
// }

// // 📌 Save task to Local Storage
// function saveToLocalStorage(taskText) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(taskText);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // 📌 Remove task from Local Storage
// function removeFromLocalStorage(taskText) {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks = tasks.filter(task => task !== taskText);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// // 📌 Load tasks from Local Storage
// function loadTasks() {
//     let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.forEach(task => createTaskElement(task));
// }

// // 📌 Update Local Storage when tasks are edited
// function updateLocalStorage() {
//     let tasks = [];
//     document.querySelectorAll("#todo p").forEach(p => tasks.push(p.innerHTML));
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// button.addEventListener('click', addTodo);
