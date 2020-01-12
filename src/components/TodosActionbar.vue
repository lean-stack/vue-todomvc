<template>
    <footer v-if="hasTodos" class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ activeCount }}</strong> {{ 'item' | pluralize(activeCount) }} left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
            <li>
                <a v-bind:class="{ selected: state.visibility === 0}" href="#/">All</a>
            </li>
            <li>
                <a v-bind:class="{ selected: state.visibility === 1}" href="#/active">Active</a>
            </li>
            <li>
                <a v-bind:class="{ selected: state.visibility === 2}" href="#/completed">Completed</a>
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
            store: store,
            state: store.state
        }),
        computed: {
            activeCount: function () {
                return this.state.todos.reduce((count, t) => t.completed ? count : count + 1, 0);
            },
            hasTodos: function () {
                return this.state.todos.length > 0;
            },
            hasCompletedTodos: function () {
                return this.state.todos.findIndex(t => t.completed) !== -1;
            }
        },
        methods: {
            destroyCompletedTodos: function () {
                this.state.todos.filter(t => t.completed).forEach(
                    t => this.store.removeTodo(t)
                );
            }
        },
        filters: {
            pluralize: function (word, count) {
                return count === 1 ? word : word + 's';
            }
        }
    }
</script>

<style scoped>

</style>
