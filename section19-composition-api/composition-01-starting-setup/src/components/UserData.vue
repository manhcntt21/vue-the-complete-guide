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
import {
  defineProps,
  computed,
  defineEmits,
  inject,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue';
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

onBeforeMount(function () {
  console.log('onBeforeMount');
});
onMounted(function () {
  console.log('onMounted');
});
onBeforeUpdate(function () {
  console.log('onBeforeUpdate');
});
onUpdated(function () {
  console.log('onUpdated');
});
onBeforeUnmount(function () {
  console.log('onBeforeUnmount');
});
onUnmounted(function () {
  console.log('onUnmounted');
});
</script>
