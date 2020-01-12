<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <TodosInput v-on:create="store.createTodo($event)" />
        </header>
        <TodosMain />
        <TodosActionbar />
    </section>
</template>

<script>
    import TodosInput from "./TodosInput";
    import TodosMain from "./TodosMain";
    import TodosActionbar from "./TodosActionbar";
    import {store} from "../state/store";
    export default {
        name: "TodosShell",
        components: {TodosActionbar, TodosMain, TodosInput},
        data: () => ({
            store: store
        })
    }
</script>

<style scoped>

</style>
