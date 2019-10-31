<template>
  <div class="sortlist">
    <div class="top">
      <ul ref="myul">
        <li
          v-for="(item,index) in titleList"
          :key="index"
          @click="active(index)"
          :class="{active:cruli==index}"
        >{{item}}</li>
        <!-- <li >销售</li>
        <li :class="{active:show==true}">新品</li>-->
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
    <model ref="mymodel"></model>
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
      titleList: ["综合", "销售", "新品"],
      cruli: 0
    };
  },
  created() {
    this.getParams();
  },
  methods: {
    getParams() {
      const routerParams = this.$route.query.serchcon;
      this.con = routerParams;
      window.console.log(this.con);
    },
    change() {
      this.$refs.price.style.color = "#c4193f";
      if (this.isShow) {
        this.isshow = true;
        this.isShow = false;
      } else {
        this.isshow = false;
        this.isShow = true;
      }
    },
    active(index) {
      this.cruli = index;
    },
    select() {
      this.$refs.mymodel.show();
      this.$refs.mysel.style.border="none";
    }
  },
  async mounted() {
    this.sortList = await getsortList(this.con);
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
    
       border-bottom: 0.03px solid #ddd9d9;
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
      border-bottom: 0.03px solid #ddd9d9;
      li {
        height: 40px;
        width: 25%;
      }
      li.price {
          border-right: 0.03px solid #ddd9d9;
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
  //   .sel{
  //       width: 100%;
  //       height: 270px;
  //   }
  .con {
    padding-top: 40px;
    height: calc(100% - 40px);
    ul {
      display: flex;
      flex-wrap: wrap;
      background: #f0f0f0;
      li {
        width: 180px;
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
</style>