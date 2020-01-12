<template>
    <section v-if="hasTodos" class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"
               v-bind:checked="allTodosComplete" v-on:change="syncAllCompletedStates">
        <label for="toggle-all">Mark all as complete</label>
        <TodosList v-bind:todos="filteredTodos" />
    </section>
</template>

<script>
    import TodosList from "./TodosList";
    import {store, VisibilitiyFilter} from "../state/store";
    export default {
        name: "TodosMain",
        components: {TodosList},
        data: () => ({
            state: store.state,
            store: store
        }),
        computed: {
            filteredTodos: function () {
                return this.state.visibility === VisibilitiyFilter.All ?
                    this.state.todos : this.state.todos.filter(t => t.completed === (this.state.visibility === VisibilitiyFilter.Completed));
            },
            hasTodos: function () {
                return this.state.todos.length > 0;
            },
            allTodosComplete: function () {
                return this.state.todos.findIndex(t => !t.completed) === -1;
            }
        },
        methods: {
            syncAllCompletedStates: function () {
                this.state.todos.filter(t => t.completed === this.allTodosComplete).forEach(
                    t => this.store.toggleTodo(t)
                )
            }
        }
    }
</script>

<style scoped>

</style>
