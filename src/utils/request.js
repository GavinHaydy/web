/*
 * @Description:request.js
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-10 23:51
 * @LastEditTime: 2021-03-10 23:51
 * @LastEditors: BugP
*/
import axios from 'axios'

const service = axios.create({
  baseURL: '106.13.171.218:82',
  timeout: 1000
})
service.interceptors.response.use(function (response) {
  if (response.data.code === 200) {
    return response
  } else {
    return response.data.message
  }
})
