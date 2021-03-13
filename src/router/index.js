/*
 * @Description: 路由
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-03-13 10:23:51
 * @LastEditors: zhu
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import {Layout} from '../layouts'
import register from '../pages/login/register'
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
      path: '/register',
      name: '注册',
      component: register
    }
  ]
})
