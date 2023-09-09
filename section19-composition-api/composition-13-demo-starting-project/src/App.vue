<template>
  <main>
    <user-list :users="activeUsers" @list-projects="selectUser"></user-list>
    <projects-list :user="selectedUser"></projects-list>
  </main>
</template>

<script setup>
import USER_DATA from './dummy-data.js';

import UserList from './components/users/UserList.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import { ref } from 'vue';

// dung ref dc vi co the resign, reactive khong dc vi khong the resign
const selectedUser = ref();
const activeUsers = USER_DATA;

function selectUser(uid) {
  selectedUser.value = activeUsers.find((usr) => usr.id === uid);
}
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}

main {
  display: flex;
  justify-content: space-around;
}

button {
  font: inherit;
  border: 1px solid #00006b;
  background-color: transparent;
  color: #00006b;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0.5rem 0.5rem 0.5rem 0;
}
button:hover,
button:active {
  background-color: #efefff;
}

button.selected {
  background-color: #00006b;
  color: white;
}
</style>
