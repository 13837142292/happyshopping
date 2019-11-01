<template>
   
    <div>
        <!-- <login></login> -->
        <router-view></router-view>
        <button @click="de">shanchu</button>
    </div>
</template>
<script>
// import login from "./components/login.vue"

export default {
    components:{
        // login
    },
    methods:{
        de(){
            window.localStorage.removeItem('Authorization');
            this.$router.push('userTop')
        }
    }
}
</script>
<style lang="less" scoped>

</style>