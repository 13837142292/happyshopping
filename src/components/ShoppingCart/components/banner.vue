<template>
  <swiper :options="swiperOption" >
    <swiper-slide v-for="(item, index) in swiperSlides" :key="index"  >
        <img :src="item" alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getShoppingBanner} from "@/api"
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
           //自动轮播
          // autoplay:true,
        loop:true
       
        },
        swiperSlides: []
      }
    },
    async created(){
       this.swiperSlides=await getShoppingBanner();
    },
    mounted() {
   
    }

  }
</script>
<style lang="less" scoped>
.swiper-pagination-bullet-active {
    background: gray;
}
.swiper-pagination-bullet {
    background: white;
}
</style>