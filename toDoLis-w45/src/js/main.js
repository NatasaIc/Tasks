//Hade svårt med createElement input och sen hämta värdet
//Ordningen på elementen va också svår att lösa. Har inte haft tillräkligt med tid att öva.  
//En undefined kommer upp i listan som jag tror har att göra med local storage, men kan inte lösa det 
const button = document.createElement('button')
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
        let liElem = document.createElement("li");
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

//Kan inte få till denna
/*
const heading = document.createElement("h1");
heading.className = "heading";
heading.innerHTML = "To Do List";
document.body.append(heading);

const inputElm = document.createElement("input");
inputElm.setAttribute("type", "text");
document.body.append(inputElm);

const buttonElem = document.createElement("button");
buttonElem.innerHTML = "Add";
document.body.append(buttonElem);

inputElm.addEventListener('change', onChange);

function onChange(event){

    const inputValue = inputElm.value;

    const container = document.createElement("div");
    container.className = "box";
    document.body.append(container);

    const ulElem = document.createElement("ul");
    container.appendChild(ulElem);

    const liElem = document.createElement("li")

    let saveText = documnet.createElement("span");
    saveText.innerText = inputElm;
    liElem.appendChild(saveText);

    console.log(inputValue);
    inputElm.value = "";

    ulElem.appendChild(liElem);

   
}
*/