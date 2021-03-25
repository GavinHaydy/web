<!--
 * @Description:login.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-16 09:21
 * @LastEditTime: 2021-03-16 09:21
 * @LastEditors: BugP
-->
<template>
  <div class="div">
    <div>
      <el-card class="loginForm">
        <div slot="header">
          <span>登录</span>
        </div>
        <el-form
          inline="inline"
        >
          <el-row>
            <el-form-item
              label="账号"
            >
              <el-input
                v-model="phone"
                maxlength="11"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item
              label="密码"
            >
              <el-input
                v-model="password"
                show-password
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button
              type="primary"
              class="right"
              @click="handleLogin"
            >
              登录
            </el-button>
          </el-row>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import {userLogin} from '../../api/register'

export default {
  name: 'login',
  data () {
    return {
      phone: '',
      password: '',
      res: ''
    }
  },
  methods: {
    handleLogin () {
      if (!/^1[0-9]{10}$/.test(this.phone)) {
        this.$message.error('手机号格式不对，请重新输入')
        this.phone = this.password = ''
      } else {
        const md5Password = this.$md5(this.password)
        userLogin({
          'phone': this.phone,
          'password': md5Password
        })
          .then(response => {
            if (response.data.message === '欢迎登录') {
              this.res = response.data
              location.replace('/')
            } else {
              this.$message.error(response.data.msg)
              location.reload()
            }
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
