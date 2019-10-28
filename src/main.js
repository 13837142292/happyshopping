import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "../src/common/css/fonts.css"
import"../src/common/css/reset.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
