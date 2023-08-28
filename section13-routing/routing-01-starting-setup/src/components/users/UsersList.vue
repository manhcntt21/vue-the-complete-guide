<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changesSaved: false,
    };
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
    },
    saveChanges() {
      this.changesSaved = true;
      // console.log(this.changesSaved);
    },
  },

  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter in component');
    console.log(to, from);
    next();
  },

  beforeRouteLeave(to, from, next) {
    console.log('beforeRouteLeave UserList');
    console.log(to, from);
    // console.log(this.changesSaved);
    if (this.changesSaved) {
      next();
    } else {
      const userWantsToLeave = confirm(
        'Are you sure? you got unsaved changes!'
      );
      console.log(userWantsToLeave);
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('Unmounted UserList');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
