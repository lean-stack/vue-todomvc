<template>
    <footer v-if="hasTodos" class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ activeCount }}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a class="selected" href="#/">All</a>
            </li>
            <li>
                <a href="#/active">Active</a>
            </li>
            <li>
                <a href="#/completed">Completed</a>
            </li>
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed"
                v-bind:class="{ hidden: !hasCompletedTodos }" v-on:click="destroyCompletedTodos">
            Clear completed
        </button>
    </footer>
</template>

<script>
    import {store} from "../state/store";

    export default {
        name: "TodosActionbar",
        data: () => ({
            todos: store.state.todos,
            store: store
        }),
        computed: {
            activeCount: function () {
                return this.todos.reduce((count, t) => t.completed ? count : count + 1, 0);
            },
            hasTodos: function () {
                return this.todos.length > 0;
            },
            hasCompletedTodos: function () {
                return this.todos.findIndex(t => t.completed) !== -1;
            }
        },
        methods: {
            destroyCompletedTodos: function () {
                this.todos.filter(t => t.completed).forEach(
                    t => this.store.removeTodo(t)
                );
            }
        }
    }
</script>

<style scoped>

</style>
