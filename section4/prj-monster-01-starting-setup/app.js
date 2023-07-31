function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyle() {
            return {
                width: this.monsterHealth < 0 ? 0 : this.monsterHealth + '%',
            };
        },

        playerBarStyle() {
            return {
                width: this.playerHealth < 0 ? 0 : this.playerHealth + '%',
            };
        },

        mayUseSpecialAttack() {
            return this.currentRound > 0 && this.currentRound % 3 === 0;
        },
    },
    methods: {
        attackMonster() {
            const attackValue = getRandomNumber(12, 5);
            this.monsterHealth -= attackValue;

            // call attackPlayer
            this.attackPlayer();

            // update round count
            this.currentRound++;
        },

        attackPlayer() {
            const attackValue = getRandomNumber(15, 8);
            this.playerHealth -= attackValue;
        },

        // special attack
        specialAttackMonster() {
            const attackValue = getRandomNumber(25, 10);
            this.monsterHealth -= attackValue;

            // call attackPlayer
            this.attackPlayer();

            // update round count
            this.currentRound++;
        },

        healPlayer() {
            const healValue = getRandomNumber(20, 8);

            this.playerHealth =
                this.playerHealth + healValue > 100
                    ? 100
                    : this.playerHealth + healValue;

            this.currentRound++;

            // monster attack after player heal
            this.attackPlayer();
        },
    },
});
app.mount('#game');
