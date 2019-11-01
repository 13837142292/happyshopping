<template>
  <div class="top">
    <input type="text" name id placeholder="请输入您要搜索的内容" />
    <img src="../img/搜索.png" alt />
  </div>
</template>
<style scoped>
::-webkit-input-placeholder{
    color: #6d6d6d;
    font-size: 14px;
}
.top {
  position: relative;
  width: 100%;
  z-index: 999;
  display: flex;
  height: 30px;
  padding:10px 0px; 
  background-color: #fff;
  border-bottom: 1px solid #f3f5f5;
}
input {
  width:320px;
  height: 38px;
  line-height: 38px;
  border-radius: 5px;
  text-align: left;
  background-color: #eeeff1;
  color: #939393;
  font-size: 15px;
  margin: 0 auto;
  padding-left: 30px;
  outline: none;
}
img {
  width: 20px;
  height: 20px;
  position: absolute;
  top:50%;
  left:5%;
  transform: translateY(-25%)
}
</style>