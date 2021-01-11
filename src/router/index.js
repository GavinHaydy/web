/*
 * @Description: 路由
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-01-04 11:35:59
 * @LastEditors: zhu
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Error from '../components/Error'
import {Layout} from '../layouts'
import Navigation from '../components/Navigation'
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
        {
          path: '/hw',
          name: 'HelloWorld',
          component: HelloWorld,
          meta: {
            home: true,
            keepAlive: true,
            app_view: true
          }
        }
      ]
    },
    {
      path: '/nav',
      name: 'Navigation',
      component: Navigation
    },
    {
      path: '*',
      name: 'error',
      component: Error,
      meta: {
        home: false,
        keepAlive: false,
        app_view: true
      }
    }
  ]
})
