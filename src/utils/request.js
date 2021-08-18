/*
 * @Description:请求响应拦截器
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-10 23:51
 * @LastEditTime: 2021-8-18 21:30:26
 * @LastEditors: the-ruffian
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
    if (config.method === 'post' || config.method === 'put') {
      config.headers.contentType = 'application/json'
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
