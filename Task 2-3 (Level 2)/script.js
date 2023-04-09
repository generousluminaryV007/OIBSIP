let taskList = [];
let completedTasks = [];

function addTask() {
	let taskInput = document.getElementById("taskInput");
	let taskListEl = document.getElementById("taskList");

	if (taskInput.value !== "") {
		taskList.push(taskInput.value);
		taskListEl.innerHTML += `<li>${taskInput.value}<div class="actions"><button onclick="completeTask(this)">Complete</button><button onclick="editTask(this)">Edit</button><button onclick="deleteTask(this)">Delete</button></div></li>`;
		taskInput.value = "";
	}
}

function completeTask(el) {
	let taskText = el.parentNode.parentNode.firstChild.nodeValue;
	completedTasks.push(taskText);
	el.parentNode.parentNode.classList.add("completed");
	el.parentNode.innerHTML = "";
	document.getElementById("completedTasks").innerHTML += `<li>${taskText}</li>`;
}

function editTask(el) {
	let taskText = el.parentNode.parentNode.firstChild.nodeValue;
	let newTaskText = prompt("Edit Task", taskText);
	if (newTaskText !== null && newTaskText !== "") {
		taskList.splice(taskList.indexOf(taskText), 1, newTaskText);
		el.parentNode.parentNode.firstChild.nodeValue = newTaskText;
	}
}

function deleteTask(el) {
	let taskText = el.parentNode.parentNode.firstChild.nodeValue;
	taskList.splice(taskList.indexOf(taskText), 1);
	el.parentNode.parentNode.remove();
}

