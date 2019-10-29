<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src='slide.img' alt="">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import {getIndexBanner} from "@/api"
  export default {
    name: 'carrousel',
    async created(){
      this.swiperSlides=await getIndexBanner()
       
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay:true
        },
        swiperSlides: []
      }
    },
    mounted() {
  
    }
  }
</script>
<style lang="less" scoped>

</style>