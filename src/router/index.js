import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home/home.vue"
import ClassifySort from "../components/ClassifySort/classifySort.vue"
import My from "../components/My/my.vue"
import ShoppingCart from "../components/ShoppingCart/shoppingCart.vue"
<<<<<<< HEAD
import detail from "../components/ShoppingCart/components/detail-one.vue"

=======
import serch from "../components/ClassifySort/components/serch.vue"
>>>>>>> 4515800fc72fccf1f052566e2509b4d8d26f0435
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
            name:"serch",
            path:"/serch",
            component:serch
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