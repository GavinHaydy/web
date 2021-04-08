<!--
 * @Description:顶部导航
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-13 18:43
 * @LastEditTime: 2021-4-8 17:23:10
 * @LastEditors: the-ruffian
-->
<template>
  <div
    class="topNV"
  >
    <el-row
      :span=20
    >
      <el-col
        :span=1
      >
        <el-button
          icon="el-icon-s-fold"
        ></el-button>
      </el-col>
      <el-col
        :span=1
        :offset=1
      >
        <a href="/">主页</a>
      </el-col>
      <el-col
        :span=1
        class="right"
      >
        <a :href="register" v-if="login === null">注册</a>
        <a @click="handleExit" v-else>退出</a>
      </el-col>
      <el-col
        :span=1
        class="right"
        v-if="username === null"
      >
        <a :href="loginPath">登录</a>
      </el-col>
      <el-col
        :span=3
        class="right"
        v-else
      >
        <a>{{username}}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topNV',
  data () {
    return {
      register: '/register',
      loginPath: '/login',
      login: localStorage.getItem('is_login'),
      username: localStorage.getItem('username')
    }
  },
  methods: {
    handleExit () {
      localStorage.clear()
      location.replace('/')
    }
  }
}
</script>

<style scoped>

</style>
