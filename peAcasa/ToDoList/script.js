$(".one").hide()
$(".two").hide()
$(".three").hide()

let tasks =JSON.parse(localStorage.getItem("tasks")) || [];

//raspunde de adaugarea unui task
const addTaskBtn = document.getElementById("creator");

const allTasksDiv = document.querySelector(".all-tasks");
const sortByTime = document.getElementById("sort-by-time");
const select = document.getElementById("importancy");

//functia de salvare in local storage
function addToLS(arr){
    localStorage.setItem("tasks", arr);
}

function createHTMLElement(item, selectedDiv) {
    let tasksArr =  localStorage.getItem("tasks");
    //citirea elementelor din tablou
   
        let taskDiv = document.createElement("div");
        let taskP = document.createElement("p");
        let taskImp = document.createElement("span");
        let taskDate = document.createElement("span") 
        let btn = document.createElement("button");
        
        taskDiv.classList = "task";
        taskP.classList = "task-text";
        taskImp.classList = "task-imp";
        taskDate.classList = "task-date";
        btn.classList = "btn-delete";

        taskP.textContent = item.text;
        taskImp.textContent = item.imp;
        taskDate.textContent = item.date;
        btn.textContent = "Delete";

        taskDiv.append( taskP, taskImp, taskDate, btn)
    
        selectedDiv.appendChild(taskDiv);
    
}


//functie de adaugare a inf salvate pe localstorage
function showTasks(arr){
    arr.slice().reverse().forEach(item => {
        createHTMLElement(item, allTasksDiv);
    })
}


function createTask(){
allTasksDiv.innerHTML ="";

    let taskText = document.getElementById("task-input").value;
    let taskImp = document.getElementById("importancy").value;
    let date = new Date();
    let h = date.getHours() + 2;
    let m = date.getMinutes();
    let d = date.getDate();
    let mon = date.getMonth() + 1;
    let y = date.getFullYear();
    let currentDate = new Date(`${y}-${mon}-${d} ${h}:${m}`)

    let task = {
        "text": taskText, 
        "imp": taskImp,
        "date": date.toLocaleString(currentDate)
    };
   //adaugam, prin jquery
    tasks.push(task);


    //apelarea functiei care salveaza in localstorage
    addToLS(tasks);
    // pentru ca sa fie clar ce am scris, transformam in obiect
    addToLS(JSON.stringify(tasks));

    tasks = JSON.parse(localStorage.getItem("tasks"));

    //apelarea functiei de salvare
    showTasks(tasks);
    
}

function sortByDate() {
    tasks.sort((a,b) => {
        return new Date(b.date) - new Date(a.date);
    })
    console.log(tasks);
}

showTasks(tasks);

function showByOption() {
    let selectVal = select.value;
    
    let div1 = document.querySelector(".tasks-one");
    let div2 = document.querySelector(".tasks-two");
    let div3 = document.querySelector(".tasks-three");
   
    // tasks.forEach(task => {
    //     console.log(task)
    // })

    let impTasks = tasks.filter(task =>  task.imp === '1');
    let normalTasks = tasks.filter(task => task.imp === '2');
    let easyTasks = tasks.filter(task => task.imp === '3');

    if(select.value === '1') {
        $(".all").hide();
        $(".one").show();
        $(".two").hide();
        $(".three").hide();
        div1.innerHTML = "";

        impTasks.forEach(task => {
            createHTMLElement(task, div1);
        })
    }else if(select.value === '2'){
        $(".all").hide();
        $(".one").hide();
        $(".two").show();
        $(".three").hide();
        div2.innerHTML = "";
        normalTasks.forEach(task => {
            createHTMLElement(task, div2);
        })
    }else if (select.value === '3'){
        $(".all").hide();
        $(".one").hide();
        $(".two").hide();
        $(".three").show();
        div3.innerHTML = "";
        normalTasks.forEach(task => {
            createHTMLElement(task, div3);
        }
    )} else if (select.value === '0'){
        $(".all").show();
        $(".one").hide();
        $(".two").hide();
        $(".three").hide();
    }

   
        


}

addTaskBtn.addEventListener("click",createTask);
sortByTime.addEventListener("click", sortByDate);
select.addEventListener("change",showByOption);
