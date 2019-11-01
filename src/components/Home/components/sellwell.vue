<template>
  <div class="sellBox">
    <!-- 热销产品 -->
    <img src="../img/img_remai.png" />
    <div class="box">
      <ul class="myul">
        <li v-for="(item,index) in sellList" :key="index">
          <img src="../img/top_bg.png" class="topbg">
          <div class="index">{{index+1}}</div>
          <div class="up">
          <img v-lazy="item.img" class="itim" />
          
           <div class="right">
            <h2>{{item.title}}</h2>
            <span class="ps">{{item.ps}}</span>
            <div class="huoBox">火热度:<img src="../img/huo.png" v-for="(item,index) in 4" :key="index" class="huo">97°C</div>
            <p><span class='money'>￥{{item.money}}</span><span class="orig">￥{{item.OriginalPrice}}</span></p>
             <div class="qiang">马上抢</div>
          </div>
          </div>
         
         
          <div class="dis">{{item.dis}}</div>
        </li>
         <img src="../img/news/top.png" :class="top == true ? 'totop' :'totop1'" id="topimg" @click="toTop">
        <img src="../img/the_end.png" class="thend">
      </ul>
    </div>
  </div>
</template>
<script>
import { getSellwell } from "@/api";
export default {
  data() {
    return {
      sellList: [],
      top:false,
      timer:null
    };
  },
  
  async mounted() {
    this.sellList = await getSellwell();
      this.$nextTick(()=>{
        window.addEventListener('scroll', this.handleScroll)
    })
  },
   methods:{
        handleScroll () {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // window.console.log(scrollTop)
            
            if(scrollTop>=300){
                this.top=true;
            }else{
                this.top=false;
            }
        },
        toTop(){
            this.timer=setInterval(
                ()=>{
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    let step = scrollTop/6
                    scrollTop=Math.floor(scrollTop);
                    if(scrollTop>0){
                    scrollTop-=step;
                    //  window.console.log(scrollTop);
                     window.scrollTo(0,scrollTop);
                    }
                    if(scrollTop<=0){
                        clearInterval(this.timer);
                    }
                }
                ,3)
        }

    },
    destroyed () {
     window.removeEventListener('scroll', this.handleScroll)
    },
};
</script>
<style lang="less" scoped>
.sellBox {
  background-color: #d85521;
  font-family: "微软雅黑";
  padding-bottom: 60px;
  .box {
    margin: 0 auto;
    width: 352px;
    .myul {
      // background-color: #ffffff;
      width: 100%;
      display: flex;
      flex-direction: column;
      .thend{
        width: 157px;
        margin: 0 auto;
        margin-top: 5px;
        height: 14px;
      }
       .totop1{
          position: fixed;
          right: 20px;
          bottom: 40px;
          width: 45px;
          height: 45px;
          z-index: 99;
          visibility: hidden;
          opacity: 0;
        
      }
      .totop{
          position: fixed;
          right: 20px;
          bottom: 60px;
          width: 45px;
          height: 45px;
          z-index: 99;
          visibility: none;
          opacity: 1;
          transition: .5s all ease-in;
      }
      li {
        padding: 15px 10px;
        width: 100%;
        
        box-sizing: border-box;
        margin-bottom: 5px;
        border-radius: 2%;
        background-color: #ffffff;
        align-content: convert;
        position: relative;
        .topbg{
          width: 32px;
          height: 41px;
          position: absolute;
          top: 5px;
          left: 5px;
          z-index: 1;
        }
        .index{
            text-align: center;
            width: 32px;
            display: block;
            height: 41px;
            line-height: 32px;
            color: #ffffff;
            font-size: 18px;
            position: absolute;
            top: 5px;
            left: 5px;
            z-index: 1;
          }
        
        .up{
          border-bottom: 1px solid #f7dcab;
          padding: 0px 0 15px 0;
          display: flex;
          flex-direction: row;
          position: relative;
          
             .itim{
                width: 140px;
                height: 140px;
                margin-right: 15px;
              }
              .right {
            
          width: 50%;
              h2 {
                font-size: 18px;
                color: #000000;
                overflow: hidden;
                text-overflow: ellipsis;
                width:182px;
                height: 23px;
              }
              .ps {
                
                font-size: 14px;
                overflow: hidden;
                display: block;
                width: 175px;
                height: 45px;
                margin-top: 10px;
                text-overflow: ellipsis;
                // white-space: wrap;
                text-align: left;
              }
              .huoBox{
                  color: #DC870C;
                  line-height: 20px;
                  font-size: 14px;
                  height: 20px;
                  display: flex;
                  flex-wrap: nowrap;
                  text-align: left;
              }
              .huo{
                  width: 11px;
                  height: 12px;
                  line-height: 12px;
                //   display: inline-block;
                  margin:4px 2px;
                  
              }
              .money{
                  color:#df0010;
                  font-size: 20px;
                  font-weight: bolder;
              }
              .orig{
                  font-size: 16px;
                  color: #999999;
                  text-decoration: line-through;
              }
              .qiang{
                  width: 72px;
                  height: 32px;
                  border-radius: 18px 0px 0px 18px;
                  font-size: 18px;
                  line-height: 32px;
                  color: #ffffff;
                  text-align: center;
                  background: linear-gradient(90deg, rgba(253, 97, 64, 1) 0%, rgba(240, 9, 25, 1) 100%);
                  position: absolute;
                  right: -10px;
                  bottom:20px;
              }
          } 
        }
       
        
      }
      .dis{
          width: 100%;
          padding: 10px 8px 12px 10px;
          // line-height: 14px;
          font-size: 15px;
          box-sizing: border-box;
          background: rgba(255, 247, 242, 1);
      }
    }
   

    }
  }

</style>