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
        :data="userList.form"
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
          prop="gender"
        >
          <template slot-scope="scope">
            <span>{{scope.row.gender === '2' ? '保密' : scope.row.gender === '0' ? '女' :'男'}}</span>
          </template>
        </el-table-column>
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
      <el-pagination
        @current-change="handleCurrentChange"
        :total="userList.total"
        :current-page="userList.current"
        :page-size="userList.size"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes="[15]"
      ></el-pagination>
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
          label="手机号"
        >
          <el-input
            v-model="form.phone"
            disabled
          ></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
        >
          <el-input
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
      userList: {
        current: 1,
        orders: [],
        pages: 0,
        size: 0,
        total: 0,
        form: []
      },
      dialogFormVisible: false,
      form: {
        username: '',
        phone: '',
        email: ''
      }
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      userFindAll({pageNo: this.userList.current})
        .then(res => {
          this.userList.current = res.data.result.current
          this.userList.orders = res.data.result.orders
          this.userList.pages = res.data.result.pages
          this.userList.size = res.data.result.size
          this.userList.total = res.data.result.total
          this.userList.form = res.data.result.records
          console.log(this.userList.form.gender)
        })
    },
    handleCurrentChange (val) {
      userFindAll({pageNo: val})
        .then(res => {
          this.userList.current = res.data.result.current
          this.userList.orders = res.data.result.orders
          this.userList.pages = res.data.result.pages
          this.userList.size = res.data.result.size
          this.userList.total = res.data.result.total
          this.userList.form = res.data.result.records
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
      this.form.email = row.email
      this.form.username = row.username
    },
    handleUpdate () {
      if (this.form.username !== null && this.form.username !== '' &&
        this.form.email !== null && this.form.email !== ''
      ) {
        userUpdate({
          phone: this.form.phone,
          username: this.form.username,
          email: this.form.email})
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg)
              this.dialogFormVisible = false
              setTimeout(function () { location.reload() }, 1000)
            } else {
              this.$message.error(res.data.msg)
            }
          })
      } else if (this.form.email === '' || this.form.email === null) {
        this.$message.error('请填写邮箱')
      } else if (this.form.username === '' || this.form.username === null) {
        this.$message.error('请填写用户名')
      }
    }
  }
}
</script>

<style scoped>

</style>
