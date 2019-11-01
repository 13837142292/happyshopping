<template>
    <div class="box">
        <div class="user-db">
            <img src="../images/call.png" alt="">
            <input type="text" placeholder="请输入手机号">
        </div>
       
        <div class="user-db">
            <img src="../images/yzm2.png" alt="">
            <input type="text" placeholder="请输入验证码">
            <!-- <img  src="yanjing" alt="" > -->
            <input type="button" value="获取验证码" class="hq"/>
        </div>
        <button>登录</button>
        <div class="user-db" style="border-bottom:none" >
            <a href="javascript:void(0);">新用户注册</a>
            <a class="right" href="javascript:void(0);">忘记密码?</a>
        </div>
        <div class="orDiv">
            <img class="or" src="../images/or.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            yanjing:require('../images/yanjing1.png'),
            id:true
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

        }
    }
}
</script>
<style lang="less" scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    left:0;
    right:0;
    top:0;
    bottom: 0;
    .user-db{
        border-bottom: 1px solid #ccc;
        width: 80%;
        height: 46px;
        // margin-left: 10%;
        margin: 0 auto;
        padding-top: 10px;
        margin-bottom: 20px;
        .yzm{
            width: 30px;
            height: 20px;
            float:right;
        }
        .right{
            float:right;
        }
        .bottom{
            border-bottom:none;
        }
        .hq{
            width: 68px;
            height: 26px;
            background: #fff;
            border: 1px solid #ccc;
            font-size: 12px;
            color: #a94765;
            float:right;
            margin-top: 10px;
        }
    }
    .orDiv{
        width: 100%;
        .or{
            width: 100%;
            // margin-top: 20px;
        }
    }
    input{
        width: 60%;
        height: 20px;
        border: none;
    }
}

img{
    width: 16px;
    height: 16px;
    margin-top: 20px;
    display: inline-block;
    
}
button{
    width: 80%;
    height: 35px;
    background: #94193f;
    border:none;
    border-radius: 10px;
    font-size: 16px;
    margin:0 auto;
}
</style>