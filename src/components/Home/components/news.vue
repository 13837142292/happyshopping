<template>
  <div class="sellBox">
    
    <!-- 热销产品 -->
    <img src="../img/news/img_xinpin.png" />
    <div class="box">
      <ul class="myul">
        <li v-for="(item,index) in sellList" :key="index">
          
          <div class="up">
          <img v-lazy="item.img" class="itim" />

           <div class="right">
            <h2>{{item.title}}</h2>
            <span class="ps">{{item.ps}}</span>
            <div class="huoBox"><img src="../img/news/img_new.png" class="huo"></div>
            <p class="orig">￥{{item.OriginalPrice}}</p>
            <p><span class='money'><b>上新价</b>￥{{item.money}}</span></p>
             <div class="qiang">抢先购</div>
          </div>
          </div>
        </li>
        <img src="../img/news/top.png" :class="top == true ? 'totop' :'totop1'" id="topimg" @click="toTop">
        <img src="../img/the_end.png" class="thend">
      </ul>
    </div>
  </div>
</template>
<script>
import { getNews } from "@/api";
export default {
  data() {
    return {
      sellList: [],
      top:false,
      timer:null
    };
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
  async mounted() {
    this.sellList = await getNews();
    this.$nextTick(()=>{
        window.addEventListener('scroll', this.handleScroll)
    })
  }
};
</script>
<style lang="less" scoped>
body,html{
    scroll-behavior: smooth;
    height: 100%;
}
.sellBox {
  background-color: #6D008E;
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
        padding: 15px 10px 8px 10px;
        width: 100%;
        
        box-sizing: border-box;
        margin-bottom: 5px;
        border-radius: 1%;
        background-color: #ffffff;
        align-content: convert;
        position: relative;
        .index{
            background-image: url('../img/top_bg.png');
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
        //   border-bottom: 1px solid #f7dcab;
          padding: 0px 0 5px 0;
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
                line-height: 23px;
              }
              .ps {
                
                font-size: 14px;
                overflow: hidden;
                display: block;
                width: 175px;
                height: 45px;
                margin-top: 5px;
                text-overflow: ellipsis;
                // white-space: wrap;
                text-align: left;
              }
            //   .huoBox{
            //       color: #DC870C;
            //       line-height: 20px;
            //       font-size: 14px;
            //       height: 20px;
            //       display: flex;
            //       flex-wrap: nowrap;
            //       text-align: left;
            //   }
              .huo{
                  width: 76px;
                  height: 20px;
                //   display: inline-block;
                  margin:4px 2px;
                  
              }
              .money{
                  color:#df0010;
                  font-size: 20px;
                  font-weight: bolder;
                  b{
                      font-size: 13px;
                  }
              }
              .orig{
                  font-size: 16px;
                  color: #999999;
                  text-decoration: line-through;
                  line-height: 14px;
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
    }
   

    }
  }

</style>