const app = Vue.createApp({
    data() {
        return {
            curTask: '',
            tasks: [],
            showList: true,
        };
    },
    computed: {
        buttonCaption() {
            return this.showList ? 'Hide' : 'Show';
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.curTask);
            this.curTask = '';
        },

        changeVisible() {
            this.showList = !this.showList;
        },
    },
});
app.mount('#assignment');
