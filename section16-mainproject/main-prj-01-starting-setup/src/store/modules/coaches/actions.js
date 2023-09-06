export default {
  registerCoach(conext, payload) {
    payload.coach.id = conext.rootGetters.userId;
    conext.commit('registerCoach', payload);
  },
};
