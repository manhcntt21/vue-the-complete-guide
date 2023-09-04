<template>
  <button @click="add">Add 2</button>
</template>
<script>
export default {
  methods: {
    add() {
      //   this.$store.commit('increment');
      this.$store.dispatch('increment');
    },
  },
};
</script>
