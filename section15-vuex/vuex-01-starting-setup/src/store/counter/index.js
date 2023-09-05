import counterMuations from './mutations.js';
import counterGetters from './getters.js';
import counterActions from './actions.js';
export default {
  namespaced: true,
  // local state
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMuations,

  actions: counterActions,

  getters: counterGetters,
};
