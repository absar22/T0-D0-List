const form = document.querySelector('#to-do-form');
const taskInput = document.querySelector('#task-input');
const toDoList = document.querySelector('#to-do-list');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = taskInput.value;
  if (!task) return;
  addTask(task);
  taskInput.value = '';
});

function addTask(task) {
  const li = document.createElement('li');
  li.innerHTML = task;
  li.addEventListener('click', function() {
    li.classList.toggle('completed');
  });
  toDoList.appendChild(li);
}
