<template>
    <form @submit.prevent="submitData">
        <div>
            <label>name: </label>
            <input type="text" v-model="friend.enteredName" />
        </div>
        <div>
            <label>phone: </label>
            <input type="text" v-model="friend.enteredPhone" />
        </div>
        <div>
            <label>email: </label>
            <input type="text" v-model="friend.enteredEmail" />
        </div>
        <div>
            <button type="submit">Add Contact</button>
        </div>
    </form>
</template>

<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            friend: {
                enteredName: '',
                enteredPhone: '',
                enteredEmail: '',
            },
        };
    },

    methods: {
        submitData() {
            this.$emit('add-contact', this.friend);
        },
    },
};
</script>
