<template>
    <div class="comment">
        <router-link tag="li" to="/comment/all">全部评价(6)</router-link>
        <router-link tag="li" to="/comment/filter">有图评价(2)</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" scoped>
.comment{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    z-index: 200;
    position: relative;
    background: white;
    li{
        width: 50%;
        height: 50px;
        float: left;
        font-size: 15px;
        text-align: center;
        line-height: 50px;
        color: #1e1e1e;
        border-bottom: 1px solid #eeebee;

    }
    .router-link-active{
      color: #c61f3b;
        border-bottom: 2px solid #c61f3b;
    }
   
}
</style>