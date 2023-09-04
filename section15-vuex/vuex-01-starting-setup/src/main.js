import { createApp } from 'vue';

import App from './App.vue';

import { createStore } from 'vuex';

const counterModule = {
  // local state
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 2;
    },

    increase(state, payload) {
      console.log(state);
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
      console.log(context.state);
      setTimeout(function () {
        context.commit('increase', payload);
      }, 2000);
    },
  },

  getters: {
    testAuth(state, getters, rootStates, rootGetters) {
      console.log(state);
      console.log(getters);
      console.log(rootStates);
      console.log(rootGetters);
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 3;
    },

    normalizeCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      return finalCounter > 100 ? 100 : finalCounter < 0 ? 0 : finalCounter;
    },
  },
};
const store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      isLoggedIn: false,
    };
  },
  mutations: {
    // synchronous code
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});
const app = createApp(App);
app.use(store);
app.mount('#app');
