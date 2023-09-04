<template>
  <transition-group tag="ul" name="user-list">
    <li v-for="u in users" :key="u" @click="removeUser(u)">{{ u }}</li>
  </transition-group>

  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUSer">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['1', '2', '3'],
    };
  },
  methods: {
    addUSer() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
      this.$refs.userNameInput.value = '';
    },
    removeUser(u) {
      this.users = this.users.filter((user) => user !== u);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
