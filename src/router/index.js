import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/home.vue"
import ClassifySort from "../components/ClassifySort/classifySort.vue"
import My from "../components/My/my.vue"
import ShoppingCart from "../components/ShoppingCart/shoppingCart.vue"

Vue.use(VueRouter)

let    routes=[
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
            path:'*',
            redirect:"/home"
        }
        
    ]
    let router=new VueRouter({
        routes
    })
export default router;