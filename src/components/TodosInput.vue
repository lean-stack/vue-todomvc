<template>
    <input ref="fld" v-model="title" v-on:keyup.enter="createTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
</template>

<script>
    export default {
        name: "TodosInput",
        data: () => ({
            title: ''
        }),
        methods: {
            createTodo: function () {
                const title = this.title.trim();
                if (title.length > 0) {
                    this.$emit('create', title);
                    this.title = '';
                }
            }
        },
        mounted() {
            this.$refs.fld.focus();
        }
    }
</script>

<style scoped>

</style>
