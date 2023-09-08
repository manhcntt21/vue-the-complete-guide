import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  state() {
    return {
      userId: null,
      token: null,
      didAutoLogout: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
