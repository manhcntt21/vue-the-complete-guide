const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: '',
        };
    },
    methods: {
        confirmName() {
            this.confirmedName = this.name;
        },
        setName(event) {
            this.name = event.target.value;
        },
        showAlert() {
            alert('Hi!');
        },
    },
});

app.mount('#assignment');
