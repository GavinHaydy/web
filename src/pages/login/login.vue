<!--
 * @Description:login.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-16 09:21
 * @LastEditTime: 2021-07-17 17:44:52
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
          :model="form"
          :rules="rules"
        >
          <el-row>
            <el-form-item
              label="账号"
              prop="phone"
            >
              <el-input
                size="mini"
                v-model="form.phone"
                maxlength="11"
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item
              label="密码"
              prop="password"
            >
              <el-input
                size="mini"
                v-model="form.password"
                type="password"
                placeholder="请输入密码"
                @keyup.enter.native="handleLogin"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row>
            <a
              href="/forgetPassword"
            >
              忘记密码
            </a>
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
    const checkPhone = (rule, value, callback) => {
      if (!this.$checkPhone.test(value)) {
        callback(new Error('请填写正确的手机号'))
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (!this.$checkPassword.test(value)) {
        callback(new Error('密码8-20位，支持英文、数字'))
      }
    }
    return {
      register: '/register',
      form: {
        phone: '',
        password: ''
      },
      rules: {
        phone: [{validator: checkPhone, trigger: 'blur'}],
        password: [{validator: checkPassword, trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleLogin () {
      const md5Password = this.$md5(this.form.password)
      if (this.$checkPassword.test(this.form.password) && this.$checkPhone.test(this.form.phone)) {
        userLogin({
          'phone': this.form.phone,
          'password': md5Password
        })
          .then(response => {
            if (response.data.success === true) {
              const token = response.data.result.token
              localStorage.setItem('token', token)
              localStorage.setItem('phone', this.form.phone)
              localStorage.setItem('username', response.data.result.username)
              localStorage.setItem('is_login', 'true')
              location.replace('/default')
            } else {
              this.$message.error(response.data.message)
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
