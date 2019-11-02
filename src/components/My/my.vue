<template >
  <div>
    <div class="us_box" > 
      <img
        src="https://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/b151f8198618367a3ced6fbf2c738bd4b31ce568.jpg"
        class="user-logo"
        onclick="toUrl('/Setting/baseInfo')"
      />
      
      <div class="user-info">
        <font class="username">青曦</font>
       
          <img src="https://ecimg.happigo.com/data/upload/member/level/mvip1.png" />
       
      </div>
    </div>

    <!--订单信息-->
    <div class="order">
      <div class="title border-1px">
        <span>我的订单</span>
      </div>
      <div class="order-tab clearfloat">
        <div>
          <img src="./img/dfk.png" />
          <p>待付款</p>
        </div>
        <div>
          <img src="./img/dsh.png" />
          <p>待收货</p>
        </div>
        <div>
          <img src="./img/dpj.png" />
          <p>待评价</p>
        </div>
        <div>
          <img src="./img/th.png" />
          <p>退货/款</p>
        </div>
      </div>
    </div>
    <!--我的资产-->
    <div class="order">
      <div class="title border-1px">
        <span>我的资产</span>
      </div>
      <div class="asset-tab clearfloat">
        <div>
          <font>0</font>
          <p>快乐币</p>
        </div>
        <div>
          <font>0</font>
          <p>优惠券</p>
        </div>
      </div>
    </div>

    <!--列表-->
    <div class="items">
      <ul>
        <li class="border-1px">
          <span>
            <img src="./img/shdz.png" />
          </span> <a href="javascript:void(0)">收货地址</a>
          <img src="./img/right.png" class="arrow" />
        </li>

        <li id="yushou" class="border-1px">
          <span>
            <img src="./img/wdys.png" />
          </span>
          <router-link to="mypay">我的预售</router-link>
          <img src="./img/right.png" class="arrow" />
        </li>
        <li class="border-1px">
          <span>
            <img src="./img/like.png" />
          </span>
          <router-link to="mylike">我的收藏</router-link>
          <img src="./img/right.png" class="arrow" />
        </li>

        <li id="record" class="border-1px">
          <span>
            <img src="./img/wdzj.png" />
          </span><a href="javascript:void(0)">我的足迹</a>
          <img src="./img/right.png" class="arrow" />
        </li>

        <li class="border-1px">
          <span>
            <img src="./img/help.png" />
          </span>
          <router-link to="help">帮助反馈</router-link>
          <img src="./img/right.png" class="arrow" />
        </li>
        <li class="border-1px">
          <span>
            <img src="./img/hyqy.png" />
          </span>
          <router-link to="vip">会员权益</router-link>
          <img src="./img/right.png" class="arrow" />
        </li>
        <li class="border-1px">
          <span>
            <img src="./img/zhsz.png" />
          </span>
          <router-link to="set">账号设置</router-link>
          <img src="./img/right.png" class="arrow" />
        </li>

        <!-- <li id="open_app" class="border-1px" ><span><img src="./img/oppn.png"></span>打开APP</router-link><img src="./img/right.png" class="arrow"></li> -->
      </ul>
    </div>
    <div class="items">
      <ul>
        <li class="border-1px" style="text-align:center;">
          <font color="red" style="padding-bottom:50px;" @click="clearToken">退出当前账户</font>
        </li>
      </ul>
    </div>
      <router-view></router-view>
  </div>

</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods:{
        clearToken(){
            window.localStorage.removeItem('Authorization');
            this.$router.push('userTop')
        }
    }
}
</script>
<style scoped>
.us_box {
    width: 100%;
  background-color: #fff;
  padding: 25px 0;
  text-align: center;
  margin-bottom: 10px;
}

.user-logo {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  margin: 0 auto;
}

.login {
  margin-top: 15px;
}

.login span {
  position: relative;
  color: #1e1e1e;
  font-size: 0.93em;
  display: inline-block;
  padding: 5px 16px;
  border: 1px solid #000;
  border-radius: 5px;
}

.user-info {
    width: 100%;
  margin-top: 8px;
  margin: 0 auto;
 

}
.user-info img{
    width: 60px;
    height: 16px;
     margin: 0 auto;
}
.username {
  font-size: 1.28em;
}

.grade {
  color: #5a5a5a;
  font-size: 1.07em;
  line-height: 1em;
  margin-top: 5px;
}

.grade img {
  height: 1em;
  width: auto;
  margin-right: 3px;
}
.order {
  background-color: #fff;
  margin-bottom: 10px;
}

.title {
  padding: 10px 10px 10px 15px;
  position: relative;
 
}

.title span {
    display: block;
  font-size: 1.07em;
   margin-top: 20px;
}

.title font {
  color: #969696;
  font-size: 0.93em;
  margin-top: 0.2em;
}

.title font img {
  height: 0.8em;
  width: auto;
  margin-top: 0.3em;
  margin-left: 5px;
}

.order-tab {
  padding: 15px 2%;
}

.order-tab > div {
  position: relative;
  float: left;
  width: 25%;
  text-align: center;
  color: #5a5a5a;
  font-size: 0.93em;
  
}

.order-tab > div img {
  height: 1.5em;
  width: auto;
  margin-bottom: 5px;
  margin: 0 auto;
}

.order-tab > div font {
  position: absolute;
  display: block;
  top: -0.8em;
  right: 24%;
  color: #fff;
  font-size: 0.857em;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 50%;
  background: -webkit-linear-gradient(
    135deg,
    rgba(195, 31, 58, 0.9),
    rgba(240, 43, 76, 0.9)
  );
}

/*我的资产*/
.asset-tab > div {
  position: relative;
  float: left;
  width: 50%;
  text-align: center;
  margin: 15px 0;
}

.asset-tab > div:first-child:before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 1px;
  transform-origin: 0 0;
  -webkit-transform-origin: 0 0;
  background-color: #d2d2d2;
}

.asset-tab > div font {
  color: #1e1e1e;
  font-size: 1.07em;
}

.asset-tab > div p {
  color: #5a5a5a;
  font-size: 0.93em;
  margin-top: 3px;
}

/*列表*/
.items {
  background-color: #fff;
  padding: 0 10px;
  margin-bottom: 10px;
}

.items li {
  position: relative;
  padding: 15px 0;
  font-size: 1.07em;
  color: #1e1e1e;
  line-height: 1.2em;
}

.items span {
  display: inline-block;
  width: 1.8em;
  margin-left: 5px;
}

.items span img {
  height: 1.2em;
  width: auto;
}

.arrow {
  float: right;
  height: 0.8em;
  width: auto;
  margin-top: 0.2em;
}

li {
  list-style: none;
}
</style>