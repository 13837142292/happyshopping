<template>
    <div class="parameter">
       <ul>
           <li v-for="(item,index) in paraList" :key="index">
               <p>{{item.name}}</p>
               <span>{{item.con}}</span>
           </li>
       </ul>
    </div>
</template>


<script>
import { getParameter} from "@/api"
export default {
    data(){
        return{
            paraList:[]
        }
    },
    async created(){
        this.paraList=await getParameter();
    }
}
</script>

<style lang="less" scoped>
.parameter{
    width: 100%;
    height: calc(100%-51px);
    padding-bottom: 51px;
    box-sizing: border-box;
    margin-top: 42px;
    ul{
        li{
            width: 100%;
            height: 40px;
            border-bottom: 1px solid #e0e0e0;
            padding-left: 10px;
            padding-right: 10px;
            box-sizing: border-box;
            font-size: 14px;
            p{
                width: 140px;
                height: 40px;
                float: left;
                line-height: 40px;
                color:#787878;
                margin-left: 0;
            }
            span{
                width: 210px;
                height: 40px;
                float: right;
                line-height: 20px;
                font-size: 15px;
                color: #1e1e1e;
            }
        }
        li:nth-child(1){
            border-top: 1px solid #eeebeb;
        }
    }
}
</style>