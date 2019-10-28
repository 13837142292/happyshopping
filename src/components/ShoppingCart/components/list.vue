<template>
    <div class="content">
        <ul>
            <li v-for="(item,index) in productList" :key="index">
               <div class="con">
                <div class="left">
               <img src="../images/before.png" alt="">
               <img src="../images/after.png" alt="">
                </div>
               
                  <img :src="item.img" alt="">
               
                <div class="right">
                <p>{{item.detail}}</p>
                <span>{{item.size}}</span>
                <div class="pri">
                   <p>{{item.price}}</p>
                   <div class="num">
                     <p @click="sub">-</p>
                     <p>{{count}}</p>
                     <p @click="add">+</p>
                   </div>
                   
                </div>

                </div>     

               </div>
             
                <div class="bottom">
                <p>服务</p>
                <span>暂不订购延保服务</span>
                <div class="buy">
                    <p>去购买</p>
                    <img src="../images/gray-right.png" alt="">
                </div>
             </div>
            </li>
           
        </ul>
    </div>
</template>

<script>
import {getshoppingCart}  from "@/api"
import {mapState,mapActions} from "vuex"
export default {
    data(){
        return{
            productList:[]
        }
    },
    computed:{
           ...mapState([
             'count'
        ])
    },
   async created(){
        this.productList=await getshoppingCart();
    },
    methods:{
          ...mapActions([
             'add',
             'sub'
        ])
    }
}
</script>

<style lang="less" scoped>
.content{
  ul{
      padding: 10px 6px;
      box-sizing: border-box; 
  li{
         width: 100%;
        height: 150px;
      .con{
          width: 100%;
          height: 110px;
          .left{
              width: 28px;
              height: 100%;
              position: relative;
              float: left;
              img{
                  width: 22px;
                  height: 22px;
                  position: absolute;
                  left: 0;
                  top:30px;  
              } 
              img:nth-child(2){
                      display: none;
                  }
          }
          
              img{
                  width: 90px;
                  height: 90px;
                  display: block;
                  float: left;
                  margin-left: 2px;
              
          }
          .right{
              width: 228px;
              height: 90px;
              float: right;
              p{
              width: 100%;
              height: 45px; 
              font-size: 16px;
              color:black;
              margin-bottom: 5px;
              overflow: hidden;
              }
              span{
              width: 100%;
              height: 22px;  
              font-size: 14px;
              color: gray;
           
              }
              .pri{
              width: 100%;
              height: 28px;
              p{
              width: 42px;
              float: left;
              font-size: 14px;
              font-weight: 800;
              margin-top: 5px;
              }
              .num{
                  width: 87px;
                  height: 28px;
                  border: 1px solid rgb(199, 196, 196);
                  float: right;
                  border-radius: 5px;  
                  
                  p{
                      width: 28px;
                      height: 28px;
                      border-right: 1px solid rgb(199, 196, 196);
                      margin-top: 0;
                      margin-bottom: 0;
                      text-align: center;
                      color: gray;
                  }
                  p:nth-child(3){
                         border-right:none;
                  }
              }
              }
          }
       
      }   
      
    
       .bottom{
          width: 100%;
          height: 25px;
          p{
              width: 30px;
              height: 20px;
              border: 1px solid black;
              border-radius: 5px;
              float: left;
              text-align: center;
              margin-left: 30px;
          }
          span{
             width: 217px;
              height: 100%;
              float: left;
              margin-left: 5px;
              font-size: 14px;
          }
          .buy{
               width: 60px;
              height: 100%;
              float: right;
              margin-right: 10px;
              border: 1px solid transparent;
              p{
              width: 40px;
              height: 100%;
              border: none;
              float: left;
              margin-left: 0;
              }
              img{
                  width: 15px;
                  height: 15px;
                  float: right;
                  margin-top: 2px;
              }
          }
      }
     
  } 
  }
}
</style>