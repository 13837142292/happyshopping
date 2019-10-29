<template>
    <div class="nav">
        <ul>
            <li>今日精选</li>
             <li>热销</li>
              <li>新品首发</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            url:''
        }
      
    }
}
</script>
<style lang="less" scoped>
.nav{
    width: 100%;
    ul{
        width: 60%;
        display: flex;
          padding-left: 18px;
        li{
            flex: 1;
         
            flex-wrap: nowrap;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
          
            color: #323232;
            
        }
    }
}
</style>