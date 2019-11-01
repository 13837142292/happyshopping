import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/home.vue"
import sellwell from "../components/Home/components/sellwell.vue"
import news from "../components/Home/components/news.vue"
import indexsearch from "../components/Home/components/serch.vue"
import ClassifySort from "../components/ClassifySort/classifySort.vue"
import My from "../components/My/my.vue"
import ShoppingCart from "../components/ShoppingCart/shoppingCart.vue"
import detail from "../components/ShoppingCart/components/detail-one.vue"
import decripe from "../components/ShoppingCart/components/decripe.vue"
import parameter from "../components/ShoppingCart/components/parameter.vue"
import send from "../components/ShoppingCart/components/send.vue"

import serch from "../components/ClassifySort/components/serch.vue"
import sortlist from "../components/ClassifySort/components/sortlist.vue"
import userTop from "../components/My/components/user-top.vue"
import login from "../components/My/components/login.vue"
Vue.use(VueRouter)

let    routes=[
    {
        path: "/login",
        component: login
    },
    {
        path: '/userTop',
        component: userTop
    },
        {
            path:'/',
            redirect:"/home"
        },
        {
            path:'/home',
            component:Home
        },
        {
            path:'/my',
            component:My
        },
        {
            path:'/classifySort',
            component:ClassifySort
        },
        {
            path:'/shoppingCart',
            component:ShoppingCart
        }, 
        {
             path:'/detail-one',
             component:detail,
             children:[
                 {
                     path:"",
                     redirect:"decripe"

                 },
                          {
                             path:"decripe",
                             component:decripe
                          },
                          {
                             path:"parameter",
                             component:parameter
                          },
                          {
                             path:"send",
                             component:send
                          }
                     ]
        },
        
        {   
            name:"serch",
            path:"/serch",
            component:serch
        },
        {
            name:"indexsearch",
            path:'/indexsearch',
            component:indexsearch
        },
        {
            name:"sortlist",
            path:"/sortlist",
            component:sortlist
        },
        {
            path:'*',
            redirect:"/home"
        },
        {
            path:'/sellwell',
            component:sellwell
        },
        {
            path:'/news',
            component:news
        },
        
      
        
    ]
    let router=new VueRouter({
        routes
    })
export default router;