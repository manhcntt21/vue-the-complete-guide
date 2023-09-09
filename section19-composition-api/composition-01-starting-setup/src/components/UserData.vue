<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <h2>{{ age }}</h2>
    <button @click="changeAge">Change Age</button>
    <h2>{{ user }}</h2>
  </section>
</template>
<!-- <script>
export default {
  props: ['firstName', 'lastName', 'age'],
  computed: {
    userName() {
      return this.firstName + ' ' + this.lastName;
    },
  },
};
</script> -->

<script setup>
import { defineProps, computed, defineEmits, inject } from 'vue';
const props = defineProps({
  firstName: String,
  lastName: String,
  age: Number,
});

const emit = defineEmits(['change-age']);

const userName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});

function changeAge() {
  emit('change-age', 10);
}

const user = inject('user');
console.log(user);
</script>
