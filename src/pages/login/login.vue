<!--
 * @Description:login.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-16 09:21
 * @LastEditTime: 2021-04-11 19:15:07
 * @LastEditors: the-ruffian
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
                @keyup.enter.native="handleLogin"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-button
              size="mini"
              type="success"
              class="right"
              @click="Register"
            >
              注册
            </el-button>
            <el-button
              size="mini"
              type="primary"
              class="right login_btn"
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
import {userLogin} from '../../api/user'

export default {
  name: 'login',
  data () {
    return {
      register: '/register',
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
            if (response.data.code === 200) {
              this.res = response.data.token
              const token = response.data.token
              console.log(token)
              localStorage.setItem('token', token)
              localStorage.setItem('username', response.data.username)
              localStorage.setItem('is_login', 'true')
              location.replace('/')
            } else {
              this.$message.error(response.data.msg)
              setTimeout(function () { location.reload() }, 1500) // 一秒后刷新页面
            }
          })
      }
    },
    Register () {
      location.replace(this.register)
    }
  }
}
</script>

<style scoped>

</style>
