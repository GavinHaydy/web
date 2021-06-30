/*
 * @Description:global.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-06-30 11:13
 * @LastEditTime: 2021-06-30 11:13
 * @LastEditors: BugP
*/
import Vue from 'vue'
const checkPhone = /^1[34578][0-9]{9}$/
const checkPassword = /^[A-Za-z0-9]{8,20}$/
const checkEmail = /^[a-zA-Z0-9_-]{6,20}@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/

export default {
  install () {
    Vue.prototype.$checkPhone = checkPhone
    Vue.prototype.$checkPassword = checkPassword
    Vue.prototype.$checkEmail = checkEmail
  }
}
