<template>
    <h1>Add User</h1>
    <form @submit.prevent="submit">
        <div>
            <label>name: </label>
            <input type="text" v-model="user.name" />
        </div>
        <div>
            <label>age: </label>
            <input type="text" v-model="user.age" />
        </div>
        <button type="submit">Update User</button>
    </form>
</template>

<script>
export default {
    emits: ['update-user'],
    data() {
        return {
            user: {
                name: '',
                age: '',
            },
        };
    },

    methods: {
        submit() {
            this.$emit('update-user', this.user);
        },
    },
};
</script>
