<template>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <TodosInput />
        </header>
        <TodosMain />
        <TodosActionbar />
    </section>
</template>

<script>
    import TodosInput from "./TodosInput";
    import TodosMain from "./TodosMain";
    import TodosActionbar from "./TodosActionbar";
    export default {
        name: "TodosShell",
        components: {TodosActionbar, TodosMain, TodosInput}
    }
</script>

<style scoped>

</style>
