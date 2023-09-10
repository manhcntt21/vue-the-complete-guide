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
import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import userAlert from '../hooks/alert.js';
export default {
  components: {
    UserAlert,
  },
  setup() {
    const { alertIsVisible, showAlert, hideAlert } = userAlert(true);
    const alertTitle = ref('Delete User?');
    return { alertIsVisible, showAlert, hideAlert, alertTitle };
  },
};
</script>
