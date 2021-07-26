/*
 * @Description: 路由
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-07-18 21:00:18
 * @LastEditors: the-ruffian
 */
import Vue from 'vue'
import Router from 'vue-router'
import {Layout} from '../layouts'
import setting from './settings'
import Default from '../pages/Default'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/default',
      name: 'default',
      component: Layout,
      redirect: '/home',
      beforeEnter: (to, from, next) => {
        const loginInfo = localStorage.getItem('token')
        loginInfo ? next() : next({
          path: '/login'
        })
        next()
      },
      children: [
        setting,
        {
          path: '/home',
          name: 'HelloWorld',
          component: () => import('@/components/HelloWorld/')
        }
      ]
    },
    {
      path: '/register',
      name: '注册',
      component: () => import('@/pages/login/register/')
    },
    {
      path: '/',
      redirect: '/login',
      component: Default,
      children: [
        {
          path: '/login',
          name: '登录',
          component: () => import('@/pages/login/login/')
        }
      ]
    },
    {
      path: '*',
      redirect: 'error',
      component: Layout,
      children: [{
        path: 'error',
        component: () => import('@/pages/errorPage/')
      }]}
  ]
})
