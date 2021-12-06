// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

let arrayOfTodos = [
    {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }
]
console.log(arrayOfTodos[0].userId)
console.log(arrayOfTodos[1].userId)

const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => arrayOfTodos = json)
}

function logTodos() {
    console.log(arrayOfTodos)
}

const populateTodos = () => {
    let todoList = document.getElementById('todo-list');

    for (i = 0; i < arrayOfTodos.length; i++) {
        todoTitle = document.createTextNode(arrayOfTodos[i].title);

        let todoItem = document.createElement("LI");
        if (arrayOfTodos[i].completed) {

            todoItem.classList.add("istrue");
        } else {
            todoItem.classList.add("isfalse");
        }
        todoItem.appendChild(todoTitle);
        todoList.appendChild(todoItem);
    }


}
const filterTodos = () => {
    let todoList = document.getElementById("todo-list");
    const num = document.getElementById("number input").value;
    const arrayFilter = arrayOfTodos.filter(array => array.userId == num);

    for (let i = 0; i < arrayFilter.length; i++) {
        let todoItem = document.createElement("LI");
        todoItem.innerHTML = " <b>User:</b> " + arrayFilter[i].userId + ", <b>Title:</b> " + array.Filter[i].title + ", <b>Completed:</b> " + arrayFilter[i].completed;
        todoList.appendChild(todoItem);
    }
}
const completedTodos = () => {
    let todoList = document.getElementById("todo-list");
    const arrayFilter = arrayOfTodos.filter(array => array.completed === true);
    for (let i = 0; i < arrayFilter.length; i++) {
        let todoItem = document.createElement("LI");
        todoItem.innerHTML = " <b>User:</b> " + arrayFilter[i] + ", <b>Title:</b> " + array.Filter[i].title + ", <b>completed:</b> " + arrayFilter[i].completed;
        todoList.appendChild(todoItem);
    }
}
const notCompletedTodos = () => {
    let todoList = arrayOfTodos.filter(array => array.completed === false);
    for (let i = 0; i < arrayFilter.length; i++) {
        let todoItem = document.createElement("LI");
        todoItem.innerHtML = "<b>User:</b> " + arrayFilter[i].userId + ", <b>Title:</b> " + arrayFilter[i].title + ", <b>Completed:</b> " + arrayFilter[i].completed;
        todoList.appendChild(todoItem);
    }
}

const resetTodos = () => {
    const listItems = documents.getElementByTagName("OL")
    for (i = 0; i < listItems[i].innerHTML = null)
}


