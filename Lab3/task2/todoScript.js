let addTaskButton = document.getElementById("btn-add")
let todoList = document.getElementById("todo-list")
let taskNameInput = document.getElementById("taskNameInput")

taskNameInput.addEventListener('keypress', function (event) {
    if(event.key === "Enter" && taskNameInput.value.trim() !== "") {
        addTask()
    }
})

addTaskButton.addEventListener('click', function() {
    if(taskNameInput.value.trim() !== "") {
        addTask()
    }
})

function addTask() {
    let todo = document.createElement("div")
    let taskName = document.createElement("span")
    let checkBox = document.createElement("input")
    let deleteButton = document.createElement("button")
    let buttonImage = document.createElement("img")

    taskName.innerText = taskNameInput.value.trim()

    checkBox.type = "checkbox"
    checkBox.addEventListener('change', function () {
        if(this.checked) {
            taskName.style.textDecoration="line-through"
        } else {
            taskName.style.textDecoration="none"
        }
    })

    buttonImage.src = "img/red-trash-can-icon.png"
    deleteButton.type="button"
    deleteButton.classList.add("btn-delete")
    deleteButton.appendChild(buttonImage)
    deleteButton.addEventListener('click', function () {
        todoList.removeChild(this.parentElement)
    })

    todo.classList.add("todo-task")
    todo.appendChild(checkBox)
    todo.appendChild(taskName)
    todo.appendChild(deleteButton)

    taskNameInput.value = ""
    todoList.appendChild(todo)
}