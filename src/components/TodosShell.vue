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
    import {store, VisibilitiyFilter} from "../state/store";
    export default {
        name: "TodosShell",
        components: {TodosActionbar, TodosMain, TodosInput},
        data: () => ({
            store: store
        }),
        mounted() {
            this.store.state.visibility = mapHashtoVisibility();
            window.addEventListener('hashchange', () => {
                this.store.state.visibility = mapHashtoVisibility();
            });

            function mapHashtoVisibility() {
                const hash = window.location.hash;
                if (hash === '#/active') return VisibilitiyFilter.Active;
                if (hash === '#/completed') return VisibilitiyFilter.Completed;
                return VisibilitiyFilter.All;
            }
        }
    }
</script>

<style scoped>

</style>
