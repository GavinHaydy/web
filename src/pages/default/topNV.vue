<!--
 * @Description:topNV.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-13 18:43
 * @LastEditTime: 2021-03-13 21:12:44
 * @LastEditors: BugP
-->
<template>
  <div
    class="topNV"
  >
    <el-row>
      <el-col
        :span=1
      >
        <a href="/">主页</a>
      </el-col>
      <el-col
        :span=1
        class="right"
      >
        <a :href="register" v-if="login === null">注册</a>
      </el-col>
      <el-col
        :span=1
        class="right"
        v-if="username === null"
      >
        <a :href="loginPath">登录</a>
      </el-col>
      <el-col
        :span=1
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
  }
}
</script>

<style scoped>

</style>
