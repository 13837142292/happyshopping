<template>
    <div class="box">
        <!-- top -->
        <div class="top">
            <img src="../images/jt.png" alt="返回">
            <ul class="top-text">
                <li class="user-db">
                    <a href="javascript:void(0);" @click="CachangeOne"  :class="{ch:id==1}">账号登录</a>
                    
                </li>
                <li class="user-db">
                  
                   <a href="javascript:void(0);" @click="CachangeTwo"  :class="{ch:id==2}">
                        无密码快速登录
                    </a>
                   
                </li>
            </ul>
        </div>
        <user :class="{dis:id==2}"></user>
        <quick-logon :class="{dis:id==1}"></quick-logon>
        <router-view></router-view>
    </div>
    
</template>
<script>
import user from"./user.vue"
import quickLogon from"./quickLogon.vue"
export default {
     data(){
        return{
            id:1
        }
    },
    components:{
        user,
        quickLogon
    },
    methods:{
        CachangeOne(){
            this.id=1
        },
        CachangeTwo(){
            this.id=2
        }
    }
}
</script>
<style lang="less" scoped>
.top{
    border-bottom: 1px solid #ccc;
    display: flex;
    img{
        width: 30px;
        height: 30px;
        padding-left: 10px;
        padding-top: 8px;
    }
    ul{
        text-align: center;
        li{
            display:inline-block;
            padding-left: 50px;
            padding-top: 10px;
            // color: #000;
            font-size: 16px;
            
        }
    }
}
.ch{
    color: #c31f3a;
    border-bottom: 3px solid #c31f3a;
}
.dis{
    display: none;
}
</style>