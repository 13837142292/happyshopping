import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/home.vue"
import ClassifySort from "../components/ClassifySort/classifySort.vue"
import My from "../components/My/my.vue"
import ShoppingCart from "../components/ShoppingCart/shoppingCart.vue"
import userTop from "../components/My/components/user-top.vue"
import login from "../components/My/components/login.vue"
// 登录注册页面组件注册
Vue.use(VueRouter)



let routes = [
    {
        path: "/login",
        component: login
    },
    {
        path: '/userTop',
        component: userTop
    },
    {
        path: '/',
        redirect: "/home"
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/my',
        component: My
    },
    {
        path: '/classifySort',
        component: ClassifySort
    },
    {
        path: '/shoppingCart',
        component: ShoppingCart
    },
    {
        path: '*',
        redirect: "/home"
    },
    // {
    //     path:"/my/:id",
    //     component:userTop,
    //     children:[
    //         {
    //             path:"/",
    //             redirect:"/user1"
    //         },
    //         {
    //             path:"/user1",
    //             component:user
    //         },
    //         {
    //             path:"/quickLogon1",
    //             component:quickLogon
    //         },
    //         {
    //             path:"*",
    //             redirect:"/user1"
    //         }
    //     ]
    // }

]
let router = new VueRouter({
    routes
})


export default router;