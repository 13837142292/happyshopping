<template>
    <div class="filter">
    <ul>
             <li v-for="(item,index) in picComment" :key="index">
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
    </div>
</template>

<script>
import {getpicComment} from "@/api"
export default {
    data(){
        return{
            picComment:[]
        }
    },
    async created(){
        this.picComment=await getpicComment();
    }

}
</script>

<style lang="less" scoped>
.filter{
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    box-sizing: border-box;
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
    
}
</style>