<template>
  <h2>{{ userName }}</h2>
  <h2>{{ age }}</h2>
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
import { defineProps, computed } from 'vue';
const props = defineProps({
  firstName: String,
  lastName: String,
  age: Number,
});
const userName = computed(function () {
  return props.firstName + ' ' + props.lastName;
});
</script>
