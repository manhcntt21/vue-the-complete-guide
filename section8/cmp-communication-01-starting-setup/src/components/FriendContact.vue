<template>
    <li>
        <!-- <h2>{{ friend.name }}</h2> -->
        <!-- <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2> -->
        <!-- <h2>{{ name }} {{ friendIsFavorite ? '(Favorite)' : '' }}</h2> -->
        <h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>
        <button @click="toggleFavorite()">Toggle Favorite</button>
        <button @click="toggleDetails()">
            {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
        </button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                {{ phoneNumber }}
            </li>
            <li>{{ bindValue }}</li>
        </ul>

        <button @click="$emit('deleteFriend', id)">Delete</button>
    </li>
</template>

<script>
export default {
    // props: ['name', 'phoneNumber', 'isFavorite', 'bindValue'],
    props: {
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        isFavorite: {
            type: Boolean,
            required: false,
            default: false,
            // validator: function (value) {
            //     return value === '1' || value === '0';
            // },
        },
        bindValue: {
            required: false,
        },
    },

    emits: ['toggle-favorite', 'deleteFriend'],
    // emits: {
    //     'toggle-favorite': function (id) {
    //         if (id) {
    //             return true;
    //         } else {
    //             console.warn('id is missing!!!');
    //             return false;
    //         }
    //     },
    // },
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            // if (this.friendIsFavorite) {
            //     this.friendIsFavorite = false;
            // } else {
            //     this.friendIsFavorite = true;
            // }
            this.$emit('toggle-favorite', this.id);
        },

        // deleteFriend() {
        //     this.$emit('deleteFriend', this.id);
        // },
    },
};
</script>
