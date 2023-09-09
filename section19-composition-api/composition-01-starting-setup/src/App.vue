<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ user }}</h2>
    <h2>{{ user.name }}</h2>
    <h2>{{ user.age }}</h2>
  </section>
</template>

<script setup>
import { ref, reactive, isRef, isReactive } from 'vue';

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
setTimeout(() => {
  userName.value = 'Max';
  age.value = 30;
  user.age = 20;
}, 2000);
console.log(userName.value);
console.log(isRef(userName.value), isRef(userName));
console.log(isReactive(user.name), isReactive(user.age), isReactive(user));
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
