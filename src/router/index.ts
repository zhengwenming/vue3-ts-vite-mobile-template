import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tabbar from '../components/Tabbar.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'tabbar',
      redirect:'/home',
      component: Tabbar,
      meta: {
        title:'',
        hideBackBtn:false
      },
      children:[
        {
          path: '/home',
          name: 'home',
          component: Home,
          meta: {
            title:'首页',
            hideBackBtn:true
          }
        },{
          path: '/category',
          name: 'category',
          component: () => import('../views/Category.vue'),
          meta: {
            title:'分类',
            hideBackBtn:true
          }
        },{
          path: '/shoppingCart',
          name: 'shoppingCart',
          component: () => import('../views/ShoppingCart.vue'),
          meta: {
            title:'购物车',
            hideBackBtn:true
          }
        },{
          path: '/message',
          name: 'message',
          component: () => import('../views/Message.vue'),
          meta: {
            title:'消息',
            hideBackBtn:true
          }
        },{
          path: '/mine',
          name: 'mine',
          component: () => import('../views/Mine.vue'),
          meta: {
            title:'我的',
            hideBackBtn:true
          }
        },
        
      ]
    },{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title:'关于',
        hideBackBtn:false
      }
    }
    
  ]
})

export default router
