<template>
    <div>
        <h2>Manage Goal</h2>
        <input type="text" ref="goal" />
        <button @click="setGoal">Set Goal</button>
        <teleport to="body">
            <error-alert v-if="inputIsInValid">
                <h2>Input is invalid</h2>
                <button @click="confirmError">Ok</button>
            </error-alert>
        </teleport>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: { ErrorAlert },
    data() {
        return {
            inputIsInValid: false,
        };
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if (enteredValue === '') {
                // alert('Input must not be empty!');
                this.inputIsInValid = true;
            }
        },
        confirmError() {
            this.inputIsInValid = false;
        },
    },
};
</script>
