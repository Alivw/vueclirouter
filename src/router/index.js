import Vue from 'vue'
import VueRouter from "vue-router";
import Home from "@/components/Home";
import About from "@/components/About";
import User from "@/components/User"

Vue.use(VueRouter);

const routes=[
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import('../components/Home'),
    children:[
      {
        path:'news',
        component:()=>import('../components/HomeNews')
      },
      {
        path: 'messages',
        component:()=>import('../components/HomeMessages')
      }
    ]
  },
  {
    path:'/about',
    component:()=>import('../components/About')
  },
  {
    path: '/user/:userId',
    component: ()=>import('../components/User')
  }
]

export default new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:'active'
})