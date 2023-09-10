<template>
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import alertMixins from '../mixins/alert.js';
export default {
  // component win, no ghi de bien neu trung
  data() {
    return {
      alertTitle: 'Delete the User?',
      alertIsVisible: true,
    };
  },
  mixins: [alertMixins],
};
</script>
