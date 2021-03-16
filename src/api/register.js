/*
 * @Description:register.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-12 11:46
 * @LastEditTime: 2021-03-12 11:46
 * @LastEditors: BugP
*/
import request, {Method} from '../utils/request'

export const userRegister = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/register',
    method: Method.POST,
    data
  })
}
export const userLogin = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/login',
    method: Method.POST,
    data
  })
}
