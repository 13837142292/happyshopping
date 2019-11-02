<template>
    <div class="like">
        <p>猜你喜欢</p>
        <div class="pp">
            <ul>
            <li v-for="(item,index) in productList" :key="index">
             <img v-lazy="item.img" alt="">
             <p>{{item.title}}</p>
             <span>￥{{item.price}}</span>
            </li>
        </ul>
        </div>
        
      </div>
</template>
<script>
import {getlikeProduct} from "@/api"
export default {
    data(){
        return{
            productList:[]
        }
    },
    async created(){
        this.productList=await getlikeProduct();
    }

}
</script>

<style lang="less" scoped>
//去除横向滚动条
::-webkit-scrollbar{
    height: 0;
    width: 0;
}
.like{
    p{
        width: 100%;
        height: 42px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #e0e0e0;
        font-size: 14px;
    }
    .pp{ 
        overflow-x: auto;
      ul{
          display: flex;
          li{
            width:130px;
            height: 200px;
            display: inline-block;
            padding-top: 20px;
            padding-bottom: 10px;
            padding-left: 10px;
           img{
            width:130px;
            height: 130px; 
           }
           p{
               padding: 0;
               width: 100%;
               height: 40px;
               overflow: hidden;
               border: none;
               font-size: 14px;
               color: #1E1E1E;
           }
           span{
               width: 100%;
               height: 22px;
               display: block;
               font-size: 14px;
               color: #c4223c;
               font-weight: 800;
           }
        }
    }
    
    }
}
</style>