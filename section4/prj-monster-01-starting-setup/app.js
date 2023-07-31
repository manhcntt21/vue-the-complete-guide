function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logs: [],
        };
    },

    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // player lost
                this.winner = 'monster';
            }
        },

        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw';
            } else if (value <= 0) {
                // monster lost
                this.winner = 'player';
            }
        },
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
        startGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logs = [];
        },
        attackMonster() {
            const attackValue = getRandomNumber(12, 5);
            this.monsterHealth -= attackValue;

            // call attackPlayer
            this.attackPlayer();

            // update round count
            this.currentRound++;

            // log
            this.addLogMessage('player', 'attack', attackValue);
        },

        attackPlayer() {
            const attackValue = getRandomNumber(15, 8);
            this.playerHealth -= attackValue;

            // log
            this.addLogMessage('monster', 'attack', attackValue);
        },

        // special attack
        specialAttackMonster() {
            const attackValue = getRandomNumber(25, 10);
            this.monsterHealth -= attackValue;

            // call attackPlayer
            this.attackPlayer();

            // update round count
            this.currentRound++;

            // log
            this.addLogMessage('player', 'special-attack', attackValue);
        },

        healPlayer() {
            const healValue = getRandomNumber(20, 8);

            this.playerHealth =
                this.playerHealth + healValue > 100
                    ? 100
                    : this.playerHealth + healValue;

            this.currentRound++;

            // log
            this.addLogMessage('player', 'heal', healValue);

            // monster attack after player heal
            this.attackPlayer();
        },

        surrender() {
            this.winner = 'monster';

            // log
            this.addLogMessage('player', 'surrender', null);
        },

        addLogMessage(who, what, value) {
            this.logs.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});
app.mount('#game');
