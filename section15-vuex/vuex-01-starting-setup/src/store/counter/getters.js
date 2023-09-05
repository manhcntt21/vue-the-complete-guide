export default {
  // testAuth(state, getters, rootStates, rootGetters) {
  //   console.log(state);
  //   console.log(getters);
  //   console.log(rootStates);
  //   console.log(rootGetters);
  //   return state.isLoggedIn;
  // },
  finalCounter(state) {
    return state.counter * 3;
  },

  normalizeCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    return finalCounter > 100 ? 100 : finalCounter < 0 ? 0 : finalCounter;
  },
};
