import { createApp } from 'vue';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import router from './router';
const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);
app.mount('#app');
