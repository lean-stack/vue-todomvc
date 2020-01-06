<template>
  <div class="wrapper">
    <TodosShell />
    <footer class="info">
      <p>Double-click to edit a todo</p>
      <p>Created by <a href="https://lean-stack.rocks">Micha Alt</a></p>
      <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
    </footer>
  </div>
</template>

<script>
import TodosShell from "./components/TodosShell";

export default {
  name: 'app',
  components: {
    TodosShell
  }
}
</script>

<style>
@import "~todomvc-app-css/index.css";
</style>
