function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
        };
    },
    computed: {
        monsterBarStyle() {
            return { width: this.monsterHealth + '%' };
        },

        playerBarStyle() {
            return { width: this.playerHealth + '%' };
        },
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomNumber(12, 5);
            this.monsterHealth -= attackValue;

            // call attackPlayer
            this.attackPlayer();
        },

        attackPlayer() {
            const attackValue = getRandomNumber(15, 8);
            this.playerHealth -= attackValue;
        },
    },
});
app.mount('#game');
