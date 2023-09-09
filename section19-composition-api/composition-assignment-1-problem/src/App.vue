<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->

  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <h3 v-if="data.show">{{ data.mainCourse }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggle">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script setup>
import { reactive } from 'vue';
// const mainCourse = ref('Master Vuejs');
// const show = ref(true);

// const toggle = function () {
//   show.value = !show.value;
// };

// const data = ref({
//   mainCourse: 'Master Vuejs',
//   show: true,
// });

// const toggle = function () {
//   data.value.show = !data.value.show;
// };

const data = reactive({
  mainCourse: 'Master Vuejs',
  show: true,
});

const toggle = function () {
  data.show = !data.show;
};

console.log(data);
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
