<template>
    <div>
        <div class="title">
             <p>购物车(4)</p>
             <span>编辑</span>
        </div>
        <div class="tip">
            <div class="top">
               <img src="./images/before.png" alt="">
               <img src="./images/after.png" alt="">
                 <img src="./images/house.png" alt="">
                 <p>快乐商城购</p>
            </div>
        <div class="bottom">
          <p>您差129元，即可免运费,  <a href="#">去凑单</a></p>
          <img src="./images/right.png" alt="">
        </div>
        </div>
        <div class="list">
          <list></list>
          <router-view></router-view>
        </div>
      
    </div>
  
</template>

<script>
import list from "./components/list.vue"
export default {
    components:{list}
}
</script>

<style lang="less" scoped>
.title{
    padding: 8px 0;
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    font-size: 16px;
    border-bottom: 1px solid rgb(238, 234, 234);
    color: #5f5d5d;
    position: fixed;
    top:0;
    left: 0;
    background: white;
    z-index: 99;
    p{
        float: left;
        margin-left: 40%;
    }
    span{
        float: right;
        margin-right: 10px;
        color: #919191;
    }
}
.tip{
     width: 100%;
    height: 60px;
     border-bottom: 1px solid rgb(238, 234, 234);
     padding-top: 5px;
     box-sizing: border-box;
     margin-top: 40px;
    .top{
    width: 100%;
   height: 20px;
   position: relative;
 
  img:nth-child(1){
       width: 22px;
       height: 22px;
       float: left;
       position: absolute;
       left: 10px;
       top:2px;
   }
   img:nth-child(2){
       width: 22px;
       height: 22px;
       float: left;
     position: absolute;
       left: 10px;
       top:2px;
       display: none;
   }

    img:nth-child(3){
        margin-left: 40px;
        width: 15px;
        height: 15px;
        float: left;
        margin-right: 5px;
        margin-top: 3px;
    }
    p{
        font-size: 14px;
    }
    }
  .bottom{
    width: 100%;
    box-sizing: border-box;
    margin-top: 5px;
    p{
      margin-left: 10%;
      font-size: 14px;
      color: #919191;
      float: left;
      a{
          color: black;
      }
    }
    img{
        width:18px;
        height: 18px; 
       margin-top: 2px;
        
    }
}  
}



</style>