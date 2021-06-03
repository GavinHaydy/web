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
            v-for="(idea, index) in routes"
            :key="index"
            :index="idea.path"
          >
            <template
              slot="title"
              style="text-align: center"
            >
              <svg
                class="icon" aria-hidden="true"
              >
                <use
                  :href="idea.meta.icon"></use>
              </svg>
              <span>{{idea.meta.title}}</span>
            </template>
            <el-submenu
              :index="idea.path + '/' + idea2.path"
              v-if="idea.meta.layer === 3 "
              v-for="(idea2, index) in idea.children"
              :key="index"
            >
              <template
                slot="title"
              >{{idea2.meta.title}}</template>
              <el-menu-item
                v-for="(idea3, index) in idea2.children"
                :key="index"
                :index="idea.path + '/' + idea2.path + '/' + idea3.path"
              >{{idea3.meta.title}}</el-menu-item>
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
import setting from '../../router/settings'
import Top from './top'
export default {
  name: 'left',
  components: {Top},
  data () {
    return {
      routes: {
        setting
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
