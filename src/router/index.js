import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import urlerror from "../components/urlerror";
import App from "../App";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '*',
      name: 'error',
      component: urlerror,
      meta: {
        keepAlive: true
      }
    }
  ]
})
