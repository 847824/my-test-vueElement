import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Layout from '@/page/Layout'
import home from '@/page/pages/home'
import user from '@/page/pages/user'
import login from '@/page/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [{ // 嵌套路由
        // 这里不设置值，是把main作为默认页面
        path: '/',
        name: 'home',
        component: home
      }, {
        path: '/user',
        name: 'user',
        component: user
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
