import Vuex from 'vuex'
import Vue from "vue"
Vue.use(Vuex);

var store=new Vuex.Store({
    state:{
        count:1,
        // 存储token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''

    },
   mutations:{
        // 修改token，并将token存入localStorage
    changeLogin (state, user) {
        state.Authorization = user.Authorization;
        localStorage.setItem('Authorization', user.Authorization);
      },
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