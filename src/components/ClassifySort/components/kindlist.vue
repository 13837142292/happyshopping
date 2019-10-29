<template>
  <div class="con">
    <div class="con_left wrapper">
      <ul>
        <li
          @click="getcon(index,item.id)"
          v-for="(item,index) in leftList"
          :key="index"
          :class="{active:cruentLi === index}"
        >
          <i :class="{active_i:cruentLi === index}"></i>
          {{item.tit}}
        </li>
      </ul>
    </div>
    <div class="con_right wrapper_right">
      <ul class="all">
        <li v-for="(ite,index) in rightList" :key="index" class="box">
          <div>
            <span></span>
            {{ite.title}}
            <span></span>
          </div>
          <ul>
            <li v-for="(item,index) in ite.list" :key="index">
              <img :src="item.img" alt />
              <p>{{item.msg}}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getleftList, getrightList } from "@/api";
import BScroll from "@better-scroll/core";
export default {
  data() {
    return {
      leftList: [],
      cruentLi: 0,
      bs: null,
      bs1: null,
      rightList: []
    };
  },
  async mounted() {
    this.leftList = await getleftList();
    this.rightList = await getrightList(this.leftList[0].id);
    this.$nextTick(() => {
      //使用bscroll
      this.bs = new BScroll(".wrapper", {
        click: true
      });
      this.bs1 = new BScroll(".wrapper_right", {
        click: true
      });
    });
  },
  methods: {
    async getcon(index, id) {
      this.cruentLi = index;
      this.rightList = await getrightList(id);
      this.$nextTick(() => {
        this.bs1.refresh();
      });
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
      i {
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
.active_i {
  background: #c4193f;
}
.con_right {
  height: 100%;
  width: 278px;
  color: #343434;
  ul.all {
    padding: 15px 0px;
    li.box {
      padding: 15px 0px;
      text-align: center;
      border-bottom: 1px solid #f3f5f5;
      div {
        width: 100%;
        height: 30px;
        text-align: center;
        font-size: 14px;
        line-height: 30px;
        span {
          width: 27px;
          height: 1px;
          background: #f0f1f1;
          display: inline-block;
          margin-bottom: 4.5px;
        }
      }
      ul {
        display: flex;
        flex-wrap: wrap;

        li {
          width: calc(100% / 3);
          height: 110px;
          text-align: center;
          font-size: 13px;
          img {
            width: 80px;
            height: 80px;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
</style>