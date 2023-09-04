<template>
  <base-container title="Vuex" v-if="userIsAuthenticated">
    <the-counter></the-counter>
    <favorite-value></favorite-value>
    <button @click="add">Add 10</button>
    <change-counter></change-counter>
  </base-container>
  <base-container title="Auth">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';
import { mapGetters } from 'vuex';
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$store.state.counter;
    },
    ...mapGetters(['userIsAuthenticated']),
  },
  methods: {
    add() {
      // this.$store.commit('increase', { value: 10 });
      // this.$store.commit({
      //   type: 'increase',
      //   value: 10,
      // });
      this.$store.dispatch({
        type: 'increase',
        value: 10,
      });
    },
  },
};
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
</style>
