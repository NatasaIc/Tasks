// selecting all elements
const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('.todo-input');
const todoItemsList = document.querySelector('.todo-items');

let todos = [];

// add an eventListener
todoForm.addEventListener('submit', function(event) {
  event.preventDefault();
  addTodo(todoInput.value); // call addTodo function 
});

// function to add todo
function addTodo(item) {
  // if item is not empty
  if (item !== '') {
    // make a todo object
    const todo = {
      id: Date.now(),
      name: item,
      completed: false
    };

    // then add it
    todos.push(todo);
    addToLocalStorage(todos); // then store it

    todoInput.value = '';
  }
}

//render
function renderTodos(todos) {
  todoItemsList.innerHTML = '';

  todos.forEach(function(item) {
   
    const checked = item.completed ? 'checked': null;

    // <li> </li>
    const li = document.createElement('li');
    li.setAttribute('class', 'item');
    li.setAttribute('data-key', item.id);
   
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${checked}>
      ${item.name}
      <button class="delete-button">X</button>
    `;
    todoItemsList.append(li);
  });

}

function addToLocalStorage(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
  
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
 
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}