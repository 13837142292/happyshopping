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

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
