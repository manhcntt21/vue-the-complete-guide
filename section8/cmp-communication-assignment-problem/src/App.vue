<template>
    <header>
        <h1>Management User</h1>
    </header>
    <user-data @update-user="updateUser"></user-data>
    <activate-user v-bind="user"></activate-user>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'a',
                age: 18,
            },
        };
    },

    methods: {
        updateUser(user) {
            this.user = user;
        },
    },
};
</script>
