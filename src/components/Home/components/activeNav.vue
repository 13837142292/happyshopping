<template>
    <div class="imgbox">
        <img v-lazy="newsrc" class="img1">
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    props:['newsrc']
}
</script>
<style lang="less" scoped>
.imgbox{
    position: relative;
}
 .imgbox::after{
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    bottom:0%;
    z-index: 2;
    border-bottom: 8px solid #fff;
    border-right: 8px solid transparent;
    border-left: 8px solid transparent;
    box-sizing: border-box
}
</style>