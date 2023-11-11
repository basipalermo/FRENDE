let input = document.getElementById("taskInput");
let addButton = document.querySelector("addTaskButton"); 
const lista = document.getElementById("taskList");

function aggiungiUnaTask() { 
  if (input.value === "") { 
    alert("Cosa stai dimenticando? Di scriverlo!");
  } else {
    const li = document.createElement("li");
    li.innerText = input.value;
    document.getElementById("taskList").appendChild(li);
  }
}

addTaskButton.addEventListener("click", aggiungiUnaTask);