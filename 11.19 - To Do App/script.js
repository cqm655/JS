let form = document.getElementById("form")
let select = document.getElementById("importancy")
let input = document.getElementById("task-input")
let tasksCon = document.querySelector(".tasks")

function addTask(event) {
    event.preventDefault()

    let selectVal = select.value // document.getElementById("importancy").value
    let inputVal = input.value

    input.value = "" // document.getElementById("importancy").value = ""

    // console.log(selectVal, inputVal)

    let taskDiv = document.createElement("div")
    taskDiv.classList.add("task")
    
    let task = document.createElement("span")
    task.classList.add("task-text")
    task.textContent = inputVal
    // console.log(task)

    let imp = document.createElement("span")
    if (selectVal === "important") {
        imp.classList = "important"
        imp.textContent = "!"
        // console.log(imp)
    } else if (selectVal === "normal") {
        imp.classList = "normal"
        imp.textContent = "n"
        // console.log(imp)
    } else if (selectVal === "insignificant") {
        imp.classList = "insignificant"
        imp.textContent = "i"
        // console.log(imp)
    }

    let impDiv = document.createElement("div")
    impDiv.classList = "imp-div"
    impDiv.appendChild(imp)

    let deleteBtn = document.createElement("button")
    deleteBtn.classList = "delete-btn"
    deleteBtn.textContent = "delete"
    // console.log(deleteBtn)

    taskDiv.append(impDiv, task, deleteBtn)
    // console.log(taskDiv)

    tasksCon.appendChild(taskDiv)

    // delete button action
    deleteBtn.addEventListener("click", () => {
        taskDiv.remove()
    })
}

form.addEventListener("submit", addTask)