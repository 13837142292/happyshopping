<template>
  <div class="con">
    <div class="con_left wrapper">
      <ul>
        <li
          @click="getcon(index)"
          v-for="(item,index) in leftList"
          :key="index"
          :class="{active:cruentLi === index}"
        ><i :class="{active_i:cruentLi === index}"></i>{{item}}</li>
      </ul>
    </div>
    <div class="con_right"></div>
  </div>
</template>
<script>
import { getleftList } from "@/api";
import BScroll from '@better-scroll/core';
export default {
  data() {
    return {
      leftList: [],
      cruentLi:0,
      bs:null
    };
  },
  async mounted() {
    this.leftList = await getleftList();
     this.$nextTick(() => {
     //使用bscroll
      this.bs = new BScroll(".wrapper", {
          click:true
      });
    });
  },
  methods: {
    getcon(index) {
      this.cruentLi = index;
      
    }
  }
};
</script>
<style lang="less" scoped>
.con {
  height: calc(100% - 100px);
  width: 100%;
  display: flex;
  overflow: hidden;
}
.con_left {
  width: 95px;
  height: 100%;
  border-right: 1px solid #f3f5f5;
  ul {
    li {
      width: 100%;
      height: 40px;
      text-align: center;
      font-size: 15px;
      line-height: 40px;
      color: #939393;
      margin-bottom: 15px;
      position: relative;
      i{
          width: 5px;
          height: 15px;
          display: inline-block;
          position: absolute;
          top: 10px;
          left: 0;
      }
    }
  }
}
.active {
  color: #c4193f !important;
}
.active_i{
    background: #c4193f;
}
</style>