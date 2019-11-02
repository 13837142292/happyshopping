<template>
    <div class="nav">
        <ul>
            <li @click="wego(0)" :class="{act:currentIndex==0}"><router-link  to='/home'>今日精选</router-link></li>
             <li @click="wego(1)" :class="{act:currentIndex==1}"><router-link  to='/sellwell'>热销</router-link></li>
              <li @click="wego(2)" :class="{act:currentIndex==2}"><router-link  to='/news' >新品首发</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentIndex:0,
           
        
        }
      
    },
    methods:{
        wego(index){
            this.currentIndex=index;
            if(index==0){
                location.reload();
            }
           
        },
        
    }
}
</script>
<style lang="less" scoped>
.act{
    border-bottom: 2px solid #d53837;
    color: #d53837
}
.nav{
    width: 100%;
    background-color: #ffffff;
    ul{
        width: 60%;
        display: flex;
        padding-left: 18px;
        background-color: #ffffff;
        li{
            flex: 1;
            
            background-color: #ffffff;
            flex-wrap: nowrap;
            text-align: center;
            height: 40px;
            line-height: 40px;
            font-size: 15px;
          
            color: #323232;
            a{
                color: #323232;
            }
        }
    }
}
</style>