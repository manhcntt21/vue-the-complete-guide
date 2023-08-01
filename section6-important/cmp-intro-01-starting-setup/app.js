const app = Vue.createApp({
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
    computed: {
        description() {
            return this.detailVisible ? 'Hide' : 'Show';
        },
    },
    methods: {},
});

// create new a component
app.component('friend-contact', {
    template: `
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetail()">{{ description }} Details</button>
            <ul v-if="detailVisible">
            <li><strong>Phone:</strong> {{ friend.phone }}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>    
      `,
    props: ['friend'],

    data() {
        return {
            detailVisible: false,
        };
    },

    methods: {
        toggleDetail() {
            this.detailVisible = !this.detailVisible;
        },
    },
});

app.mount('#app');
