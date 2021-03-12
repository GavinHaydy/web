/*
 * @Description:request.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-10 23:51
 * @LastEditTime: 2021-3-12 12:52:48
 * @LastEditors: BugP
*/
import axios from 'axios'

const service = axios.create({
  // baseURL: '106.13.171.218:81',
  timeout: 5000
})
service.interceptors.response.use(function (response) {
  if (response.data.code === 200) {
    return response
  } else {
    return response.data.message
  }
})
export const Method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
}
export default service
