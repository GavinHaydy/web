<!--
 * @Description:index.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-09 22:38
 * @LastEditTime: 2021-04-11 21:56:35
 * @LastEditors: the-ruffian
-->
<template>
  <div>
    <div>
      <el-table
        :data="userList"
        highlight-current-row
      >
        <el-table-column
          label="邮箱"
          prop="email"
        ></el-table-column>
        <el-table-column
          label="账号"
          prop="phone"
        ></el-table-column>
        <el-table-column
          label="用户名"
          prop="username"
        ></el-table-column>
        <el-table-column
          label="性别"
          prop="sex"
        ></el-table-column>
        <el-table-column
          label="操作"
          fixed="right"
        >
          <template slot-scope="{row}">
            <el-button
              type="text"
              size="mini"
              @click="handleEdit(row)"
            >编辑</el-button>
            <el-button
              type="text"
              size="mini"
              @click="handleDelete(row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      title="编辑用户"
      :visible.sync="dialogFormVisible"
    >
      <el-form
        :model="form"
      >
        <el-form-item
          label="用户名"
        >
          <el-input
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
        >
          <el-input
            show-password
            v-model="form.password"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="确认密码"
        >
            <el-input
              show-password
              v-model="form.rePassword"
            ></el-input>
        </el-form-item>
        <el-form-item
          label="手机号"
        >
          <el-input
            v-model="form.phone"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item
          label="性别"
        >
          <el-input
            disabled
            v-model="form.sex"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
        >
          <el-input
            disabled
            v-model="form.email"
          ></el-input>
        </el-form-item>
      </el-form>
      <div
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          size="mini"
          @click="dialogFormVisible = false"
        >取消</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="handleUpdate"
        >保存</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {userDelete, userFindAll, userUpdate} from '../../../../api/user'

export default {
  name: 'index',
  data () {
    return {
      userList: [],
      dialogFormVisible: false,
      form: {
        username: '',
        phone: '',
        password: '',
        rePassword: '',
        sex: '',
        email: ''
      }
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      userFindAll()
        .then(res => {
          this.userList = res.data.result
          console.log(res.data)
        })
    },
    handleDelete (row) {
      userDelete({phone: row.phone})
        .then(res => {
          if (res.data.code !== 200) {
            this.$message.error(res.data.msg)
          } else {
            this.$message.success(res.data.msg)
          }
          setTimeout(function () { location.reload() }, 1800)
        })
    },
    handleEdit (row) {
      this.dialogFormVisible = true
      this.form.phone = row.phone
      this.form.sex = row.sex
      this.form.email = row.email
      this.form.username = row.username
    },
    handleUpdate () {
      if (this.form.password === this.form.rePassword) {
        userUpdate({
          phone: this.form.phone,
          password: this.$md5(this.form.password),
          username: this.form.username,
          sex: this.form.sex,
          email: this.form.email})
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg)
              this.dialogFormVisible = false
            } else {
              this.$message.error(res.data.msg)
            }
          })
      } else if (this.form.password !== this.form.rePassword) {
        this.$message.error('两次输入的密码不一致，请重新输入')
      }
    }
  }
}
</script>

<style scoped>

</style>
