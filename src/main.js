import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../src/common/css/fonts.css"
import"../src/common/css/reset.css"
import "lib-flexible"
import Vuex from 'vuex'
import store from "./store/shoppingcart.js"
Vue.use(Vuex)
Vue.config.productionTip = false

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/userTop'|| to.path==='/home'||to.path==='/classifySort'||to.path=="/login") {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
 
    if (token === null || token === '') {
      next('/userTop');
    } else {
      next();
    }
  }
});
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
