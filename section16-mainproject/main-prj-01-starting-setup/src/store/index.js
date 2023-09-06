import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestsModule from './modules/requests/index.js';
const store = createStore({
  modules: {
    coaches: coachesModule,
    request: requestsModule,
  },

  state() {
    return {
      userId: 'c3',
    };
  },

  mutations: {},
  actions: {},
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
