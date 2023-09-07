<template>
  <section>
    <base-card>
      <header>Request Received</header>
      <ul v-if="hasRequests">
        <request-item
          v-for="request in receivedRequests"
          :key="request"
          :email="request.userEmail"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any request yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: {
    RequestItem,
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
