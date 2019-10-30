<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <NavList></NavList>
    <router-view></router-view>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavList from "./common/comComp/NavList.vue"

export default {
  name: 'app',
  components: {
    NavList
  }
}
</script>

<style>
html,body{
  height: 100%;
}
#app{
  height: 100%;
}
</style>
