import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../src/common/css/fonts.css"
import"../src/common/css/reset.css"
import "lib-flexible"
import Vuex from 'vuex'
import store from "./store/shoppingcart.js"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../dist/error.png',
  loaded: '../dist/error.png',
  attempt: 1
})
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
