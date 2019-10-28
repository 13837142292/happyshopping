<template>
    <div class="classifySort">
        <top></top>
       <kindList></kindList>
    </div>
</template>
<script>
import top from "./components/top"
import kindList from "./components/kindlist"
export default {
    data(){

    },
    components:{
        top,
        kindList
    }
}
</script>
<style scoped>
.classifySort{
    height: 100%;
}
</style>