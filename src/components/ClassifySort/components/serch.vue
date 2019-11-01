<template>
  <div class="serch">
    <div class="s_top">
      <img @click="goback" src="../images/左箭头.png" alt class="jiantou" />
      <div class="serch_input">
        <input type="text" placeholder="酸奶" ref="input" />
        <img src="../images/搜索.png" alt class="query" />
      </div>
      <button @click="gotolist">搜索</button>
    </div>
    <div class="s_hot">
      <ul class="box">
        <li v-for="(ite,index) in serchList" :key="index" class="box_li">
          <div>{{ite.title}}</div>
          <ul>
            <li
              :class="{on:item.txt==='羽绒服'||item.txt==='雅诗兰黛'}"
              v-for="(item,index) in ite.con"
              :key="index"
            >{{item.txt}}</li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getserchList } from "@/api";
export default {
  data() {
    return {
      serchList: []
    };
  },
  async created() {
    this.serchList = await getserchList();
  },
  methods: {
    goback() {
      this.$router.replace("/classifySort");
    },
    gotolist() {
      var text = this.$refs.input.value;
      window.console.log(text);
      this.$router.push({
        path: "/sortlist",
        query: {
            serchcon:text
        }
      });
    }
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
.on {
  color: #c4193f !important;
  background-color: #fbe9e9 !important;
}
.serch {
  height: 100%;
  position: relative;
  background: #fff;
  z-index: 10000;
  .s_top {
    width: 100%;
    height: 32px;
    margin: 10px 0px;
    display: flex;
    img.jiantou {
      width: 30px;
      height: 25px;
      padding: 4px 3px;
    }
    .serch_input {
      position: relative;
      height: 32px;
      flex: 1;
      background-color: #f3f5f5;
      border-radius: 20px;
      font-size: 13px;
      padding: 0 8px;
      img.query {
        width: 15px;
        height: 15px;
        margin: 10px 0px;
      }
      input {
        width: 80%;
        height: 100%;
        position: absolute;
        left: 25px;
        background: #f3f5f5;
        outline: none;
        color: #191919;
        font-size: 13px;
      }
    }
    button {
      background-color: #3985ff;
      color: #fff;
      line-height: 32px;
      display: inline-block;
      font-size: 14px;
      border-radius: 4px;
      border: none;
      padding: 0 12px;
      margin-left: 8px;
      margin-right: 5px;
    }
  }
  .s_hot {
    margin-top: 20px;
    padding: 0px 10px;
    ul.box {
      li.box_li {
        width: 100%;
        height: 130px;
        div {
          padding-left: 10px;
          font-size: 15px;
          color: #1e1e1e;
        }
        ul {
          display: flex;
          flex-wrap: wrap;

          li {
            line-height: 32px;
            width: auto;
            margin: 10px 0px 0px 10px;
            border-radius: 3px;
            font-size: 14px;
            padding: 0px 12px;
            height: 32px;
            color: #6d6d6d;
            background: #f3f5f6;
          }
        }
      }
    }
  }
}
</style>

