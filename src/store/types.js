/*
 * @Description:types.js
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-09 11:36
 * @LastEditTime: 2021-04-09 11:36
 * @LastEditors: the-ruffian
*/

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const types = {
  state: {
    type: 1
  },
  mutations: {
    handleClick (state) {
      if (state.type === 1) {
        state.type = 2
      } else {
        state.type = 1
      }
      console.log(state.type)
    }
  }
}
// export default {
//   types
// }
export default types
