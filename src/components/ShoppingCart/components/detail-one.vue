<template>
    <div>
        详情
    </div>
</template>

<script>
export default {
    data(){
        return{
           queryInfo:[]
        }
    },
    created(){
          this.getParams()
    },
    methods:{
      getParams(){
          const routerParams=this.$route.query.queryid
          this.queryInfo=routerParams;
      }
},
watch:{
    "$route":"getParams"
}
}
</script>