const form = document.querySelector('form');
const taskInput = document.querySelector('#new-task');
const taskList = document.querySelector('#task-list');

// Add new task
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.textContent = taskText;
    li.appendChild(span);
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-button');
    editButton.addEventListener('click', () => {
      const newTaskText = prompt('Edit task', taskText);
      if (newTaskText && newTaskText !== taskText) {
        span.textContent = newTaskText;
      }
    });
    li.appendChild(editButton);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});
