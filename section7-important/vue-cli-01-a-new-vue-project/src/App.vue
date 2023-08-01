<template>
    <header>
        <h1>My friends</h1>
    </header>
    <ul>
        <!-- <li v-for="friend in friends" :key="friend.id">{{ friend }}</li> -->
        <friend-contact
            v-for="friend in friends"
            :key="friend.id"
            :friend="friend"
        ></friend-contact>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                },
            ],
        };
    },
    methods: {},
    computed: {},
};
</script>

<style></style>
