<template>
  <section>
    <base-card>
      <h2>Register as a Coach noe!</h2>
      <coach-form @save-data="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import CoachForm from './CoachForm.vue';
export default {
  components: { CoachForm },
  methods: {
    ...mapActions('coaches', ['registerCoach']),
    saveData(data) {
      console.log(data);
      this.registerCoach({ coach: data });
      // cannot go back
      this.$router.replace('/coaches');
    },
  },
};
</script>
