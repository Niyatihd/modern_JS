// Define UI variables
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//load All Event Listeners
loadEventListeners();

//load All Event Listeners function
function loadEventListeners() {
  form.addEventListener("submit", addTask);
}

//addTask function
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add Task");
  }

  // Create li element
  const li = document.createElement("li");

  // Add Class
  li.className = "collection-item";

  // Create textNode and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // Create link element
  const link = document.createElement("a");
  // Add Class
  link.className = "delete-item secondary-content";
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  //Append link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear input
  taskInput.value = "";

  e.preventDefault();
}
