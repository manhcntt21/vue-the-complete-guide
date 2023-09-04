<template>
  <button v-if="!userIsAuthenticated" @click="login">Log in</button>
  <button v-else @click="logout">Log out</button>
  {{ testAuth }}
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  methods: {
    ...mapActions(['login', 'logout']),
  },

  computed: {
    ...mapGetters(['userIsAuthenticated', 'testAuth']),
    // ...mapGetters(['userIsAuthenticated']),
  },
};
</script>
