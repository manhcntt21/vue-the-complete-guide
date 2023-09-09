<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();
    const counter = computed(() => store.getters.counter);
    return { counter };
  },
};
</script>
