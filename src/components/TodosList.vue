<template>
    <ul class="todo-list">
        <TodosItem v-bind:todo="todo" />
    </ul>
</template>

<script>
    import TodosItem from "./TodosItem";
    export default {
        name: "TodosList",
        components: {TodosItem},
        data: () => ({
            todo: { id: 17, title: 'Template Syntax', completed: false }
        })
    }
</script>

<style scoped>

</style>
