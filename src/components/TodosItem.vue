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
    export default {
        name: "TodosItem",
        props: [
            'todo'
        ],
        data: () => ({
            editMode: false,
            editText: '',
        }),
        methods: {
            toggleCompletedState: function () {
                this.todo.completed = !this.todo.completed;
            },
            destroyTodo: function () {

            },
            beginEdit: function () {
                this.editMode = true;
                this.editText = this.todo.title;
                this.$nextTick(() => this.$refs.editFld.focus());
            },
            commitEdit: function () {
                if (this.editMode) {
                    this.editMode = false;
                    this.todo.title = this.editText.trim();
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
