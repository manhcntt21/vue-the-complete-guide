export default {
  addRequest(state, payload) {
    state.requests.push(payload.request);
  },

  setRequests(state, payload) {
    state.requests = payload.requests;
  },
};
