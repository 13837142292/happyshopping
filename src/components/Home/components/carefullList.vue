<template>
    <div class="care">
        <ul>
            <li v-for="(item,index) in carefullList" :key="index">
                <img v-lazy="item.img">
                <p>{{item.title}}</p>
                <span class="money">￥{{item.money}}<i class="ori">￥{{item.OriginalPrice}}</i></span>
                
            </li>
        </ul>
    </div>
</template>
<script>
import {getCarefullList} from "@/api"
export default {
    data(){
        return {
             carefullList:[]
        }
       
    },
    props:[
        
    ],
    async mounted(){
        this.carefullList = await getCarefullList()
    }
}
</script>
<style lang="less" scoped>
.care{
    width: 100%;
    margin-top: 10px;
    ul{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
        li{
            margin:5px 5px 5px 8px;
            width:46%;
            // height: 288px;
            background-color: #ffffff;
            margin-left: 8px;
            p{
                margin-top: 15px;
                height: 42px;
                line-height: 21px;
                overflow: hidden;
                color: #5a5a5a;
                text-overflow: ellipsis;
                // display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                font-size: 15px;
            }
            .money{
                padding-bottom: 20px;
                box-sizing: border-box;
                color: #c4193f;
                font-size: 16px;
                text-align: center;
                display: block;
                i{
                    color: #959595;
                    font-size: 15px;
                    text-decoration: line-through;
                }
            }
        }
    }
    
}
    
</style>