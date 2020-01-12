
function loadTodos() {
    return JSON.parse(localStorage.todos || '[]');
}
function saveTodos(todos) {
    localStorage.todos = JSON.stringify(todos);
}
function generateId() {
    const nextId = JSON.parse(localStorage.nextId || '1');
    localStorage.nextId = nextId + 1;
    return nextId;
}

export const VisibilitiyFilter = {
    All: 0,
    Active: 1,
    Completed: 2
};

export const store = {
    state: {
        todos: loadTodos(),
        visibility: VisibilitiyFilter.All
    },
    createTodo (title) {
        const todo = { id: generateId(), title, completed: false };
        this.state.todos.push(todo);
        saveTodos(this.state.todos);
    },
    toggleTodo (todo) {
        todo.completed = !todo.completed;
        saveTodos(this.state.todos);
    },
    updateTodoTitle (todo, title) {
        todo.title = title;
        saveTodos(this.state.todos);
    },
    removeTodo (todo) {
        const ix = this.state.todos.indexOf(todo);
        this.state.todos.splice(ix, 1);
        saveTodos(this.state.todos);
    }
};
