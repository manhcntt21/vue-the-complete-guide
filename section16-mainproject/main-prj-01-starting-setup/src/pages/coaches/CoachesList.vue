<template>
  <div>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="handleError"
    >
      <p>{{ error }}</p>
    </base-dialog>
    <section>
      <coach-filter @change-filter="setFilter"></coach-filter>
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button mode="outline" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <base-button v-if="!isCoach && !isLoading" link to="/register"
            >Register as Coach</base-button
          >
        </div>
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <ul v-if="!this.isLoading && hasCoaches">
          <coach-item v-for="coach in coaches" :key="coach.id" v-bind="coach">
          </coach-item>
        </ul>
        <h3 v-else>No coaches found</h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';
export default {
  components: { CoachItem, CoachFilter },
  data() {
    return {
      activeFilter: { frontend: true, backend: true, carrer: true },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    ...mapGetters('coaches', ['hasCoaches', 'isCoach']),
    ...mapGetters('requests', ['requests']),
    coaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilter.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    // coachesList() {
    //   return this.coaches.filter((coach) => {
    //     if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
    //       return true;
    //     }
    //     if (this.activeFilter.backend && coach.areas.includes('backend')) {
    //       return true;
    //     }
    //     if (this.activeFilter.carrer && coach.areas.includes('carrer')) {
    //       return true;
    //     }
    //     return false;
    //   });
    // },

    // hasCoachesU() {
    //   return this.coachesList && this.coachesList.length > 0;
    // },
  },
  created() {
    this.loadCoaches();
  },

  methods: {
    setFilter(updateFilter) {
      // console.log(updateFilter);
      this.activeFilter = updateFilter;
    },

    async loadCoaches(refresh = false) {
      try {
        this.isLoading = true;
        await this.$store.dispatch('coaches/loadCoaches', {
          forceRefresh: refresh,
        });
        this.isLoading = false;
      } catch (error) {
        // console.error(error);
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
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
