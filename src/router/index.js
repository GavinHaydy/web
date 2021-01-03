import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Urlerror from '../components/Urlerror'
import App from '@/App'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,
      meta: {
        home: false,
        keepAlive: true
      }
    },
    {
      path: '/hw',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        home: true,
        keepAlive: true,
        app_view: false
      }
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
