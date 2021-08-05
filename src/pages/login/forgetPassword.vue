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
        :v-model="form"
      >
        <el-row>
          <el-input
            :v-model="form.tel"
            placeholder="请输入手机号"></el-input>
        </el-row>
        <el-row>
          <el-input
            style="width: 70%"
            :v-model="form.code"
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
        </el-row>
        <el-row>
          <el-input
            :v-model="form.password"
            placeholder="请输入密码"></el-input>
        </el-row>
        <el-row>
          <el-input
            :v-model="form.rePassword"
            placeholder="请确认密码"></el-input>
        </el-row>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'forgetPassword',
  data () {
    return {
      form: {
        tel: '',
        code: '',
        password: '',
        rePassword: ''
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
