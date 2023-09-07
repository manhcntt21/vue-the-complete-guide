export default {
  // requests(state, getters, rootState, rootGetters)
  requests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userId;
    // console.log(state.requests);
    return state.requests.filter((request) => request.coachId === coachId);
  },
  //   state, getters
  hasRequests(_, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
