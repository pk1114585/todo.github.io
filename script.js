// Get elements from the DOM
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const totalTasks = document.getElementById('total-tasks');

let taskId = 0;

// Function to create a new todo item
function createTodoItem(task) {
  const todoItem = document.createElement('li');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');

  checkbox.type = 'checkbox';
  checkbox.id = `checkbox-${taskId}`;

  label.setAttribute('for', `checkbox-${taskId}`);
  label.textContent = task;

  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-button');

  todoItem.classList.add('todo-item');
  todoItem.appendChild(checkbox);
  todoItem.appendChild(label);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// Function to add a new todo item
function addTodoItem() {
  const task = todoInput.value.trim();
  if (task !== '') {
    const todoItem = createTodoItem(task);

    todoList.appendChild(todoItem);

    // Reset the input field
    todoInput.value = '';
    todoInput.focus();

    // Update the total number of tasks
    updateTotalTasks();
  }
}

// Function to delete a todo item
function deleteTodoItem(event) {
  const todoItem = event.target.closest('.todo-item');
  todoItem.remove();

  // Update the total number of tasks
  updateTotalTasks();
}

// Function to update the total number of tasks
function updateTotalTasks() {
  const total = todoList.childElementCount;
  totalTasks.textContent = `Total tasks: ${total}`;
}

// Function to handle checkbox state change
function handleCheckboxChange(event) {
  const todoItem = event.target.closest('.todo-item');
  if (event.target.checked) {
    todoItem.classList.add('checked');
  } else {
    todoItem.classList.remove('checked');
  }
}

// Add event listeners
addButton.addEventListener('click', addTodoItem);
todoList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-button')) {
    deleteTodoItem(event);
  }
});
todoList.addEventListener('change', handleCheckboxChange);
