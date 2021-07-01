import authActions from './actions';
import authMutations from './mutations';
import authGetters from './getters';

export default {
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: authMutations,
  actions: authActions,
  getters: authGetters
};
