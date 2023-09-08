import actions from './actions';
import getters from './getters';
import mutations from './mutations';

export default {
  state() {
    return {
      userId: 'c3',
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
