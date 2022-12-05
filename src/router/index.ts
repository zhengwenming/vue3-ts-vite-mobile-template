import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'tabbar',
      redirect:'/home',
      component:  () => import('../components/Tabbar.vue'),
      meta: {
        title: '首页',
        keepAlive: false,
        hideBackBtn:false
      },
      children:[
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/Home.vue'),
          meta: {title:'首页',hideBackBtn:true,keepAlive: false}
        },{
          path: '/category',
          name: 'category',
          component: () => import('../views/Category.vue'),
          meta: {title:'分类',hideBackBtn:true,keepAlive: false}
        },{
          path: '/shoppingCart',
          name: 'shoppingCart',
          component: () => import('../views/ShoppingCart.vue'),
          meta: {title:'购物车',hideBackBtn:true,keepAlive: false}
        },{
          path: '/message',
          name: 'message',
          component: () => import('../views/Message.vue'),
          meta: {title:'消息',hideBackBtn:true,keepAlive: false}
        },{
          path: '/mine',
          name: 'mine',
          component: () => import('../views/Mine.vue'),
          meta: {title:'我的',hideBackBtn:true,keepAlive: false}
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
        hideBackBtn:false,
        keepAlive: false
      }
    }
  ]
})
export default router
