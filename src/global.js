/*
 * @Description:global.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-06-30 11:13
 * @LastEditTime: 2021-8-11 21:57:54
 * @LastEditors: BugP
*/
import Vue from 'vue'
const checkPhone = /^1[34578][0-9]{9}$/
const checkPassword = /^[A-Za-z0-9]{8,20}$/
const checkEmail = /^[a-zA-Z0-9_-]{6,20}@[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)+$/
const checkCode = /^[0-9]{4}$/
const checkNull = /\s/

export default {
  install () {
    Vue.prototype.$checkPhone = checkPhone
    Vue.prototype.$checkPassword = checkPassword
    Vue.prototype.$checkEmail = checkEmail
    Vue.prototype.$checkCode = checkCode
    Vue.prototype.$checkNull = checkNull
  }
}
