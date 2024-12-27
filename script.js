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


