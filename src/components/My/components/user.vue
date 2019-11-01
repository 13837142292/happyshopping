<template>
  <div class="box">
    <div class="user-db">
      <img src="../images/call.png" alt />
      <input ref="id" type="text" v-model="loginForm.username" placeholder="请输入邮箱、会员名或手机号" />
    </div>
    <div class="user-db">
      <img src="../images/suo.png" alt />
      <input ref="passworld" type="text" v-model="loginForm.password" placeholder="请输入登录密码" />
      <img class="yzm" :src="yanjing" alt @click="changeImg" />
    </div>
    <div class="user-db">
      <img src="../images/yzm.png" alt />
      <input ref="yzm" type="text" placeholder="请输入验证码" />
      <img src="yanjing" alt />
    </div>
    <button @click="logon">登录</button>
    <div class="user-db" style="border-bottom:none">
      <a href="javascript:void(0);" @click="toLogin">新用户注册</a>
      <!-- <router-link to="/login">新用户注册</router-link> -->

      <a class="right" href="javascript:void(0);">忘记密码?</a>
    </div>
    <div class="orDiv">
      <img class="or" src="../images/or.png" alt />
    </div>
  </div>
</template>
<script>
import { mapMutations } from "vuex";

import Fetchasync from "./login.js";

export default {
  data() {
    return {
      yanjing: require("../images/yanjing1.png"),
      id: true,
      loginForm: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    toLogin() {
    //   this.$router.replace("/login");
        // window.console.log(this.$router)
        this.$router.push("/login")
    },
    changeImg() {
      this.id = !this.id;
      // imgChange(this.id);
      if (this.id) {
        this.yanjing = require("../images/yanjing1.png");
      } else {
        this.yanjing = require("../images/yanjing2.png");
      }
    },
    ...mapMutations(["changeLogin"]),
    logon() {
      // this.loginForm.username=this.$refs.id.value;
      // window.console.log(this.$refs.id.value)
      // window.console.log(this.loginForm.username)
      // this.loginForm.password=this.$refs.password.value;
      // window.console.log(this.loginForm)
      if (this.loginForm.username === "" || this.loginForm.password === "") {
        alert("账号或密码不能为空");
      } else {
          var _this=this;
        Fetchasync.postFatch("users/users", this.loginForm,_this);
      }
    }
    //     logon(){
    //         let _this = this;
    //         // this.loginForm.username=this.$refs.id.value;
    //         // this.loginForm.password=this.$refs.password.value;
    //         // if(){
    //         //      this.loginForm.username=this.$refs.id.value;
    //         //     this.loginForm.password=this.$refs.password.value;

    //         // }

    //   if (this.loginForm.username === '' || this.loginForm.password === '') {
    //     alert('账号或密码不能为空');
    //   } else {
    //     this.axios({
    //       method: 'post',
    //       url: '/users/users',
    //       data: _this.loginForm
    //     }).then(res => {
    //     //   console.log(res.data);
    //       _this.userToken = 'Bearer ' + res.data.data.body.token;
    //       // 将用户token保存到vuex中
    //       _this.changeLogin({ Authorization: _this.userToken });
    //       _this.$router.push('/my');
    //       alert('登陆成功');
    //     }).catch(error => {
    //       alert('账号或密码错误');
    //       window.console.log(error);
    //     });
    //   }
    // }
  }
};
</script>
<style lang="less" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  .user-db {
    border-bottom: 1px solid #ccc;
    width: 80%;
    height: 46px;
    // margin-left: 10%;
    margin: 0 auto;
    padding-top: 10px;
    margin-bottom: 20px;
    .yzm {
      width: 30px;
      height: 20px;
      float: right;
    }
    .right {
      float: right;
    }
    .bottom {
      border-bottom: none;
    }
  }
  .orDiv {
    width: 100%;
    .or {
      width: 100%;
      // margin-top: 20px;
    }
  }
  input {
    width: 60%;
    height: 20px;
    border: none;
  }
}

img {
  width: 16px;
  height: 16px;
  margin-top: 20px;
  display: inline-block;
}
button {
  width: 80%;
  height: 35px;
  background: #94193f;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  margin: 0 auto;
}
</style>