const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const todoText = input.value.trim();
  if (todoText === '') return;
  
  const todoItem = document.createElement('li');
  todoItem.textContent = todoText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.addEventListener('click', function() {
    todoItem.remove();
  });

  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);

  input.value = '';
});
