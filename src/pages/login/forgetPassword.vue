<!--
 * @Description:forgetPassword.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-08-04 21:10
 * @LastEditTime: 2021-8-5 21:53:09
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
            label="账号"
            prop="phone">
            <el-input
              maxlength="11"
              v-model="form.phone"
              placeholder="请输入手机号"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item
            label="验证码"
            prop="code"
          >
            <el-input
              maxlength="4"
              style="width: 70%"
              v-model="form.code"
              placeholder="请输入验证码"></el-input>
            <el-button
              style="width: 29%; color: #3a8ee6"
              @click="getCode"
              v-if="show"
            >获取验证码</el-button>
            <el-button
              style="width: 29%; color: #3a8ee6"
              @click="getCode"
              v-else>{{this.getCodeTime}}</el-button>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item
            label="密码"
            prop="password">
            <el-input
              v-model="form.password"
              placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-form-item
            label="密码"
            prop="rePassword">
            <el-input
              v-model="form.rePassword"
              placeholder="请确认密码"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'forgetPassword',
  data () {
    const checkPhone = (rule, value, callback) => {
      if (!this.$checkPhone.test(value)) {
        callback(new Error('请填写正确的手机号'))
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
        phone: '',
        code: '',
        password: '',
        rePassword: ''
      },
      rules: {
        phone: [{validator: checkPhone, trigger: 'blur'}],
        code: [{validator: checkCode, trigger: 'blur'}],
        password: [{validator: checkPassword, trigger: 'blur'}],
        rePassword: [{validator: checkRepass, trigger: 'blur'}]
      },
      getCodeTime: 60,
      show: true
    }
  },
  methods: {
    getCode () {
      this.show = false
      this.timer = setInterval(() => {
        this.getCodeTime--
        if (this.getCodeTime === 0) {
          this.show = true
          clearInterval(this.timer)
        }
      }, 1000)
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
.el-row{
  margin-top: 3vh;
  width: 80%;
  margin-left: 10%;
}
</style>
