<template>
    <div class="all">
          <ul :class="{more:ismore}">
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
               <p  @click="lookMore">查看更多评论 </p>  
                <img src="../images/red.png" alt="">  
             </div>
    </div>
</template>

<script>
import {getComment}  from "@/api"
export default {
    data(){
        return{
             commentList:[],
             ismore:false
        }
    },
    async created(){
        this.commentList=await getComment();

    },
    methods:{
        lookMore(){
        // window.console.log(this.ismore);
         this.ismore=true;
        }
    }
}
</script>

<style lang="less" scoped>
.more{
    overflow: auto !important;
}
.all{
    width: 100%;
    height: auto;
    padding-bottom: 50px;
    box-sizing: border-box;
    // overflow: hidden;
 ul{
         width: 100%;
         height:517px;
         overflow: hidden;
        li{
            width: 100%;
            height:150px;
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
                    border-radius: 50%;
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
                       width: 60px;
                       height:auto;
                   }
               }
            }
        }
      
    }
     .look{
            width: 100%;
            height: 50px;
            padding: 10px 120px;
            box-sizing: border-box;
            font-size: 14px;
            color: #C4223C;
            position: absolute;
            bottom: 20px;
            left: 0;
          p{
              width: 90px;
              float: left;
              
            } 
             img{
                width: 15px;
                height: 15px;
                margin-top: 3px;
          }
          
        } 
    
}
</style>