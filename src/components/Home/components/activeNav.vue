<template>
    <div class="imgbox">
        <img v-lazy="newsrc" class="img1">
    </div>
</template>
<script>
export default {
    data(){
        return {
            newsrc:require("../img/indexOne.jpg")
        }
    }
}
</script>
<style lang="less" scoped>
.img1{
    position: relative;
   
}
 .imgbox::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    bottom:7.2%;
    z-index: 2;
    border-bottom: 8px solid #fff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    box-sizing: border-box
}

</style>