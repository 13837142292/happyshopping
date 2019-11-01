<template>
    <div class="decripe">
      <ul>
          <li v-for="(item,index) in decripeList" :key="index">
              <img :src="item" alt="">
          </li>
      </ul>
       
    </div>
</template>

<script>
import {getDecripe} from "@/api"
export default {
    data(){
        return{
             decripeList:[]
        }
       
    },
  async created(){
    this.decripeList=await getDecripe();
  }
}
</script>

<style lang="less" scoped>
.decripe{
    width: 100%;
    height: calc(100%-51px);
    padding:0px 10px;
    padding-bottom: 51px;
    box-sizing: border-box;
    ul{
        li{
        img{
        width: 100%;
        height: auto;
        display: block;
    } 
        }
    }
   
}
</style>