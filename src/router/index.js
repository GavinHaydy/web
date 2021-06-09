/*
 * @Description: 路由
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-6-9 09:17:53
 * @LastEditors: the-ruffian
 */
import Vue from 'vue'
import Router from 'vue-router'
import {Layout} from '../layouts'
import setting from './settings'
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Layout,
      redirect: '/hw',
      children: [
        setting,
        {
          path: '/hw',
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
      path: '/login',
      name: '登录',
      component: () => import('@/pages/login/login/')
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
