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
service.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(function (response) {
  if (response.data.state === false) {
    localStorage.clear()
    location.replace('/')
  } else {
    return response
  }
})
export const Method = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  DELETE: 'delete'
}
export default service
