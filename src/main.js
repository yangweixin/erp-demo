import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HTTP from '@/utils/http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
