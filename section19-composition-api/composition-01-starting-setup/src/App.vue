<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ user }}</h2>
    <h2>{{ fullName }}</h2>
    <button @click="setNewData">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
  <section>
    <user-data
      :first-name="firstName"
      :last-name="lastName"
      :age="age"
      @change-age="changeAge"
    ></user-data>
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
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

const firstName = ref('');
const lastName = ref('');
const lastNameInput = ref(null);

function setNewData() {
  age.value = 40;
}

// function setFirstName(e) {
//   firstName.value = e.target.value;
// }
// function setLastName(e) {
//   lastName.value = e.target.value;
// }

function setLastName() {
  lastName.value = lastNameInput.value.value;
}

const fullName = computed(function () {
  return firstName.value + ' ' + lastName.value;
});

watch(age, function (newValue, oldValue) {
  console.log('Old age: ' + oldValue);
  console.log('New age: ' + newValue);
});

watch([age, userName], function (newValues, oldValues) {
  console.log('Old age: ' + oldValues[0]);
  console.log('New age: ' + newValues[0]);
  console.log('Old userName: ' + oldValues[1]);
  console.log('New userName: ' + newValues[1]);
});
// fullName.value = 10;

provide('user', user);
function changeAge(newAge) {
  age.value = newAge;
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
