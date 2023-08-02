<template>
    <li>
        <!-- <h2>{{ friend.name }}</h2> -->
        <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                <!-- {{ friend.phone }} -->
                {{ phoneNumber }}
            </li>
            <li>
                <strong>Email:</strong>
                {{ friend.email }}
            </li>
            <li>{{ bindValue }}</li>
        </ul>
    </li>
</template>

<script>
export default {
    // props: ['name', 'phoneNumber', 'isFavorite', 'bindValue'],
    props: {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: String,
            required: false,
            default: '0',
            validator: function (value) {
                return value === '1' || value === '0';
            },
        },
    },

    data() {
        return {
            detailsAreVisible: false,
            friend: {
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 45678 90',
                email: 'manuel@localhost.com',
            },
            friendIsFavorite: this.isFavorite,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            if (this.friendIsFavorite === '0') {
                this.friendIsFavorite = '1';
            } else {
                this.friendIsFavorite = '0';
            }
        },
    },
};
</script>
