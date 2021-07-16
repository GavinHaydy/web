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
      <el-card>
        <el-form
          inline="inline"
        >
          <el-row>
            <el-col
              :span="8">
              <el-form-item label="手机号">
                <el-input
                  v-model="phone_s"></el-input>
              </el-form-item>
            </el-col>
            <el-col
              :span="8">
              <el-form-item label="用户名">
                <el-input
                  v-model="username_s"></el-input>
              </el-form-item>
            </el-col>
            <el-col
              :span="8">
              <el-form-item label="邮箱">
                <el-input
                  v-model="email_s"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col
              :span="8">
              <el-form-item label="性别">
                <el-select
                  placeholder="请选择"
                  clearable
                  v-model="gender"
                >
                  <el-option
                    v-for="(gender, index) in gender_s"
                    :key="index"
                    :label="gender.label"
                    :value="gender.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-button
              class="right_btn"
              type="danger"
              @click="empty"
            >重置</el-button>
            <el-button
            @click="ajaxFun"
            class="right_btn"
            type="primary">查询</el-button>
          </el-row>
        </el-form>
      </el-card>
    </div>
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
            <span>{{scope.row.gender === 2 ? '保密' : scope.row.gender === 0 ? '女' :'男'}}</span>
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
        @size-change="handleSizeChange"
        :total="userList.total"
        :current-page="userList.current"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes=pageSizes
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
      pageNo: 1,
      pageSizes: [10, 15, 30, 50],
      pageSize: 15,
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
      },
      phone_s: '',
      email_s: '',
      gender: '',
      gender_s: [
        {value: 0, label: '女'},
        {value: 1, label: '男'},
        {value: 2, label: '保密'}
      ],
      username_s: '',
      search_form: {}
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      userFindAll({
        'phone': this.phone_s,
        'email': this.email_s,
        'username': this.username_s,
        'gender': this.gender,
        'pageNo': 1,
        'pageSize': this.pageSize})
        .then(res => {
          this.userList.current = res.data.result.pageNum
          this.userList.orders = res.data.result.orders
          this.userList.pages = res.data.result.pages
          this.userList.size = res.data.result.size
          this.userList.total = res.data.result.total
          this.userList.form = res.data.result.list
        })
    },
    handleCurrentChange (val) {
      this.pageNo = val
      userFindAll({
        'phone': this.phone_s,
        'email': this.email_s,
        'username': this.username_s,
        'gender': this.gender,
        'pageNo': val,
        'pageSize': this.pageSize})
        .then(res => {
          this.userList.current = res.data.result.pageNum
          this.userList.orders = res.data.result.orders
          this.userList.pages = res.data.result.pages
          this.userList.size = res.data.result.size
          this.userList.total = res.data.result.total
          this.userList.form = res.data.result.list
        })
    },
    handleSizeChange (val) {
      this.pageSize = val
      userFindAll({
        'phone': this.phone_s,
        'email': this.email_s,
        'username': this.username_s,
        'gender': this.gender,
        'pageNo': this.pageNo,
        'pageSize': val})
        .then(res => {
          this.userList.current = res.data.result.pageNum
          this.userList.orders = res.data.result.orders
          this.userList.pages = res.data.result.pages
          this.userList.size = res.data.result.size
          this.userList.total = res.data.result.total
          this.userList.form = res.data.result.list
        })
    },
    handleDelete (row) {
      userDelete({phone: row.phone})
        .then(res => {
          if (res.data.success === false) {
            this.$message.error(res.data.message)
          } else {
            this.$message.success(res.data.message)
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
          username: this.form.usrername,
          email: this.form.email})
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success(res.data.message)
              this.dialogFormVisible = false
              setTimeout(function () { location.reload() }, 1000)
            } else {
              this.$message.error(res.data.message)
            }
          })
      } else if (this.form.email === '' || this.form.email === null) {
        this.$message.error('请填写邮箱')
      } else if (this.form.username === '' || this.form.username === null) {
        this.$message.error('请填写用户名')
      }
    },
    empty () {
      this.gender = ''
      this.username_s = ''
      this.phone_s = ''
      this.email_s = ''
    }
  }
}
</script>

<style scoped>

</style>
