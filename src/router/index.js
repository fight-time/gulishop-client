// 引入并使用插件
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

import Home from "@/pages/Home"
import Search from "@/pages/Search"
import Login from "@/pages/Login"
import Register from "@/pages/Register"

export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            name:'search',
            path:'/search/:keyword',
            component:Search
        },
        {
            path:'/login',
            component:Login,
            // 路由对象当中的元配置项，可以配置想要的任何数据
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/',
            redirect:"/home"
        }
    ]   //配置路由

})