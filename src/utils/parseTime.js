/*
 * @Description:parseTime.js
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-06-15 10:50
 * @LastEditTime: 2021-06-15 10:50
 * @LastEditors: the-ruffian
*/
export function parseTime (time) {
  let date = new Date(time) // 时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-'
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
  let D = date.getDate() + ' '
  let h = date.getHours() + ':'
  let m = date.getMinutes() + ':'
  let s = date.getSeconds()
  return Y + M + D + h + m + s
}
