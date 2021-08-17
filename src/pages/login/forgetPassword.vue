<!--
 * @Description:忘记密码页
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-08-04 21:10
 * @LastEditTime: 2021-8-17 21:42:35
 * @LastEditors: the-ruffian
-->
<template>
  <div>
    <el-card
      class="card-box">
      <div
        slot="header"
        style="text-align: center"
      >
        <h3>忘记密码</h3>
      </div>
      <el-form
        inline="inline"
        :model="form"
        :rules="rules"
      >
        <el-row>
          <el-form-item
            prop="email">
            <el-input
              maxlength="30"
              v-model="form.email"
              placeholder="请输入邮箱地址"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item
            prop="code"
          >
            <el-input
              maxlength="4"
              v-model="form.code"
              placeholder="请输入验证码"></el-input>
          </el-form-item>
          <el-button
            style="background-color: transparent;border: transparent;color: blue"
            @click="getCode"
            v-if="show"
          >获取验证码</el-button>
          <el-button
            style="background-color: transparent;border: transparent;color: red"
            @click="getCode"
            v-else>{{this.getCodeTime}}</el-button>
        </el-row>
        <el-row>
          <el-form-item
            prop="password">
            <el-input
              v-model="form.password"
              type="password"
              show-password
              placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item
            prop="rePassword">
            <el-input
              v-model="form.rePassword"
              type="password"
              show-password
              placeholder="请确认密码"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-button
            type="primary"
            size="mini"
            class="right"
            @click="handleBack"
          >返回登录页</el-button>
          <el-button
            type="primary"
            size="mini"
            class="right"
            @click="handleSubmit"
          >确认修改</el-button>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {forgetPassword, getCode} from '../../api/user'

export default {
  name: 'forgetPassword',
  data () {
    const checkEmail = (rule, value, callback) => {
      if (!this.$checkEmail.test(value)) {
        callback(new Error('请填写正确的邮箱'))
      }
    }
    const checkCode = (rule, value, callback) => {
      if (!this.$checkCode.test(value)) {
        callback(new Error('请输入正确验证码'))
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (!this.$checkPassword.test(value)) {
        callback(new Error('密码8-20位，支持英文、数字'))
      }
    }
    const checkRepass = (rule, value, callback) => {
      if (value !== this.form.password) {
        callback(new Error('两次密码不一致，请重新输入'))
      } else if (!this.$checkPassword.test(value)) {
        callback(new Error('密码8-20位，支持英文、数字'))
      }
    }
    return {
      form: {
        email: '',
        code: '',
        password: '',
        rePassword: ''
      },
      rules: {
        email: [{validator: checkEmail, trigger: 'blur'}],
        code: [{validator: checkCode, trigger: 'blur'}],
        password: [{validator: checkPassword, trigger: 'blur'}],
        rePassword: [{validator: checkRepass, trigger: 'blur'}]
      },
      getCodeTime: 60,
      show: true
    }
  },
  methods: {
    handleSubmit () {
      if (this.form.password === this.form.rePassword) {
        const password = this.$md5(this.form.password)
        forgetPassword({
          'password': password,
          'rePassword': password,
          'code': this.form.code,
          'email': this.form.email
        })
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success(res.data.message)
              setTimeout(function () { location.replace('/login') }, 2000)
            } else {
              this.$message.error(res.data.message)
            }
          })
      }
    },
    handleBack () {
      location.replace('/login')
    },
    getCode () {
      if (this.show) {
        getCode({
          'tos': this.form.email
        }).then(res => {
          if (res.code === 200) {
            this.show = false
            this.timer = setInterval(() => {
              this.getCodeTime--
              if (this.getCodeTime === 0) {
                this.show = true
                clearInterval(this.timer)
              }
            }, 1000)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.card-box{
  background-color: #f9a7a7;
  width: 36%;
  height: 45vh;
  margin-top: 30vh;
  margin-left: 32%;
}
</style>
