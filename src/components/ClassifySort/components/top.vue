<template>
  <div class="top" @click="tiao">
    <input type="text" name id placeholder="搜索商品,品牌" />
    <img src="../images/搜索.png" alt />
  </div>
</template>
<script>
export default {
  methods:{
    tiao(){ 
          this.$router.replace('/serch')
    }
  }
}
</script>
<style scoped>
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
  outline:none;
  width:340px;
  height: 30px;
  line-height: 30px;
  border-radius: 25px;
  text-align: center;
  background-color: #f3f5f5;
  color: #939393;
  font-size: 14px;
  margin-left:15px; 
}
img {
  width: 16px;
  height: 16px;
  position: absolute;
  top:35%;
  left: 33%;
}
</style>