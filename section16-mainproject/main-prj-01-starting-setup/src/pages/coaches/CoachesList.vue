<template>
  <section>FILTER</section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register as Coach</router-link>
    </div>
    LIST OF COACHES

    <ul v-if="hasCoaches">
      <li v-for="coach in coaches" :key="coach.id">{{ coach.firstName }}</li>
    </ul>
    <h3 v-else>No coaches found</h3>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
  },
};
</script>
