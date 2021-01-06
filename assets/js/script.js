var formEl = document.querySelector("#task-form"); //DOM object reference to the button
var tasksToDoEl = document.querySelector("#tasks-to-do"); //DOM object reference to the task list

var createTaskHandler = function(event) {
  event.preventDefault(); //instructs the browser to not carry out the default broswer behavior
  var taskNameInput = document.querySelector("input[name='task-name']").value; //square brackets select an HTML element by an attribute
  //.value selects JUST the value property from the elment
  var taskTypeInput = document.querySelector("select[name='task-type']").value; 
  
  // create list item 
  var listItemEl = document.createElement("li"); //a var is created to house the li item
  listItemEl.className = "task-item"; //list item is assigned to the class task-item for stylistic rendering

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  // give it a class name
  taskInfoEl.className = "task-info";
  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  listItemEl.appendChild(taskInfoEl); // adds innerHTML assigned to taskInfoEl to listItemEl

  // add entire list item to list
  tasksToDoEl.appendChild(listItemEl);
  
}

  formEl.addEventListener("submit", createTaskHandler); //when buttonEl is clicked..
  


