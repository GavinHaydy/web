/*
 * @Description:用户管理模块接口
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-12 11:46
 * @LastEditTime: 2021-8-18 21:18:49
 * @LastEditors: the-ruffian
*/
import request, {Method} from '../utils/request'

export const userRegister = (data = {}) => {
  return request({
    url: '/api/user/register',
    method: Method.POST,
    data
  })
}
export const userLogin = (data = {}) => {
  return request({
    url: '/api/user/login',
    method: Method.POST,
    data
  })
}
export const userDelete = (data = {}) => {
  return request({
    url: '/api/user/delete/',
    method: Method.DELETE,
    data
  })
}
export const userUpdate = (data = {}) => {
  return request({
    url: '/api/user/update',
    method: Method.PUT,
    data
  })
}
export const userFindAll = (data = {}) => {
  return request({
    url: '/api/user/list',
    method: Method.POST,
    data
  })
}
export const getMenu = (data = {}) => {
  return request({
    url: '/api/auth/list',
    method: Method.POST,
    data
  })
}
export const getCode = (data = {}) => {
  return request({
    url: '/api/getCode',
    method: Method.POST,
    data
  })
}
export const forgetPassword = (data = {}) => {
  return request({
    url: '/api/forgetPassword',
    method: Method.POST,
    data
  })
}
