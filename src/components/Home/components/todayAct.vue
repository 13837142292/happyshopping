<template>
    <div class="list">
        <ul ref="myul" @click="tiao">
            <li v-for="(item,index) in myTcart" :key="index" ref="myli" >
                <img v-lazy="item.img">
                <p class="des">{{item.title}}</p>
                <p class="price">￥{{item.money}}</p>
            </li>
        </ul>
    </div>
    
</template>
<script>

export default {
    data(){
        return {
           myTcart:this.TcartList,
           mygetData:this.getData
        }
    },
    props:['TcartList','getData'],
    isShowDia(parentToChildData, isVisible){
        let self = this
        if (!parentToChildData) {
          return
        }
        self.dialogIsVisible = isVisible
        self.myTcart = parentToChildData
      },
   
    components:{
     
    },
    async mounted(){
        this.myTcart=await this.getData;
         this.$nextTick(()=>{
             var liWidth = this.$refs.myli[0].offsetWidth;
            //  window.console.log(liWidth);
            //  window.console.log(this.myTcart.length);
             this.$refs.myul.style.width=(this.myTcart.length * liWidth+5)+"px";
         })
        
    },
    methods:{
        tiao(){
            this.$router.replace('/detail-one/decripe')
        }
    }
    
}
</script>
<style lang="less" scoped>
    .list{
        padding-top: 15px;
        overflow-x: auto;
        background-color: #ffffff;
        ul{
            //  width: 1220px;
            li{
                width: 144px;
                height: 205px;
                display: inline-block;
                padding: 0 10px;
                background-color: #ffffff;
                box-sizing: border-box;
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