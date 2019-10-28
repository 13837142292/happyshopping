<template>
  <ul class="myUl">
    <router-link tag="li" to="/home">
      <i class="iconfont icon-tianchongxing-"></i>
      首页
    </router-link>
    <router-link tag="li" to="/classifySort">
      <i class="iconfont icon-fenlei"></i>
      分类
    </router-link>
    <router-link tag="li" to="/shoppingCart">
      <i class="iconfont icon-gouwuche"></i>
      购物车
    </router-link>
    <router-link tag="li" to="/my">
      <i class="iconfont icon-xiazai"></i>
      我的2
    </router-link>
  </ul>
</template>
<style lang="less" scoped>

.myUl {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  background-color: #ffffff;
  z-index:99;
}
.myUl li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    margin-left: 0;
  
}
.myUl li i{
    font-size: 22px;
}
.router-link-active{
    color: brown
}
</style>