import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import counterModule from './store_modules/counterModule';
import authModule from './store_modules/authModule';

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule
  }
});

const app = createApp(App);

app.use(store);
app.mount('#app');
