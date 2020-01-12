<template>
    <li v-bind:class="{ completed: todo.completed, editing: editMode }">
        <div class="view">
            <input class="toggle" type="checkbox" v-on:change="toggleCompletedState" v-bind:checked="todo.completed">
            <label v-on:dblclick="beginEdit">{{ todo.title }}</label>
            <button class="destroy" v-on:click="destroyTodo"></button>
        </div>
        <input ref="editFld" class="edit" v-model="editText"
            v-on:keyup.enter="commitEdit" v-on:keyup.esc="cancelEdit" v-on:blur="commitEdit"
        >
    </li>
</template>

<script>
    import {store} from "../state/store";

    export default {
        name: "TodosItem",
        props: [
            'todo'
        ],
        data: () => ({
            editMode: false,
            editText: '',
            store: store
        }),
        methods: {
            toggleCompletedState: function () {
                this.store.toggleTodo(this.todo);
            },
            destroyTodo: function () {
                this.store.removeTodo(this.todo);
            },
            beginEdit: function () {
                this.editMode = true;
                this.editText = this.todo.title;
                this.$nextTick(() => this.$refs.editFld.focus());
            },
            commitEdit: function () {
                if (this.editMode) {
                    this.editMode = false;
                    const title = this.editText.trim();
                    if (title.length === 0) {
                        this.store.removeTodo(this.todo);
                    } else {
                        this.store.updateTodoTitle(this.todo, title);
                    }
                }
            },
            cancelEdit: function () {
                this.editMode = false;
            }
        }
    }
</script>

<style scoped>

</style>
