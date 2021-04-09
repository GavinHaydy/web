/*
 * @Description:index.js
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-09 14:09
 * @LastEditTime: 2021-04-09 14:09
 * @LastEditors: the-ruffian
*/

import Vue from 'vue'
import Vuex from 'vuex'
import types from './types'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    types
  }
})
export default store
