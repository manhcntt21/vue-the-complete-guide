import { createApp } from 'vue';

import App from './App.vue';

import { createStore } from 'vuex';
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    // synchronous code
    increment(state) {
      state.counter = state.counter + 2;
    },

    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  actions: {
    increment(context) {
      // gia tri o day la mutation
      // run asynchronous code
      setTimeout(function () {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      // gia tri o day la mutation
      // run asynchronous code
      console.log(context);
      setTimeout(function () {
        context.commit('increase', payload);
      }, 2000);
    },
  },
  getters: {
    finalCounter(state) {
      return state.counter * 3;
    },

    normalizeCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      return finalCounter > 100 ? 100 : finalCounter < 0 ? 0 : finalCounter;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
