/*
 * @Description:角色模块接口
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-06-15 09:03
 * @LastEditTime: 2021-8-18 21:19:40
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
