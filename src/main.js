import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'styles/reset.css';
import 'styles/border.css';
import 'styles/iconfont.css';
import 'styles/common.scss';

import 'js/fastclick.js';
import 'js/common.js';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
