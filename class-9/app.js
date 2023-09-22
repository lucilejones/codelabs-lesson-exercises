// Doesn't yet have functionality for marking a todo as complete


class TodoListObserver {
    tasks = [];
    observers = [];

    addTask(todo) {
        this.tasks.push(todo);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        this.notifyAll();
    }

    removeTask(todo) {
        console.log(todo)
        this.tasks = this.tasks.filter(task => task !== todo);

        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        console.log(this.tasks)
        this.notifyAll();
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    subscribe(observer) {
        this.observers.push(observer);
    }

    notifyAll() {
        this.observers.forEach(observer => observer.this.tasks)
    }
}

const todoList = new TodoListObserver;

// const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
// todoList.setTasks(tasks);


const addTodoButton = document.getElementById('addTodo');
const todoInput = document.getElementById('todo-input');


addTodoButton.addEventListener('click', (e) => {
    e.preventDefault()
    const newTodo = {
        title: todoInput.value,
        completed: false
    }
    todoList.addTask(newTodo)
    todoInput.value = ""
    // console.log(tasks)
    // displayToDos()
    renderPage()
})


const todoListElement = document.getElementById('todo-list');

function displayToDos(todo) {
    const todoElement = document.createElement('div')
    
    const titleElement = document.createElement('p')
    titleElement.innerText = todo.title
    todoElement.appendChild(titleElement)

    const deleteButton = document.createElement('button')
    deleteButton.innerText = "Delete"
    deleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        // console.log(todo)
        todoList.removeTask(todo)
        todoListElement.removeChild(todoElement)
        // renderPage()
    })
    todoElement.appendChild(deleteButton)

    todoListElement.appendChild(todoElement)
}

function renderPage() {
    clearPage()
    // console.log(tasks)
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    todoList.setTasks(tasks);

    tasks.forEach(todo => displayToDos(todo));
}

function clearPage() {
    const element = document.getElementById('todo-list');
    while(element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

// todoList.subscribe(displayToDos);
// todoList.subscribe(renderPage);
renderPage()
