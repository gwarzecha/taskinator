var formEl = document.querySelector("#task-form"); //DOM object reference to the button
var tasksToDoEl = document.querySelector("#tasks-to-do"); //DOM object reference to the task list

var createTaskHandler = function(event) {
  event.preventDefault(); //instructs the browser to not carry out the default broswer behavior

  var listItemEl = document.createElement("li"); //a var is created to house the li item
  listItemEl.className = "task-item"; //list item is assigned to the class task-item for stylistic rendering
  listItemEl.textContent = "This is a new task."; //this is the text that will be assigned to the listItemEl
  tasksToDoEl.appendChild(listItemEl);// this adds the li item to the DOM referenced task list declared above
}

  formEl.addEventListener("submit", createTaskHandler); //when buttonEl is clicked..
  


