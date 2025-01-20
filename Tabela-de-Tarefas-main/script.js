const table = document.querySelector(".table");
const cardNewTask = document.querySelector(".container-card");
const inputTitle = document.querySelector("#input-title");
const inputDesc1 = document.querySelector("#input-descrip1");
const inputDesc2 = document.querySelector("#input-descrip2");


var listTask = [
    {"name":"Tarefa 1", "Descr1": "Descrição 1.1", "Descr2":"Descrição 1.2"},
    {"name":"Tarefa 2", "Descr1": "Descrição 2.1", "Descr2":"Descrição 2.2"},
    {"name":"Tarefa 3", "Descr1": "Descrição 3.1", "Descr2":"Descrição 3.2"},
]



function addTask(){
    getInputTexts();
    cleanInputTexts();
}

function getInputTexts(){
    var title = inputTitle.value;
    var desc1 = inputDesc1.value;
    var desc2 = inputDesc2.value;
    addNewTask(title, desc1,desc2);
}

function cleanInputTexts(){
    inputTitle.value = "";
    inputDesc1.value = "";
    inputDesc2.value = "";
}

function addNewTask(title, desc1, desc2){
    table.innerHTML += `           
    <div class="line">
    <div class="name">${title}</div>
    <div class="description1"> <text class="description-text">${desc1}</text> </div>
    <div class="description2"> <text class="description-text">${desc2}</text> </div>
    </div>`;
    addTaskInList(title, desc1,desc2);
    disapairTaskCard();
}

function addTaskInList(title, desc1, desc2){
    listTask.push({"name":`${title}`, "Descr1": `${desc1}`, "Descr2":`${desc2}`});
}

function addListTasks(){
    listTask.forEach(i => {
        addNewTask(i.name, i.Descr1, i.Descr2)
    //     table.innerHTML += `           
    // <div class="line">
    // <div class="name"> ${i.name}</div>
    // <div class="description1"> ${i.Descr1}</div>
    // <div class="description2"> ${i.Descr2}</div>
    // </div>`;
    });
}

function openTaskCard(){
    cardNewTask.classList.remove("invisible");
}

function disapairTaskCard(){
    cardNewTask.classList.add("invisible");
}

addListTasks();