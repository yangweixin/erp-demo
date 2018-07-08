import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import HTTP from '@/utils/http';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/iconfront/iconfont.css'

Vue.config.productionTip = false;
Vue.prototype.$http = HTTP;
Vue.use(ElementUI);

router.beforeEach(
  (to, from, next) => {
    if(!!localStorage.token || (!localStorage.token && to.path === "/login"))
      next()
    else{
      next({
        path:"/login",
        query: {redirect: to.fullPath}//将目的路由地址存入login的query中
      })
    }
  }
  
)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
