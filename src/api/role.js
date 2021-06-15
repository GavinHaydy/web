/*
 * @Description:role.js
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-06-15 09:03
 * @LastEditTime: 2021-06-15 09:03
 * @LastEditors: the-ruffian
*/
import request, {Method} from '../utils/request'
export const roleList = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/role/list',
    method: Method.POST,
    data
  })
}
export const addRole = (data = {}) => {
  return request({
    header: {
      'Content-Type': 'application/json'
    },
    url: '/api/role/add',
    method: Method.POST,
    data
  })
}
export const updateRole = (data = {}) => {
  return request({
    header: {
      'Content-type': 'application/json'
    },
    url: '/api/role/update',
    method: Method.PUT,
    data
  })
}
export const deleteRole = (data = {}) => {
  return request({
    url: '/api/role/delete/' + data.roleName,
    method: Method.DELETE,
    data
  })
}
