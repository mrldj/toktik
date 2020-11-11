import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import store from '@/store'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
let router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/attention',
      name: '关注页',
      component: () => import('@/views/attention/attention.vue')
    },
    {
      path: '/index',
      name: '首页',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/message',
      name: '消息页',
      component: () => import('@/views/message/message.vue')
    },
    {
      path: '/user',
      name: '用户页',
      component: () => import('@/views/user/user.vue')
    }
  ]
})

// router.beforeEach((to, from, next) => {
//   if (!store.state.isLogged && to.path !== '/home') {
//     next({ path: '/home' })
//   } else {
//     next()
//   }
// })

export default router
