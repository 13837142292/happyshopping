import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/home.vue"
import ClassifySort from "../components/ClassifySort/classifySort.vue"
import My from "../components/My/my.vue"
import ShoppingCart from "../components/ShoppingCart/shoppingCart.vue"
import serch from "../components/ClassifySort/components/serch.vue"
import detail from "../components/ShoppingCart/components/detail-one.vue"
import sortlist from "../components/ClassifySort/components/sortlist.vue"
import userTop from "../components/users/components/user-top.vue"
import login from "../components/users/components/login.vue"


// gauihdiojasidhfaus
import help from "../components/My/components/help.vue"
import openApp from "../components/My/components/openApp.vue"
import vip from "../components/My/components/vip.vue"
import set from "../components/My/components/set.vue"
import mypay from "../components/My/components/mypay.vue"
import myLike from "../components/My/components/mylike.vue"
// dsaiojdfopasjdopas
Vue.use(VueRouter)

let    routes=[
    // fnsafjopajfopakspf
    // {
    //     path:"/set",
    //     component:set
    // },
    {
        path:"/openApp",
        component:openApp
        },
        // {
        // path:"/help",
        // component:help
        // },
        {
        path:"/mypay",
        component:mypay
        },
        {
        path:"/vip",
        component:vip
        },
        {
        path:"/set",
        component:set
        },
        {
        path:"/help",
        component:help
        },
        {
        path:"/mylike",
        component:myLike
        },
    // jfpsiadojfioajofkadsp
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
            name:"serch",
            path:"/serch",
            component:serch
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
             path:'/detail-one',
             component:detail
        }
        
    ]
    let router=new VueRouter({
        routes
    })
export default router;