<template>
  <base-dialog :show="!!error" title="An error occurred!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>Request Received</header>
      <div v-if="isLoading">
        <base-spinner></base-spinner>
      </div>
      <ul v-if="!isLoading && hasRequests">
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
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },

    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },

  created() {
    this.loadRequets();
  },

  methods: {
    async loadRequets() {
      try {
        this.isLoading = true;
        await this.$store.dispatch('requests/loadRequests');
        this.isLoading = false;
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
    },
    handleError() {
      this.error = null;
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
