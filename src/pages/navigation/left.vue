<!--
 * @Description:左边导航菜单
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-08 16:13
 * @LastEditTime: 2021-07-18 19:56:23
 * @LastEditors: the-ruffian
-->
<template>
  <div>
    <el-row
      class="el_col"
      :style="{width: $store.state.types.type === 1 ? '201px!important' : '64px!important'}"
      style="position: fixed"
    >
      <el-col
        :span=24
        style="height: 100vh"
      >
        <el-menu
          style="height: 100vh"
          :unique-opened="true"
          :collapse="$store.state.types.type !== 1"
          :collapse-transition="false"
          :default-active="$route.path"
          background-color="#666666"
          active-text-color="#62d6e2"
          text-color="#37ff2b"
          router
        >
          <el-menu-item
            index="/index">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#i-home"></use>
            </svg>
            <span>首页</span>
          </el-menu-item>
          <el-submenu
            v-for="(parentMenu, index) in menu"
            :key="index"
            v-if="menu.result!==null"
            :index="'/' + parentMenu.url"
          >
            <template
              slot="title"
              style="text-align: center"
            >
              <svg
                class="icon" aria-hidden="true"
              >
                <use
                  :href="parentMenu.icon"></use>
              </svg>
              <span>{{parentMenu.permissionName}}</span>
            </template>
            <el-submenu
              v-for="(Menu, index) in parentMenu.children"
              :key="index"
              v-if="parentMenu!==null"
              :index="'/' + parentMenu.url + '/' + Menu.url"
            >
              <template
                slot="title"
              >{{Menu.permissionName}}</template>
              <el-menu-item
                v-for="(childMenu, index) in Menu.children"
                :key="index"
                v-if="childMenu!==null"
                :index="'/' + parentMenu.url + '/' + Menu.url + '/' + childMenu.url"
              >
                {{childMenu.permissionName}}
              </el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
    <div
      :style="{marginLeft: $store.state.types.type === 1 ? '201px!important' : '64px!important'}"
    >
      <Top/>
    </div>
  </div>
</template>

<script>
import {getMenu} from '../../api/user'
import setting from '../../router/settings'
import Top from './top'
export default {
  name: 'left',
  components: {Top},
  data () {
    return {
      routes: {
        setting
      },
      menu: {
      }
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      if (localStorage.getItem('is_login')) {
        getMenu({
          phone: localStorage.getItem('phone')
        }).then(res => {
          if (res.data.success === true) {
            this.menu = res.data.result
          } else {
            this.$message.error('菜单获取失败')
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.icon {
  width: 18px; height: 18px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
