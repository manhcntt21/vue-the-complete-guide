export default {
  // synchronous code
  setAuth(state, payload) {
    state.isLoggedIn = payload.isAuth;
  },
};
