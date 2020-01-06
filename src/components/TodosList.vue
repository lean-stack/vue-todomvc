<template>
    <ul class="todo-list">
        <TodosItem />
    </ul>
</template>

<script>
    import TodosItem from "./TodosItem";
    export default {
        name: "TodosList",
        components: {TodosItem}
    }
</script>

<style scoped>

</style>
