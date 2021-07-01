import { createStore } from 'vuex';
import counterModule from './modules/counter/index';
import authModule from './modules/auth/index';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule
  }
});

export default store;
