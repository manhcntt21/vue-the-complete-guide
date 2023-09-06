<template>
  <section>
    <base-card>
      <h2>Register as a Coach noe!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from './CoachForm.vue';
export default {
  components: { CoachForm },
};
</script>
