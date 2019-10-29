<template>
    <div>
        <!-- 顶部搜索框 -->
        <topSearch></topSearch>
        <!-- 顶部链接跳转 -->
        <topNav></topNav>
        <!-- 轮播图 -->
        <showChart></showChart>
        <!-- 广告位 -->
        <advert></advert>
        <!-- 图片导航 -->
        <activeNav></activeNav>
        <TodayList></TodayList>
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
export default {
    components:{
        topSearch,
        topNav,
        showChart,
        advert,
        activeNav,
        TodayList
    }
}
</script>
<style lang="less" scoped>
   
</style>