/*
 * @Description:角色模块接口
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-06-15 09:03
 * @LastEditTime: 2021-08-22 17:49:45
 * @LastEditors: the-ruffian
*/
import request, {Method} from '../utils/request'
export const roleList = (data = {}) => {
  return request({
    url: '/api/role/list',
    method: Method.POST,
    data
  })
}
export const addRole = (data = {}) => {
  return request({
    url: '/api/role/add',
    method: Method.POST,
    data
  })
}
export const updateRole = (data = {}) => {
  return request({
    url: '/api/role/update',
    method: Method.PUT,
    data
  })
}
export const deleteRole = (data = {}) => {
  return request({
    url: '/api/role/delete/',
    method: Method.DELETE,
    data
  })
}
export const permission = (data = {}) => {
  return request({
    url: '/api/role/permission',
    method: Method.POST,
    data
  })
}
