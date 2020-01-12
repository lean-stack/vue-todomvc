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
        props: ['todos']
    }
</script>

<style scoped>

</style>
