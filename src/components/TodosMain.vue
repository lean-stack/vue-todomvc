<template>
    <section v-if="hasTodos" class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"
               v-bind:checked="allTodosComplete" v-on:change="syncAllCompletedStates">
        <label for="toggle-all">Mark all as complete</label>
        <TodosList v-bind:todos="store.state.todos" />
    </section>
</template>

<script>
    import TodosList from "./TodosList";
    import {store} from "../state/store";
    export default {
        name: "TodosMain",
        components: {TodosList},
        data: () => ({
            todos: store.state.todos,
            store: store
        }),
        computed: {
            hasTodos: function () {
                return this.todos.length > 0;
            },
            allTodosComplete: function () {
                return this.todos.findIndex(t => !t.completed) === -1;
            }
        },
        methods: {
            syncAllCompletedStates: function () {
                this.todos.filter(t => t.completed === this.allTodosComplete).forEach(
                    t => this.store.toggleTodo(t)
                )
            }
        }
    }
</script>

<style scoped>

</style>
