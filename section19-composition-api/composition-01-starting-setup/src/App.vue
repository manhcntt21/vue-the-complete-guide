<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ user }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" pattern="First Name" @input="setFirstName" />
      <input type="text" pattern="Last Name" @input="setLastName" />
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';

// data() {
//   return {
//     userName: 'Maximilian',
//   };
// },

// reference
const userName = ref('Manh Do');
const age = ref(27);
const user = reactive({
  name: 'Manh Do',
  age: 30,
});
function setNewData() {
  user.age = 40;
}

const firstName = ref('');
const lastName = ref('');

function setFirstName(e) {
  firstName.value = e.target.value;
}
function setLastName(e) {
  lastName.value = e.target.value;
}

const fullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

fullName.value = 10;
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
