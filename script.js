const taskInput = document.querySelector(".task-input input")
taskInput.addEventListener("keyup", e => {
    let userTask = taskInput.value;
    if(e.key == "Enter"){
        console.log(userTask)
    }
})