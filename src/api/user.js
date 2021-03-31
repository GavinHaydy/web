/*
 * @Description:user.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-12 11:46
 * @LastEditTime: 2021-3-31 16:38:43
 * @LastEditors: BugP
*/
import request, {Method} from '../utils/request'

export const userRegister = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/user/register',
    method: Method.POST,
    data
  })
}
export const userLogin = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/user/login',
    method: Method.POST,
    data
  })
}
export const userDelete = (data = {}) => {
  return request({
    url: '/api/user/delete' + data.phone,
    method: Method.DELETE,
    data
  })
}
export const userUpdate = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/user/' + data.phone,
    method: Method.PUT,
    data
  })
}
export const userFind = (data = {}) => {
  return request({
    url: '/api/user' + data.phone,
    method: Method.GET,
    data
  })
}
export const userFindAll = () => {
  return request({
    url: '/api/user',
    method: Method.GET
  })
}
