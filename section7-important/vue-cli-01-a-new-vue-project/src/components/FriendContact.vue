<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetail()">{{ description }} Details</button>
        <ul v-if="detailVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['friend'],

    data() {
        return {
            detailVisible: false,
        };
    },
    computed: {
        description() {
            return this.detailVisible ? 'Hide' : 'Show';
        },
    },
    methods: {
        toggleDetail() {
            this.detailVisible = !this.detailVisible;
        },
    },
};
</script>
