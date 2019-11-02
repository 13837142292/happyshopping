<template>
   
    <div class="box">
        <!-- top -->
        <div class="top">
            注册
             <a href="#/userTop" class="im"><img src="../images/jt.png" alt="返回"></a>
        </div>
        <!-- 图形验证码 -->
<div class="user-box">
             <div class="user-db">
            <div class="fl">
            <img src="../images/yzm2.png" alt="">
            </div>
            <div class="fr">
            <input ref="id" type="text"  placeholder="请输入图形验证码">
            </div>
            <div class="tx">
                <img src="../images/yzm.jpg" alt="">
            </div>
        </div>


            <!-- 手机号 -->
        <div class="user-db">
            <div class="fl">
            <img src="../images/call.png" alt="">
            </div>
            <div class="fr">
            <input ref="id" type="text" v-model="loginForm.username" placeholder="请输入手机号">
            </div>
        </div>
            <!-- 验证码 -->
            <div class="user-db">
             <div class="fl">
            <img src="../images/yzm3.png" alt="">
            </div>
            <div class="fr">
            <input ref="passworld" type="text"   placeholder="请输入验证码">
            </div>
            <div class="yzm">
            获取验证码
            </div>
            </div>
            <!-- 密码 -->
            <div class="user-db">
             <div class="fl">
            <img src="../images/suo.png" alt="">
            </div>
            <div class="fr">
            <input ref="passworld" type="text" v-model="loginForm.password"  placeholder="请输入密码">
            </div>
            <div class="mm">
            <img  :src="yanjing" alt="" @click="changeImg">
            </div>
        </div>
         <button class="dl-but" @click="logon">注册</button>
         <!-- 服务条款 -->
         <div class="user-db">
             注册即表示同意快乐购
             <router-link to="/fuwu">《用户服务协议》</router-link>
             条款
         </div>
         <!-- 底部 -->
         <div class="user-buttom">
             遇到问题？请联系客服：
             <a href="tel:400-705-1111">400-705-1111</a>
         </div>
    </div>
    </div>
</template>
<script>
import { mapMutations } from "vuex";

import Fetchasync from "./login.js";
export default {
    data(){
        return{
             yanjing:require('../images/yanjing1.png'),
             id:true,
        loginForm:{
            username:'',
            password:''
        }
        }
    },
    methods:{
        changeImg(){
            this.id=!this.id;
            // imgChange(this.id);
             if(this.id){
                this.yanjing=require("../images/yanjing1.png")
            }else{
                this.yanjing=require("../images/yanjing2.png")
            }

        },
        ...mapMutations(["changeLogin"]),
    logon() {
        window.console.log(this.loginForm)
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
          var _this=this;
        Fetchasync.postFatch("login/login", this.loginForm,_this);
      }
    }
}
}
</script>
<style lang="less" scoped>
.top{
    width: 100%;
    height: 40px;
    overflow: hidden;
    border-bottom: 1px solid #e1e1e1;
    background: #fff;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #1e1e1e;
    position: relative;
    .im{
    display: block;
    width: 30px;
    height: 30px;
    position: absolute;
    left: 0;
    top: 5px;
    img{
        width: 100%;
        height: 30px;
            border: medium none;
    margin: 0;
    padding: 0;
    vertical-align: top;
    }
    }
    
    
}
.user-box{
    background-image: url('../images/bg.jpg');
    width: 100%;
    overflow: hidden;
    .user-db{
    width: 80%;
    margin: 10px auto 0 auto;
    height: 45px;
    overflow: hidden;
    border-bottom: 1px solid #e1e1e1;
    input{
    font-family: "微软雅黑", Helvetica;
    border: none;
    background: none;
    
    }
    .fl{
    width: 30px;
    height: 30px;
    float: left;
    margin-top: 7px;
    }
    .fr{
     width: 60%;
    float: left;
    height: 45px;
    overflow: hidden;
    input{
    width: 100%;
    height: 35px;
    line-height: 35px;
    font-size: 16px;
    margin-top: 10px;
    }
    }
    .mm{
        width: 20px;
    height: 12px;
    margin-right: 3%;
    float: right;
    margin-top: 17px;
    // background: url(../images/eye1.png) no-repeat scroll 0 0;
    background-size: 100% 100%;
    }
    .tx{
    width: 30%;
    height: 45px;
    float: right;
    // overflow: hidden;
    img{
        width: 100%;
        // height: 27px;
    }
        }
        .yzm{
    width: 25%;
    height: 45px;
    float: right;
    line-height: 45px;
    color: #85747a;
    text-align: center;
        }
    }
    .user-buttom{
        width: 100%;
    overflow: hidden;
    position: relative;
    margin-top: 110px;
    text-align: center;
    }
    }

// button{
//     -webkit-appearance: button;
//     -webkit-writing-mode: horizontal-tb !important;
//     text-rendering: auto;
//     color: buttontext;
//     letter-spacing: normal;
//     word-spacing: normal;
//     text-transform: none;
//     text-indent: 0px;
//     text-shadow: none;
//     display: inline-block;
//     text-align: center;
//     align-items: flex-start;
//     cursor: default;
//     background-color: buttonface;
//     box-sizing: border-box;
//     margin: 0em;
//     font: 400 13.3333px Arial;
//     padding: 1px 6px;
//     border-width: 2px;
//     border-style: outset;
//     border-color: buttonface;
//     border-image: initial;
// }
.dl-but{
    width: 80%;
    margin: 20px 10%;
    background: #94193f;
    color: #fff;
    height: 35px;
    text-align: center;
    line-height: 35px;
    font-size: 16px;
    border:none;
    border-radius: 10px;
}
</style>