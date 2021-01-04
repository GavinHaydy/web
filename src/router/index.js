/*
 * @Description: 路由
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-01-04 11:35:59
 * @LastEditors: zhu
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Urlerror from '../components/Urlerror'
import {Layout} from '@/layouts'
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
      path: '*',
      name: 'error',
      component: Urlerror,
      meta: {
        home: false,
        keepAlive: false,
        app_view: true
      }
    }
  ]
})
