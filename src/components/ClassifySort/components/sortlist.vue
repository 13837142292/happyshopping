<template>
  <div class="sortlist">
    <div class="top">
      <ul ref="myul">
        <li
          v-for="(item,index) in titleList"
          :key="index"
          @click="active(item,index)"
          :class="{active:cruli==index&&show==true}"
        >{{item}}</li>
        <li class="price" ref="price" @click="change">
          价格
          <span :class="{on:isShow==true,down:isshow==true}"></span>
        </li>
      </ul>
      <div class="select" @click="select" ref="mysel">
        筛选
        <span></span>
      </div>
    </div>

    <div class="con wrapper">
      <ul>
        <li v-for="(item,index) in sortList" :key="index">
          <img :src="item.img" alt />
          <div class="text">
            <p class="name">{{item.dract}}</p>
            <p class="detail">{{item.detail}}</p>
            <p>
              <span class="rectprice">{{item.rectPrice}}</span>
              <span class="price">{{item.price}}</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 弹出框 -->
    <model ref="mymodel" @more="getson"></model>
  </div>
</template>
<script>
import { getsortList } from "@/api";
import BScroll from "@better-scroll/core";
import model from "./model.vue";
export default {
  data() {
    return {
      con: "",
      sortList: [],
      bs: null,
      isShow: false,
      isshow: false,
      show: true,
      titleList: ["综合", "销量", "新品"],
      title: "综合",
      cruli: null,
      myli: [],
      min: null,
      max: null,
      click: false
    };
  },
  created() {
    this.getParams();
    this.title = "综合";
  },
  methods: {
   async getson(tit){
       window.console.log("触发事件",tit);
      this.sortList = await getsortList(this.con,tit);
    },
    getParams() {
      const routerParams = this.$route.query.serchcon;
      this.con = routerParams;
      window.console.log(this.con);
    },
    async change() {
      this.show = false;
      this.$refs.price.style.color = "#c4193f";
      if (this.isShow == true) {
        this.title = "价格上";
        this.sortList = await getsortList(this.con, this.title);
        this.isshow = true;
        this.isShow = false;
      } else if (this.isShow == false) {
        this.title = "价格下";
        this.sortList = await getsortList(this.con, this.title);
        this.isshow = false;
        this.isShow = true;
      }
    },
    async active(item, index) {
      this.cruli = index;
      this.title = item;
      this.sortList = await getsortList(this.con, this.title);
      this.show = true;
      this.$refs.price.style.color = "#333333";
      this.isshow = false;
      this.isShow = false;
    },
    select() {
      this.$refs.mymodel.show();
    }
  },
  async mounted() {  
    this.sortList = await getsortList(this.con, this.title);
    this.$nextTick(() => {
      //使用bscroll
      this.bs = new BScroll(".wrapper", {
        click: true
      });
    });
  },
  components: {
    model
  }
};
</script>
<style lang="less" scoped>
.sortlist {
  height: 100%;
  position: relative;
  z-index: 800;
  .top {
    height: 40px;
    width: 100%;
    background: #fff;
    border-bottom: 0.03px solid #ddd9d9;
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #333333;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    .select {
      width: 95px;
      border-left: 0.03px solid #ddd9d9;
      span {
        width: 12px;
        height: 12px;
        display: inline-block;
        background: url(../images/sy.png) no-repeat;
        background-size: auto 100%;
      }
    }
    ul {
      width: 280px;
      display: flex;
      // border-bottom: 0.03px solid #ddd9d9;
      li {
        height: 40px;
        width: 25%;
      }
      li.price {
        span {
          width: 14px;
          height: 14px;
          display: inline-block;
          background: url(../images/def.png) no-repeat;
          background-size: auto 100%;
          margin-left: 5px;
        }
      }
    }
  }

  .con {
    padding-top: 40px;
    height: calc(100% - 40px);
    ul {
      display: flex;
      flex-wrap: wrap;
      min-height: 100%;
      background: #f0f0f0;
      li {
        width: 180px;
        height:270px ;
        margin-left: 5px;
        margin-bottom: 5px;
        background: #fff;
        img {
          width: 100%;
        }
        .text {
          width: 100%;
          box-sizing: border-box;
          height: 90px;
          padding: 5px 8px;
          .name {
            color: #323232;
            height: 14px;
            line-height: 14px;
            overflow: hidden;
            font-size: 14px;
          }
          .detail {
            line-height: 18px;
            font-size: 14px;
            height: 36px;
            width: 100%;
            margin: 5px 0;
            overflow: hidden;
            color: #787878;
          }
          p {
            .rectprice {
              color: #c4193f;
              font-size: 16px;
            }
            .price {
              color: #959595;
              margin-left: 5px;
              text-decoration: line-through;
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.active {
  color: #c4193f;
}
.on {
  background: url(../images/up.png) no-repeat !important;
  background-size: auto 100% !important;
}
.down {
  background: url(../images/down.png) no-repeat !important;
  background-size: auto 100% !important;
}
// .sel {
//   height:40.4px;
//   position: relative;
//   z-index: 500;
//   background: #fff;
// }
</style>