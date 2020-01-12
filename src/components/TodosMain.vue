<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <TodosList v-bind:todos="todos" />
    </section>
</template>

<script>
    import TodosList from "./TodosList";
    import {state} from "../state";
    export default {
        name: "TodosMain",
        components: {TodosList},
        data: () => ({
          todos: state.todos
        })
    }
</script>

<style scoped>

</style>
