<template>
    <div>
        <div class="title">
             <p>购物车(4)</p>
             <span @click="changeCon" ref="con">编辑</span>
        </div>
        <!-- 购物车商品 -->
        <div class="content">
         <div class="tip">
            <div class="top">
                <!-- 全选 -->
                <div class="select" @click="selectAll">
                <div :class="isShow?'inactive':'noactive'"></div>
                </div>
               
                 <img class="home" src="../images/house.png" alt="">
                 <p>快乐商城购</p>
            </div>
        <div class="bottom">
          <p ref="tit">您差129元，即可免运费, </p> 
          <a ref="tit2"  href="#">去凑单</a>
          <img src="../images/right.png" alt="">
        </div>
        </div>
        <ul>
            <li v-for="(item,index) in productList" :key="index">
               <div class="con">
                <div class="left">
                    <!-- 每一个商品 -->
                <div  class="every" @click="selectOne(index)">
                <div :class="item.isShow?'inactive':'noactive'"></div>
                </div>
              
                </div>
               
                  <img @click="jump(item.id)" v-lazy="item.img" alt="">
               
                <div class="right">
                <p>{{item.detail}}</p>
                <span>{{item.size}}</span>
                <div class="pri">
                   <p>￥{{item.price}}</p>
                   <div class="num">
                     <p @click="sub(index)">-</p>
                     <p>{{item.number}}</p>
                     <p @click="add(index)">+</p>
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
<!-- 结算 -->
     <div class="allPrice">

        <div class="choose" @click="selectAll">
              <div :class="isShow?'inactive':'noactive'"></div>
        </div>
        <p>全选</p>
        <!-- 编辑时显示 -->
        <div class="edit">
           <div class="price">
            <p>合计：￥{{allTotal}}</p>
            <p>不含运费/税费</p>
        </div>
        <button>结算({{num}})</button>
        </div>
        <!-- 完成时显示 -->
       <div class="finish" v-if="finish">
         <button class="one">删除缺货</button>
         <button class="two" @click="del()">删除</button>
       </div>
     </div>


    </div>
        
    </div>
  
</template>

<script>
import {getshoppingCart}  from "@/api"
// import {mapState,mapActions} from "vuex"
export default {
   data(){
        return{
            productList:[],
            isShow:false,
            currentIndex:null,
            finish:false,
            every:false,
            allTotal:0,
            num:0
        }
    },
    // computed(){
    //           window.console.log(this.allTotal);


    // },
   async created(){
        this.productList=await getshoppingCart();
        //遍历数组，然后为其添加一个是否选中属性，这个属性也可以写到后台，
        //vue只能监听到一层，所以为其添加的响应式属性无法监听到，可以用set方法
        this.productList.forEach((item)=> {
            // item.isShow = false;
            this.$set(item, 'isShow', false)
        })
    },
    methods:{
        add(index) {
            // this.currentIndex=index;
            this.productList.forEach((item)=>{
                //如果当前位置等于item的id-1
              if(index==item.id-1){
                  return  item.number++
                    }
            })
       
        },
        sub(index){
                this.productList.forEach((item)=>{
                    if(index==item.id-1&&item.number>1){
                           return  item.number--
                    }
               
            })  
            
          

        },
        //全选
        selectAll(){
            this.isShow=!this.isShow;
            this.productList.forEach((item)=> {
                item.isShow = this.isShow
            })

              this.calTotal()
              this.isChange();

              if(this.isShow==true){
                this.num=4;
              }
        

        },
        //选择某一个商品
        selectOne(index){
            // window.console.log(this.productList[index].isShow)
            this.productList[index].isShow = !this.productList[index].isShow

            this.isShow = this.productList.every((item)=> {
                return item.isShow == true;
            }) 
        //调用计算总价方法
         this.calTotal();
         //调用内容是否改变方法
         this.isChange();
           

             //计算有几个被选中
             this.num=0;
             this.productList.forEach((item)=>{
              if(item.isShow==true){  
                   this.num++;
                      } 
                  })
        },
        //删除
         del(){
            this.productList.forEach((item,index)=>{
                if(item.isShow==true){
                    // window.console.log(index);
                    this.productList.splice(index,1);
                }
            })
         },
        // 计算总价
        calTotal(){
             this.allTotal=this.productList.reduce((total,item)=>{
                if(item.isShow==true){
                       return total+=item.price*item.number;
                }else{
          
                    return total;
                }
             
            },0)
           
        },
        //判断内容是否改变
        isChange(){
           if(this.allTotal>=129){
                this.$refs.tit.innerHTML='您已享受满129元包邮优惠, ';
                this.$refs.tit2.innerHTML="再逛逛"
            }else{
                var a=129-this.allTotal;
                this.$refs.tit.innerHTML='您差'+a+'元，即可免运费,';
                this.$refs.tit2.innerHTML="去凑单"
            }
        },
   //编辑
   changeCon(){
         var a=this.$refs.con.innerHTML;
         if(a=="编辑"){
           this.$refs.con.innerHTML="完成";
           this.finish=true;
         }else{
            this.$refs.con.innerHTML="编辑"
              this.finish=false;
         }
    },  
    // 跳转
    jump(id){
      // this.$router.replace("/detail");
   if(id==1){
        this.$router.push({
         path:"/detail-one",
        //  query:{
        //    queryid:id
        //  }
       })
   }
        
      
    }
    },
    mounted(){


  
    }
   
}
</script>

<style lang="less" scoped>
.noactive {
    width: 23px;
    height: 23px;
    background: url("../images/before.png") no-repeat center center;
    background-size: 100% 100%;
}
.inactive {
    width: 23px;
    height: 23px;
    background: url("../images/after.png") no-repeat center center;
    background-size: 100% 100%;
}
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
.content{
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

   .select{
       width: 22px;
       height: 22px;
       position: absolute;
       left: 10px;
       top:2px;

      //头部全选
      img{
       width: 100%;
       height: 100%;
       position: absolute;
       left: 0;
       top:0; 
       display: block;
      }
  
 
   }
    .home{
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
    border: 1px solid transparent;
    p{
      margin-left: 10%;
      font-size: 14px;
      color: #919191;
      float: left;
   
    } 
      a{
          width: 45px;
          display: inline-block;
          color: black !important;
          float: left;
          font-size: 14px;
          
      }
    img{
        width:18px;
        height: 18px; 
        margin-top: 2px;
    }
}  
}
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

              .every{
                  width: 22px;
                  height: 22px;
                  position: absolute;
                  left: 0;
                  top:30px;  
                  //每个商品是否选中
                   img{
                  width: 22px;
                  height: 22px;
                  position: absolute;
                  left: 0;
                  top:0;  
              } 
              //选中
              .every-two{
                      display: block;
                      opacity: 0;
                  } 
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
.allPrice{
    width: 100%;
    height: 55px;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    z-index: 200; 
    .choose{
        width: 22px;
        height: 22px;
        margin-left: 6px;
        float: left;
        margin-top: 20px;
        position: relative;
        //底部全选
        img{
            width:22px;
            height: 22px;
            position: absolute;
            left: 0;
            top: 0;
            display: block;
        }
         
      
    } 
     p{
            width: 30px;
            height: 18px;
            float: left;
            margin-top: 20px;
            margin-left: 10px;
            font-size: 14px;
        }
    .edit{
      width: 200px;
      height: 55px;
     position: absolute;
     right: 0;
       .price{
        width: 90px;
        height:50px;
        float: left;
       
        border: 1px solid transparent;
        p{
            width: 100%;height: 22px;
            margin-top: 0;
        }
        p:nth-child(1){
            text-align: right;
        }
    }
      button{
        width: 90px;
        height: 55px;
        background: red;
        float: right;
        color: white;
        border: none;
        font-size: 16px;
        letter-spacing: 4px;
    }
    }
   .finish{
    width: 200px;
    height: 55px;
    position: absolute;
    right: 0;
    display: block;
    button{
      width: 100px;
      height: 55px;
      border: none;
      color: white;
      font-size: 16px;
      letter-spacing: 2px;
    }
    .one{
      background: rgb(243, 87, 87);
    }
    .two{
      background: red;
    }
   }
  

}


}
//点击时改变样式
.active{
opacity: 1 !important;
}
</style>