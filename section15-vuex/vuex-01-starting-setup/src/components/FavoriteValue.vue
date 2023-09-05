<template>
  <h2>The Favorite Value Component</h2>
  <h3>{{ counter }}</h3>
  <p>we do moree...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizeCounter'];
    },
  },
};
</script>
