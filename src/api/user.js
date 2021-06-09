/*
 * @Description:user.js
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-12 11:46
 * @LastEditTime: 2021-04-11 19:20:50
 * @LastEditors: the-ruffian
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
    url: '/api/user/delete/' + data.phone,
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
export const userFindAll = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/user/list',
    method: Method.POST,
    data
  })
}
export const getMenu = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/auth/list',
    method: Method.POST,
    data
  })
}
