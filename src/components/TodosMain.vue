<template>
    <!-- This section should be hidden by default and shown when there are todos -->
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <TodosList v-bind:todos="state.todos" />
    </section>
</template>

<script>
    import TodosList from "./TodosList";
    import {store} from "../state/store";
    export default {
        name: "TodosMain",
        components: {TodosList},
        data: () => ({
          state: store.state
        })
    }
</script>

<style scoped>

</style>
