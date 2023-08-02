import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import BaseButton from './components/BaseButton.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('base-button', BaseButton);

app.mount('#app');
