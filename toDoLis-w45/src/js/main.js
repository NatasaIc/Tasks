import { Todo } from "./models/todo";

// GRABING ALL ELEMENTS 
const form = document.querySelector('#form');
const input = document.querySelector('#input');
const lists = document.querySelector('#lists');

// LOCAL STORAGE
class Storage {
  static addTodoStorage(todoArray){
    let storage = localStorage.setItem("todo", JSON.stringify(todoArray))
    return storage;
  }

  static getStorage (){
    let storage = localStorage.getItem("todo") === null ? 
    [] : JSON.parse(localStorage.getItem("todo"));
    return storage;
  }
}

// DISPLAY IN THE DOM WITH EMPTY ARRAY
let todoArray = Storage.getStorage();

// ADDING EVENTLISTNER FORM

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let id = Math.random() * 1000000;
  console.log(id);
  const todo = new Todo(id, input.value);
  console.log(todo);

  todoArray = [...todoArray, todo];
  UI.displayData();
  UI.clearInput();
  // REMOVE FROM THE DOM
  UI.removeTodo();
  UI.compliteBtn();
  // ADD TO STORAGE
  Storage.addTodoStorage(todoArray);
});

// DISPLAY THE TODO DATA IN THE DOM

class UI {
  static displayData(){
    let displayData = todoArray.map((item) => {
    return `
                <div class="todo">
                <p>${item.todo}</p>
                <span class="remove" data-id = ${item.id}>✖️</span>
                </div>
    `
    })
    lists.innerHTML = (displayData).join(" ");
  }
  static clearInput(){
    input.value = "";
  }
  static removeTodo(){
    lists.addEventListener("click", (e) => {
      if(e.target.classList.contains("remove")){
        e.target.parentElement.remove();
      }
      //REMOVE FROM ARRAY
      let btnId = e.target.dataset.id;
      UI.removeArrayTodo(btnId);
    });
  }
  static removeArrayTodo(id){
    todoArray = todoArray.filter((item) => item.id !== +id);
    Storage.addTodoStorage(todoArray);
  }
}

window.addEventListener("contentLoaded", () => {
  UI.displayData();
  UI.removeTodo();
});