<!--
 * @Description:register.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-03-10 23:52
 * @LastEditTime: 2021-03-10 23:52
 * @LastEditors: BugP
-->
<template>
  <div
    class="register_fa"
  >
    <el-form
      class="register_form"
      inline="inline"
    >
      <el-row>
        <el-form-item
          label="电话"
        >
          <el-input
            v-model="phone"
            maxlength="11"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="昵称"
        >
          <el-input
            v-model="user"
            maxlength="20"
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
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="确认密码"
        >
          <el-input
            v-model="rePass"
            show-password
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="邮箱"
        >
          <el-input
            v-model="email"
            type="email"
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="性别"
        >
          <el-input
            v-model="sex"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-button
          type="primary"
          @click="handleClick"
        >注册</el-button>
      </el-row>
    </el-form>
  </div>
</template>

<script>
// import service from '../../utils/request'
import {userRegister} from '../../api/register'
export default {
  name: 'register',
  data () {
    return {
      phone: '',
      user: '',
      sex: '',
      password: '',
      rePass: '',
      email: ''
    }
  },
  methods: {
    handleClick () {
      userRegister({
        'username': this.user,
        'phone': this.phone,
        'sex': this.sex,
        'password': this.password,
        'email': this.email
      })
    }
  }
}
</script>

<style scoped>

</style>
