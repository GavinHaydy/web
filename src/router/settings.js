/*
 * @Description:系统设置
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-09 22:48
 * @LastEditTime: 2021-04-09 22:48
 * @LastEditors: the-ruffian
*/
import memberManage from '../pages/setting/authSettings/memberManage'
import Default from '../pages/Default'
const setting = {
  path: '/setting',
  meta: {title: '系统设置', icon: '#i-system', layer: 3},
  component: Default,
  redirect: '/setting/index',
  children: [{
    path: 'authSettings',
    component: Default,
    meta: {title: '权限设置'},
    redirect: 'memberManage',
    children: [{
      path: 'memberManage',
      meta: {title: '人员管理'},
      component: memberManage
    }]
  }]
}
export default setting
