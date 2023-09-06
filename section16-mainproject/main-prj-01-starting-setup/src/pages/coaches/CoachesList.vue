<template>
  <section>
    <coach-filter @change-filter="setFilter"></coach-filter>
  </section>
  <section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button link to="/register">Register as Coach</base-button>
      </div>
      <ul v-if="hasCoachesU">
        <coach-item v-for="coach in coachesList" :key="coach.id" v-bind="coach">
        </coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
  <!-- {{ this.coachesList }}
  {{ this.coaches }} -->
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
    };
  },
  computed: {
    ...mapGetters('coaches', ['coaches', 'hasCoaches']),
    // coaches() {
    //   console.log('a');
    //   const coaches = this.$store.getters['coaches/coaches'];
    //   return coaches.filter((coach) => {
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
    coachesList() {
      return this.coaches.filter((coach) => {
        if (this.activeFilter.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilter.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilter.carrer && coach.areas.includes('carrer')) {
          return true;
        }
        return false;
      });
    },

    hasCoachesU() {
      return this.coachesList && this.coachesList.length > 0;
    },
  },
  methods: {
    setFilter(updateFilter) {
      // console.log(updateFilter);
      this.activeFilter = updateFilter;
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
