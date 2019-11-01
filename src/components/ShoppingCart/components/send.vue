<template>
    <div class="send">
       <ul>
           <li v-for="(item,index) in sendList" :key="index">
               <img :src="item" alt="">
           </li>
       </ul>
    </div>
</template>

<script>
import {getSend} from "@/api"
export default {
    data(){
        return{
          sendList:[]
        }
    },
    async created(){
        this.sendList=await getSend()
    }
}
</script>

<style lang="less" scoped>
.send{
    width: 100%;
    height: calc(100%-51px);
    padding-bottom: 51px;
    box-sizing: border-box;
    ul{  
        border-bottom: 1px solid #e0e0e0;
        li{ 
            width: 100%;
            height: auto;
            padding: 0 10px;
            box-sizing: border-box;
            img{
                width: 100%;
                height: auto;
            }
        }
    }
}

</style>