const inputBox = document.getElementById('inputBox')
const todoList = document.getElementById('todoList')

function addTask() {
    if (inputBox.value === "") {
        Toastify({
            text: "Please add a task",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "center",
            style: {
                background: "linear-gradient(to right, #201f75, #0d0e41)",
            }
        }).showToast();
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        inputBox.value = "";
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        saveData();
    }
}

todoList.addEventListener('click' , function(e) {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData()
    }
})

function saveData() {
    localStorage.setItem('data' , todoList.innerHTML)
}

function showTask() {
    todoList.innerHTML = localStorage.getItem('data')
}

showTask()