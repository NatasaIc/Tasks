let close = document.getElementsByClassName("close");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("yourInput").value;
  let toDo = document.createTextNode(inputValue);
  li.appendChild(toDo);
  if (inputValue === '') {
    alert("You forgot to add a new task!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("yourInput").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Denna uppgift va väldigt utmanande försökte på många olika sätt 

//Hade svårt med createElement input och sen hämta värdet
//Ordningen på elementen va också svår att lösa om man skapade nån html och sedan resten med javascript. Har inte haft tillräkligt med tid att öva.  
//En undefined kommer upp i listan som jag tror har att göra med local storage, men kan inte lösa det 
/*const button = document.createElement('button')
        button.innerText = 'Add';
        
        button.addEventListener('click', () => {
        })
        document.body.appendChild(button);

toDoMain();

function toDoMain(){
    let inputElm,
    ulElem,
    todoList = [];

    getElements();
    load();
    renderRows();

    function getElements(){
        inputElm = document.getElementsByTagName("input")[0];
        ulElem = document.getElementsByTagName("ul")[0];
        
        inputElm.addEventListener("change", onChange, false);
    }

    function onChange(event){
        let flag = true;

        let inputValue = inputElm.value;

        console.log(inputValue);
        inputElm.value = "";

        renderRows(inputValue);
        
        function onClick(){
            if(flag){
                this.classList.add("strike");
                flag = !flag;
            }else {
                this.classList.remove("strike");
                flag = !flag;
            }
            
        }
    }
    function save(){
        let stringified = JSON.stringify(todoList)
        localStorage.setItem("todoList", stringified);
    }
    function load(){
       let getData = localStorage.getItem("todoList");
       todoList = JSON.parse(getData);
      console.log(todoList)
      if(todoList == null)
      todoList = [];
    }

    function renderRows(){
        todoList.forEach(inputValue => {
            renderRows(inputValue, null);
        })
    }

    function renderRows(inputValue){
        let liElem = document.createElement("li");

        function deleteItem(){
            liElem.remove();
         }

        let checkboxElem = document.createElement("input");
        checkboxElem.type = "checkbox";
        liElem.appendChild(checkboxElem);

        let textElem = document.createElement("span");
        textElem.innerText = inputValue;
        liElem.appendChild(textElem);

        let iconElem = document.createElement("i");
        iconElem.className = "fa-solid  fa-trash";
        
        iconElem.addEventListener("click", deleteItem, false);
        todoList.push(inputValue);
        save();

        liElem.appendChild(iconElem);
        ulElem.appendChild(liElem);
    }
}
*/