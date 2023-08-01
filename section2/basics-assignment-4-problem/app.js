const app = Vue.createApp({
    data() {
        return {
            userStyle: '',
            selted: false,
            userBackgound: '',
        };
    },
    computed: {
        styleParagraph() {
            return { hidden: !this.selted, visible: this.selted };
        },
    },
    methods: {
        tog() {
            this.selted = !this.selted;
        },
    },
});

app.mount('#assignment');
