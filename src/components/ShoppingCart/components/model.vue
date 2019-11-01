<template>
    <div class="model" v-if="isShow" >
       <div class="black">
       
       </div>
       <div class="size" >
           <ul>
            <li v-for="(item,index) in cartList" :key="index">
            <div class="con">
                <div class="left">
                     <img v-lazy="item.img" alt="">
                </div>
                <div class="right">
                <i><img @click="hiden()" class="delete" src="../images/delete.png" alt=""></i>
                <p>{{item.introduce}}</p>
                <span>价格：￥{{item.price}}</span>
                </div>
                
            </div>
            <div class="number">
                <p>数量:</p>
                <div class="calc">
                 <i @click="sub()">-</i>
                <span>{{item.number}}</span>
                <b @click="add()">+</b>
                </div>
              
            </div>
            <div class="service">
                <div class="top">
                       <p>服务:</p>
                       <span>服务介绍</span>
                </div>
                <div class="bottom">
                  <p>乐享美+囤货无忧|￥{{item.discount}}</p>
                </div>
            </div>
            <div class="btn">
               <button>加入购物车</button>
               <button class="buy">立即订购</button>
            </div>
           </li>
        </ul>
           
       </div>
    </div>
</template>

<script>
import {getCart} from "@/api"
export default {
    data(){
        return{
            cartList:[],
            isShow:false
        }
    },
    async created(){
        this.cartList=await getCart();
    },
    methods:{
          show(){
            this.isShow=true;
          },
          hiden(){
            this.isShow=false;
          },
          add(){
         this.cartList.forEach((item)=>{
           return item.number++;
         })
          },
          sub(){
            this.cartList.forEach((item)=>{
                if(item.number>1){
                       return item.number--;
                }
        
            })
          }
    }
}
</script>

<style lang="less" scoped>
.model{
    width: 100%;
    height: 100%;
    position: fixed;
    top:0;
    left: 0;
    z-index: 1000;
    .black{
     width: 100%;
     height: 239px;
     background: black;
     opacity: 0.6;
    }
    .size{ 
        width: 100%;
        height: 428px;
        background: white;
        z-index: 100;
        position: relative;
        ul{
            li{
                width: 100%;
                height: 428px;
        .con{
            width: 100%;
            height: 126px;
            padding: 20px 10px;
            box-sizing: border-box;
            .left{
                width: 105px;
                height: 105px;
                float: left;
                position: relative;
                z-index: 111;
                margin-right: 10px;
            }
            .right{
                width: 240px;
                height: 100%;
                float: right;
             i{
                    width: 100%;
                    height: 20px;
                    display: block;
            .delete{
                width:20px;
                height: 20px;
                float: right;
                   } 
                }
            p{
                width: 242px;
                height: 22px;
                float: right;
                overflow: hidden;
                margin-top: 35px;
                font-size: 15px;
                color: #1E1E1E;
            } 
            span{
                width: 100%;
                height: 20px;
                display: block;
                font-size: 15px;
                color: #C4223C;
            }
            }
           

        }
        .number{
              width: 100%;
              height: 80px;
              padding: 10px;
              box-sizing: border-box;
              margin-top: 10px;
              p{
                  width: 178px;
                  height: 30px;
                  float: left;
                  font-size: 15px;
                  color: #5A5A5A;
              }
              .calc{
                  width: 110px;
                  height: 30px;
                  float: right;
                  font-size: 15px;
                  color: #5A5A5A;

                  i{
                      width: 36px;
                      height: 30px;
                      border: 1px solid #eeebee;
                      display: block;
                      float: left;
                      line-height: 30px;
                      text-align: center;
                  }
                  span{
                      width: 32px;
                      height: 30px;
                      text-align: center;
                      line-height: 30px;
                      display: block;
                      float: left;
                  }
                  b{
                      width: 36px;
                      height: 30px;
                      border: 1px solid #eeebee;
                      display: block;
                      float: right;
                      line-height: 30px;
                      text-align: center;
                  }
                 
              }

        }
        .service{
            width: 100%;
            height: 112px;
            padding: 10px;
            box-sizing: border-box;
            .top{
                width: 100%;
                height: 30px;
                 font-size: 15px;
                  color: #5A5A5A;
                p{
                    width: 178px;
                    height: 100%;
                    float: left;
                   
                }
                span{
                    width: 78px;
                    height: 100%;
                    display: block;
                    float: right;
                    color: #4966A0;
                }
            }
            .bottom{
                width: 100%;
                height: 32px;
                padding-left: 20px;
                box-sizing: border-box;
                p{
                    width: 160px;
                    height: 100%;
                    box-sizing: border-box;
                    border: 1px solid #eeebee;
                    text-align: center;
                    line-height: 32px;
                    font-size: 13px; 
                    margin-top: 10px;
                }
            }
        }
        .btn{
            width: 100%;
            height: 45px;
            position: absolute;
            bottom: 0;
            button{
                width: 50%;
                height: 100%;
                float: left;
                background: #DF2946;
                border: none;
                color: white;
                font-size: 16px;
            }
         .buy{
          background: #C31F3A;
          border-left: 1px solid #b4a5a5;
      }
        }   
            }
        }
        
      
    }
}
</style>