
const todoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo");
const todosBox = document.getElementById("todos-box");
const checkBox = document.getElementById("workDone");
const deleteTodoButton = document.getElementById("delete-todo");
const workTodo = document.getElementById("work");
const tempMsg = document.getElementById("temp-msg");

// todos data collection array
let todos_data = [];
let flag = true;

// all events ------------------------------------------------------------------------>

// click event on add button
addTodoButton.addEventListener("click", () => {
    let input = todoInput.value;

    if (input.length <= 100 && input.length > 0) {
        todos_data.push(input);
        todoInput.value = null;
        // disable temp msg
        // disableTempMsg();
        showTodo(todos_data.length - 1);
    }
    else if (input.length <= 0) {
        alert("You didn't write anything in input!")
    }
    else {
        alert("Input length is greater than 100 characters!");
    }
});

// check box event
let isChecked = (index) => {
    const getTodo = document.getElementById(`todo-items-${index}`);
    const getMsgElement = getTodo.childNodes[3].children.work;

    if (getMsgElement.classList.length === 0) {
        getMsgElement.classList.add("work-completed");
    }
    else {
        getMsgElement.classList.remove("work-completed");
    }
}

// delete todo
let deleteTodo = (index) => {
    const getTodo = document.getElementById(`todo-items-${index}`);
    getTodo.remove();
    todos_data.splice(index, 1);
    // disableTempMsg();
}

// show todo in todos
let showTodo = (index) => {
    let html;

    html = `
                <div class="todo" id="todo-items-${index}">
                    <div class="checkbox"><input type="checkbox" id="workDone" onclick="isChecked(${index})"></div>
                    <div class="msg">
                        <p class="" id="work">${todos_data[index]}</p>
                    </div>
                    <button class="del" id=${index} onclick="deleteTodo(${index})"><img src="images/delete.png" height="30" width="30" alt="delete"></button>
                </div>
            `
    todosBox.innerHTML += html;
}


// disable temp-msg
// let disableTempMsg = () => {
//     if(flag === true && todos_data.length >= 1) {
//         tempMsg.style.display = "none";
//         flag = false;
//     }
//     else {
//         tempMsg.style.display = "block";
//         flag = true;
//         console.log(tempMsg);
//     }
// }

