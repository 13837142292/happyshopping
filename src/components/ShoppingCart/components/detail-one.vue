<template>
    <div class="all" ref="tit">
        <!-- 头部轮播图 -->
        <div ref="banner">
              <banner></banner>
        </div>
        <!-- 商品信息和评价 -->
        <div class="introduce" ref="introduce" v-for="(item,index) in shoppingNews" :key="index">
            <div class="top">
              <p>{{item.introduce}}</p>
              <span>{{item.compontent}}</span>
              <div>
              <i><b>￥</b>{{item.price}}</i>
              <i>￥{{item.oldprice}}</i>
              </div>
            </div> 
            <div class="center">
             <div class="left">
               <p>  <i>{{item.p1}}</i> {{item.n1}}</p>
               <p>  <i>{{item.p2}}</i>{{item.n2}}</p>
               <p>  <i>{{item.p3}}</i> {{item.n3}}</p>
             </div>
             <div class="right">
               <img src="../images/rr.png" alt="">
             </div>
            </div>
            <div class="rule">
              <div class="con">
                  <span>
                      <img src="../images/correct.png" alt="">
                      发货&售后
                  </span>
                    <span>
                      <img src="../images/correct.png" alt="">
                      支付方式
                  </span>
                    <span>
                      <img src="../images/correct.png" alt="">
                      退货政策
                  </span>
              </div>
              <div class="pp">
              <img src="../images/lue.png" alt="">
              <img  src="../images/rr.png" alt="">
              </div>
              
            </div>
            <div class="size">
                 <p>规格</p>
                 <div class="right">
                     <p>默认</p>
                     <img src="../images/rr.png" alt="">
                 </div>
               
            </div>
            <div class="gray">

            </div>
            <!-- 用户评价 -->
            <div class="talk">
                <div class="title">
             <p>用户评价(6)</p>
             <span><i>100%</i>好评</span>
                </div>
             
             <ul>
                 <li v-for="(item,index) in commentList" :key="index">
                     <div class="left">
                          <img v-lazy="item.img" alt="">
                     </div>
                     <div class="right">
                       <p>
                           <span>{{item.name}}</span>
                           <span>{{item.date}}</span>
                       </p>
                       <p>{{item.content}}</p>
                      <p> <img v-lazy="item.pic" alt=""></p>
                     </div>
                 </li>
             </ul>
               <div class="look">
               <p  @click="lookCon">查看更多评价 </p>  
                <img src="../images/double.png" alt="">  
                </div>
            </div> 

          <div class="gray">

         </div>



        </div>
      <!-- 猜你喜欢 -->
      <likeProduct ref="like"></likeProduct>
        <div class="gray" ref="gray">

        </div>

        <!-- 商品详情 -->
        <div class="bottom" ref="bot">
            <div class="tit" :class="{fixed:isFixed}">
          <router-link    tag="li" to="/detail-one/decripe" ><p >商品详情</p></router-link> 
          <router-link   tag="li" to="/detail-one/parameter"><p >产品参数</p></router-link>
          <router-link  tag="li" to="/detail-one/send"><p>配送与售后</p></router-link>
            </div>
         
           <router-view></router-view>
        </div>
       
         <!-- 底部 -->
         <div class="last">
           <router-link tag="li" to="/home">
           <i class="iconfont icon-tianchongxing-"></i>
               首页
           </router-link>
           <router-link tag="li" to="/classifySort">
           <i class="iconfont icon-fenlei"></i>
               分类
           </router-link>
           <button @click="showOrhiden">加入购物车</button>
           <button class="buy">立即购买</button>
         </div>

         <div class="model">
             <model ref="model"></model>
         </div>
      
    </div>

    
</template>

<script>
import banner from "./banner.vue"
import {getShoppingNews} from "@/api"
import {getComment}  from "@/api"
import likeProduct from "./likeList.vue"
import model from "./model.vue"

export default {
    components:{
        banner,
        likeProduct,
        model
        
    },
    data(){
        return{
           queryInfo:[],
           shoppingNews:[],
           commentList:[],
           isFixed:false
        }
    },
  async  created(){
          this.getParams()
    
    this.shoppingNews=await getShoppingNews();
    this.commentList=await getComment();

    
    // window.console.log(arr);
    },
    methods:{
      getParams(){
          const routerParams=this.$route.query.queryid
          this.queryInfo=routerParams;
      },
      //是否显示遮罩层
      showOrhiden(){
          window.console.log(this.$refs.model.show())
      },
      //查看更多评价
      lookCon(){
         this.$router.replace("/comment");
    
      },
      height(){
      var a=document.body.scrollTop||window.pageYOffset||document.documentElement.scrollTop;
    //   window.console.log(a);
      if(a>1320){
          this.isFixed=true;
      }else{
          this.isFixed=false;
      }
      }
     
},
watch:{
    "$route":"getParams"
},
mounted(){
    window.addEventListener("scroll",this.height)
    
 
}
}
</script>
<style lang="less" scoped>
.fixed{
    position: fixed;
    left: 0;
    top:0;
    background: white;
}
.all{
    width: 100%;
    height: calc(100%-51px);
    padding-bottom: 51px;
    box-sizing: border-box;
    .introduce{
    .top{
        width: 100%;
        height: 140px;
        border-bottom: 1px solid #F5F5F5;
        padding: 10px;
        box-sizing: border-box;
        p{
            width: 100%;
            height: 44px;
            color: #1D1D1D;
            font-size: 16px;
            margin-bottom: 5px;
        }
        span{
             height: 51px;
             color: #C31F3A;
             font-size: 14px;
        }
        i{
            width: 60px;
            height: 40px;
            display: block;
            float: left;
            font-size: 16px;
        }
        i:nth-child(1){
            font-size: 25px;
            color: #C31F3A;
            font-weight: 800;
            b{
                font-size: 16px;
            }
        }
        i:nth-child(2){
            text-decoration: line-through;
            padding-top: 10px;
            box-sizing: border-box;
            padding-left: 5px;
            color: #969696;
        }
        
    }
}
.center{
    width: 100%;
    height: 82px;
    padding: 10px;
    box-sizing: border-box;
    .left{
         width: 310px;
         height: 100%;
         float: left;
         p{
             height: 20px;
             margin-bottom: 5px;
             font-size: 14px;
             color: #1E1E1E;
            i{
             width: 40px;
             height: 16px;
             border: 1px solid #df0010;
             color: #df0010;
             border-radius: 3px;
             margin-right: 5px;
             font-size: 12px;
             line-height: 16px;
             }
        
         }

    }
    .right{
        width: 40px;
        height: 100%;
        float: right;
        img{
            width: 20px;
            height: 20px;
            margin-left: 20px;
            margin-top: 30px;
           
        }
    }
}
.rule{
    width: 100%;
    height: 32px;
    background: #FAFAFA;
    padding: 5px 10px;
    margin-top: 10px;
    box-sizing: border-box;
    display: flex;
    .con{
        width: 300px;
        height: 100%;
        float: left;
        span{
           width: 80px;
           height: 100%;
           float: left;
           img{
               width: 16px;
               height: 16px;
               float: left;
               margin-right: 3px;
               margin-top: 1px;
           }
        }
        
    }
   .pp{
       width: 60px;
       height: 100%;
       float: right;
       img{
           width: 20px;
           height: 20px;
           float: left;
       }
       img:nth-child(2){
           float: right;
       }
     
   }
    
  

}

.size{
    width: 100%;
    height: 30px;
    padding:0 10px;
    margin-top: 10px;
    box-sizing: border-box;
    p{
        width: 60px;
        float: left;
        font-size: 14px;

    }
    .right{
        width: 50px;
        height:100%;
        float: right;
        p{
            width: 30px;
            height: 100%;
            float: left;
        }
        img{
            width: 20px;
            height: 20px;
            float: right;
        }
    } 
}

.gray{
    width: 100%;
    height: 6px;
    background: #E0E0E0;
}

.talk{
    width: 100%;
    height:auto;
    padding: 10px;
    box-sizing: border-box;
  
    .title{
        width: 100%;
        height: 32px;
        border-bottom: 1px solid #e0e0e0;
          p{
        width: 240px;
        height: 22px;
        font-size: 14px;
        float: left;
    }
    span{
        width: 90px;
        height: 22px;
        float: right;
        font-size: 14px;
        i{
            color: #df0010;
        }
    }
    }
  

    ul{
         width: 100%;
         height:260px;
         overflow: hidden;
        li{
            width: 100%;
            height: 180px;
            border-bottom: 1px solid #e0e0e0;  
            padding: 10px;
            box-sizing: border-box;
            overflow: hidden;
            .left{
                width:35px; 
                height: 100%;
                float: left;
                img{
                    width: 35px;
                    height: 35px;
                }
            }
            .right{
                width: 300px;
                height: 100%;
                float: right;
                padding-left: 10px;
                box-sizing: border-box;
                p:nth-child(1){
                    width: 100%;
                    height: 22px;
                    span{
                        width: 140px;
                        height: 100%;
                        float: left;
                    }
                    span:nth-child(1){
                        font-size: 14px;
                    }
                    span:nth-child(2){
                        text-align: right;
                    }
                }
                p:nth-child(2){
                    width: 100%;
                    height: 40px;
                    font-size: 14px;
                }
               p:nth-child(3){
                   width: 100%;
                   height: 90px;
                   padding-top: 10px;
                   box-sizing: border-box;
                   overflow: hidden;
                   img{
                       width: 100px;
                       height:auto;
                   }
               }
            }
        }
      
    } 
     .look{
            width: 100%;
            height: 30px;
            padding: 10px 100px;
            box-sizing: border-box;
            font-size: 14px;
            color: #C4223C;
            border-top: 1px solid #e0e0e0;
          p{
              width: 100px;
              float: left;
              
            } 
             img{
                width: 14px;
                height: 11px;
                display: inline-block;
          }
          
        }
}

.bottom{
    width: 100%;
    height: auto;
    position: absolute;
    left: 0;
    border: 1px solid transparent;
    box-sizing: border-box;
    .tit{
        width: 100%;
        height: 42px;
        border-bottom: 1px solid #e0e0e0;
         li{ 
        width: calc(100%/3);
        height: 100%;  
        display: flex;
        justify-content: space-around; 
        float: left;
        font-size: 16px;
        color: #969696;
        line-height: 42px;
    }
    .router-link-active{
    color: #1e1e1e;
    p{
        border-bottom:2px solid #C4223C;
    }
}
    }
   

    
}

}
 
 .last{
     width: 100%;
     height: 50px;
     position: fixed;
     left: 0;
     bottom: 0;
     background: white;
     z-index: 999;
     li {
         width: 60px;
         height: 50px;
         float: left;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
         flex: 1;
         border-right: 1px solid #eeebeb;
         border-top: 1px solid #eeebeb;
         box-sizing: border-box;
         i{
             font-size: 22px;
          }
      }
      button{
          width: 127px;
          height: auto;
          line-height: 50px;
          font-size: 14px;
          color: white;
          background: #DF2946;
          border: none;
          font-size: 16px;
      }
      .buy{
          background: #C31F3A;
          border-left: 1px solid #b4a5a5;
      }
 }
</style>