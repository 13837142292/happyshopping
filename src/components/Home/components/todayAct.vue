<template>
    <div class="list">
        <ul ref="myul">
            <li v-for="(item,index) in TcartList" :key="index" ref="myli">
                <img v-lazy="item.img">
                <p class="des">{{item.title}}</p>
                <p class="price">￥{{item.money}}</p>
            </li>
        </ul>

    </div>
    
</template>
<script>
import {getTodayList} from "@/api"
export default {
    data(){
        return {
            TcartList:[],
        }
    },
    created(){
       
    },
    async mounted(){
         this.TcartList= await getTodayList();
         this.$nextTick(()=>{
             var liWidth = this.$refs.myli[0].offsetWidth;
             window.console.log(liWidth);
             this.$refs.myul.style.width=(this.TcartList.length * liWidth+1)+"px";
         })
        
    }
    
}
</script>
<style lang="less" scoped>
    .list{
        padding-top: 15px;
        overflow-x: auto;
        ul{
           
            li{
                width: 144px;
                height: 205px;
                display: inline-block;
                padding: 0 10px;
                .price{
                    color: #c4193f;
                    font-size: 16px;
                    text-align: center;
                }
                .des{
                    width: 100%;
                    display: block;
                    padding-top: 8px;
                    text-align: center;
                    line-height: 21px;
                    color: #5a5a5a;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
        }
    }
</style>