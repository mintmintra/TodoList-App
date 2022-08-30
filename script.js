const taskInput = document.querySelector(".task-input input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".clear-btn"),
taskBox = document.querySelector(".task-box");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo(filter) {
    let li = "";
    if(todos) {
        todos.forEach((todo, id) => {
            li += `<li class="task">
            <label for="${id}">
                <input type="checkbox" id="${id}">
                <p>${todo.name}</p>
            </label>
            <div class="settings">
                <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                <ul class="task-menu">
                    <li><i class="uil uil-pen"></i>Edit</li>
                    <li><i class="uil uil-trash"></i>Delete</li>
                </ul>
            </div>
        </li>`;
        });
    }
    taskBox.innerHTML = li;
}


showTodo();

taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value.trim();
    if(e.key == "Enter" && userTask){
       if(!todos){
        todos = [];
       }
       taskInput.value = ""
       let taskInfo = {name: userTask, status: "pending"}
       todos.push(taskInfo)
       localStorage.setItem("todo-list", JSON.stringify(todos));
       showTodo();
    }
})