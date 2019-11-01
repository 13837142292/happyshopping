<template>
    <div class="app">
        <!-- 顶部搜索框 -->
        <topSearch></topSearch>
        <!-- 顶部链接跳转 -->
        <topNav></topNav>
        <!-- 轮播图 -->
        <showChart></showChart>
        <!-- 广告位 -->
        <advert></advert>
        <!-- 今日活动 -->
        <activeNav :newsrc='newsrc1'></activeNav>
        <TodayList :TcartList='datalist1' :getData='newData1'></TodayList>
        <!-- 美妆馆 -->
        <activeNav :newsrc='newsrc2'></activeNav>
        <TodayList :TcartList='datalist2' :getData='newData2'></TodayList>
        <!-- 养生厨房 -->
        <activeNav :newsrc='newsrc3'></activeNav>
        <TodayList :Tcart-list='datalist3' :get-data='newData3'></TodayList>
        <!-- 电子电器 -->
        <activeNav :newsrc='newsrc4'></activeNav>
        <TodayList :TcartList='datalist4' :getData='newData4'></TodayList>
        <!-- 服饰新鲜活 -->
        <activeNav :newsrc='newsrc5'></activeNav>
        <TodayList :TcartList='datalist5' :getData='newData5'></TodayList>
        <!-- 美妆断货王 -->
        <activeNav :newsrc='newsrc6'></activeNav>
        <TodayList :TcartList='datalist6' :getData='newData6'> </TodayList>
        <!-- 优选好物 -->
         <img v-lazy="src" class="goodth">
        <carefullList></carefullList>
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import topSearch from "./components/topSearch.vue"
import topNav from "./components/topNav.vue"
import showChart from "./components/showChart.vue"
import advert from "./components/advert.vue"
import activeNav from "./components/activeNav.vue"
import TodayList from "./components/todayAct.vue"
import carefullList from "./components/carefullList.vue"
import {getTodayList} from "@/api"
import {getBeautyMakeup} from "@/api"
import {getKitchen} from "@/api"
import {getElectronic} from "@/api"
import {getAfresh} from "@/api"
import {getOutStock} from "@/api"
export default {
    components:{
        topSearch,
        topNav,
        showChart,
        advert,
        activeNav,
        TodayList,
        carefullList,
       
    },
    data(){
        return{
            src:require('./img/goodThings.png'),
            newsrc1:require("./img/indexOne.jpg"),
            newsrc2:require("./img/index2.jpg"),
            newsrc3:require("./img/index3.jpg"),
            newsrc4:require("./img/index4.jpg"),
            newsrc5:require("./img/index5.jpg"),
            newsrc6:require("./img/index6.jpg"),
            datalist1:[],datalist2:[],datalist3:[],datalist4:[],datalist5:[],datalist6:[],
            newData1:getTodayList(),
            newData2:getBeautyMakeup(),
            newData3:getKitchen(),
            newData4:getElectronic(),
            newData5:getAfresh(),
            newData6:getOutStock(),
            
        }
    },
    
    mounted(){
        this.datalist1 = this.newData1;
        this.datalist2 = this.newData2;
        this.datalist3 = this.newData4;
        this.datalist4 = this.newData4;
        this.datalist5 = this.newData5;
        this.datalist6 = this.newData6;
    }
   
}
</script>
<style lang="less" scoped>
// html,body{
//     height: 100%;
// }
    .app{
        background-color: rgb(236, 236, 236);
        // height: 100%;
        padding-bottom: 50px;
        .goodth{
            margin-top: 15px;
        }
    }
</style>