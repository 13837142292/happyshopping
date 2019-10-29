import Vuex from 'vuex'
import Vue from "vue"
Vue.use(Vuex);

var store=new Vuex.Store({
    state:{
        count:1
    },
   mutations:{
       add:(state)=>{
        state.count++
       },
       sub:(state)=>{
           if(state.count>1){
                 state.count--
           }
      
       }
   },
   actions:{
       add:(context)=>{
           context.commit('add');
       },
       sub:(context)=>{
           context.commit('sub');
       }
   }
})

export default store;