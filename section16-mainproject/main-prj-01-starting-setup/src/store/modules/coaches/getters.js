export default {
  coaches(state) {
    return state.coaches;
  },

  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },

  // isCoach(state, getters, rootState, rootGetters)
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    // console.log(coaches, userId);
    return coaches.some((coach) => coach.id === userId);
  },

  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimesTamp = new Date().getTime();
    return (currentTimesTamp - lastFetch) / 1000 > 60; // 1 minute
  },
};
