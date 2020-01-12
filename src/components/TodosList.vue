<template>
    <ul class="todo-list">
        <TodosItem v-for="todo in todos" v-bind:key="todo.id" v-bind:todo="todo" />
    </ul>
</template>

<script>
    import TodosItem from "./TodosItem";
    export default {
        name: "TodosList",
        components: {TodosItem},
        data: () => ({
            todos: [
                { id: 17, title: 'Template Syntax', completed: true },
                { id: 42, title: 'Find the question', completed: false },
            ]
        })
    }
</script>

<style scoped>

</style>
