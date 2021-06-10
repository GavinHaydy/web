<!--
 * @Description:left.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-08 16:13
 * @LastEditTime: 2021-4-8 17:25:13
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
            index="/">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#i-home"></use>
            </svg>
            <span>首页</span>
          </el-menu-item>
          <el-submenu
            v-if="menu.result"
            :index="'/' + menu.result.url"
          >
            <template
              slot="title"
              style="text-align: center"
            >
              <svg
                class="icon" aria-hidden="true"
              >
                <use
                  :href="menu.result.icon"></use>
              </svg>
              <span>{{menu.result.permissionName}}</span>
            </template>
            <el-submenu
              v-if="menu.child.result"
              :index="'/' + menu.result.url + '/' + menu.child.result.url"
            >
              <template
                slot="title"
              >{{menu.child.result.permissionName}}</template>
              <el-menu-item
                v-if="menu.child.child.result"
                :index="'/' + menu.result.url + '/' + menu.child.result.url + '/' + menu.child.child.result.url"
              >
                {{menu.child.child.result.permissionName}}
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
        result: {},
        child: {
          result: {},
          child: {
            result: {}
          }
        }
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
          if (res.data.code === 200 && res.data.child.child.result !== {}) {
            this.menu.child.child.result = res.data.child.child.result
            this.menu.child.result = res.data.child.result
            this.menu.result = res.data.result
          }
          if (res.data.code === 200 && res.data.child.result !== {}) {
            this.menu.child.result = res.data.child.result
            this.menu.result = res.data.result
          } else {
            this.menu.result = res.data.result
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
