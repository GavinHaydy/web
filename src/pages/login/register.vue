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
      :model="ruleForm"
      :rules="rules"
    >
      <el-row>
        <el-form-item
          label="电话"
          prop="phone"
        >
          <el-input
            v-model="ruleForm.phone"
            maxlength="11"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="昵称"
          prop="user"
        >
          <el-input
            v-model="ruleForm.user"
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input
            v-model="ruleForm.password"
            show-password
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="确认密码"
          prop="rePass"
        >
          <el-input
            v-model="ruleForm.rePass"
            show-password
            maxlength="20"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input
            v-model="ruleForm.email"
            type="email"
            maxlength="30"
          ></el-input>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item
          label="性别"
          prop="gender"
        >
          <el-select
            placeholder="请选择"
            clearable
            v-model="ruleForm.genderI"
          >
            <el-option
              v-for="(gender, index) in ruleForm.gender"
              :key="index"
              :label="gender.label"
              :value="gender.value"
            ></el-option>
          </el-select>
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
import {userRegister} from '../../api/user'
export default {
  name: 'register',
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
    const checkEmail = (rule, value, callback) => {
      if (!this.$checkEmail.test(value)) {
        callback(new Error('请填写正确的邮箱'))
      }
    }
    const checkRepass = (rule, value, callback) => {
      if (value !== this.ruleForm.password) {
        callback(new Error('两次密码不一致，请重新输入'))
      }
    }
    return {
      ruleForm: {
        phone: '',
        user: '',
        genderI: '',
        gender: [
          {value: 0, label: '女'},
          {value: 1, label: '男'},
          {value: 2, label: '保密'}
        ],
        password: '',
        rePass: '',
        email: ''
      },
      rules: {
        phone: [{validator: checkPhone, trigger: 'blur'}],
        password: [{validator: checkPassword, trigger: 'blur'}],
        email: [{validator: checkEmail, trigger: 'blur'}],
        rePass: [{validator: checkRepass, trigger: 'blur'}]
      }
    }
  },
  methods: {
    handleClick () {
      const md5Password = this.$md5(this.password)
      userRegister({
        'username': this.user,
        'phone': this.phone,
        'gender': this.gender,
        'password': md5Password,
        'email': this.email
      })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success(res.data.msg)
            setTimeout(function () { location.replace('/login') }, 2000)
          } else {
            this.message.error(res.data.msg)
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
