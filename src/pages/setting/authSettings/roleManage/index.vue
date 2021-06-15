<!--
 * @Description:index.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-06-15 09:23
 * @LastEditTime: 2021-06-15 09:23
 * @LastEditors: the-ruffian
-->
<template>
  <div>
    <div>
      <el-card>
        <el-form
          inline="inline">
          <el-row>
            <el-col :span=8>
              <el-form-item label="角色名">
                <el-input v-model="roleName_s"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span=8>
              <el-form-item label="备注">
                <el-input v-model="note_s"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-button
              class="right_btn"
              type="danger"
              @click="empty">重置</el-button>
            <el-button
              class="right_btn"
              type="primary"
              @click="ajaxFun">查询</el-button>
          </el-row>
        </el-form>
      </el-card>
    </div>
    <div>
      <el-button
        class="right_btn"
        type="success"
        @click="handleNew"
      >新增角色</el-button>
    </div>
    <div>
      <el-table
        :data="allRole.form">
        <el-table-column
          label="角色名称"
          prop="roleName"></el-table-column>
        <el-table-column
          label="备注"
          prop="note"></el-table-column>
        <el-table-column
          label="创建时间"
          prop="createTime">
          <template slot-scope="scope">
            {{parseTime(scope.row.createTime)}}
          </template>
        </el-table-column>
        <el-table-column
          label="更新时间"
          prop="updateTime">
          <template slot-scope="scope" v-if="scope.row.updateTime > 0">
            {{parseTime(scope.row.updateTime)}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          fixed="right">
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
    <div>
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="allRole.total"
        :current-page="allRole.current"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :page-sizes=pageSizes
      ></el-pagination>
    </div>
    <div>
      <el-dialog
        title="新增角色"
        :visible.sync="addDialogFormVisible"
      >
        <el-form
          :model="add_form"
        >
          <el-form-item
            label="角色名"
          >
            <el-input
              size="mini"
              v-model="add_form.roleName"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="备注"
          >
            <el-input
              v-model="add_form.note"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button
            size="mini"
            @click="addDialogFormVisible = false"
          >取消</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleAdd"
          >保存</el-button>
        </div>
      </el-dialog>
    </div>
    <div>
      <el-dialog
        title="编辑角色"
        :visible.sync="putDialogFormVisible"
      >
        <el-form
          :model="editForm"
        >
          <el-form-item
            label="角色名"
          >
            <el-input
              size="mini"
              v-model="editForm.roleName"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="备注"
          >
            <el-input
              v-model="editForm.note"
              type="textarea"
            ></el-input>
          </el-form-item>
        </el-form>
        <div
          slot="footer"
          class="dialog-footer"
        >
          <el-button
            size="mini"
            @click="putDialogFormVisible = false"
          >取消</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleUpdate"
          >保存</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import {addRole, deleteRole, roleList, updateRole} from '../../../../api/role'
import {parseTime} from '../../../../utils/parseTime'

export default {
  name: 'index',
  data () {
    return {
      pageSizes: [10, 15, 30, 50],
      pageSize: 15,
      allRole: {
        form: [],
        current: 1,
        orders: [],
        pages: 0,
        size: 0,
        total: 0
      },
      search: {},
      roleName_s: '',
      note_s: '',
      add_form: {
        roleName: '',
        note: ''
      },
      addDialogFormVisible: false,
      putDialogFormVisible: false,
      editForm: {
        roleName: '',
        note: '',
        oldName: ''
      }
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      this.handleSearch()
      roleList({
        'search': this.search,
        'pageNo': 1,
        'pageSize': 10
      })
        .then(res => {
          this.allRole.orders = res.data.result.orders
          this.allRole.form = res.data.result.records
          this.allRole.current = res.data.result.current
          this.allRole.pages = res.data.result.pages
          this.allRole.size = res.data.result.size
          this.allRole.total = res.data.result.total
        })
    },
    parseTime,
    handleSearch () {
      this.search = {}
      if (this.roleName_s !== null && this.roleName_s !== '') {
        this.search['roleName'] = this.roleName_s
      }
      if (this.note_s !== null && this.note_s !== '') {
        this.search['note'] = this.note_s
      }
    },
    empty () {
      this.note_s = ''
      this.roleName_s = ''
    },
    handleCurrentChange (val) {
      this.pageNo = val
      roleList({
        'search': this.search_form,
        'pageNo': val,
        'pageSize': this.pageSize})
        .then(res => {
          this.allRole.orders = res.data.result.orders
          this.allRole.form = res.data.result.records
          this.allRole.current = res.data.result.current
          this.allRole.pages = res.data.result.pages
          this.allRole.size = res.data.result.size
          this.allRole.total = res.data.result.total
        })
    },
    handleSizeChange (val) {
      this.pageSize = val
      roleList({
        'search': this.search,
        'pageNo': this.pageNo,
        'pageSize': val})
        .then(res => {
          this.allRole.orders = res.data.result.orders
          this.allRole.form = res.data.result.records
          this.allRole.current = res.data.result.current
          this.allRole.pages = res.data.result.pages
          this.allRole.size = res.data.result.size
          this.allRole.total = res.data.result.total
        })
    },
    handleAdd () {
      addRole({
        'roleName': this.add_form.roleName,
        'note': this.add_form.note
      })
        .then(res => {
          if (res.data.code === 200) {
            this.$message.success(res.data.msg)
            this.addDialogFormVisible = false
            setTimeout(function () { location.reload() }, 1000)
          } else {
            this.$message.error(res.data.msg)
          }
        })
    },
    handleNew () {
      this.addDialogFormVisible = true
    },
    handleEdit (row) {
      this.putDialogFormVisible = true
      this.editForm.roleName = row.roleName
      this.editForm.note = row.note
      this.editForm.oldName = row.roleName
    },
    handleUpdate () {
      if (this.editForm.roleName !== null && this.editForm.roleName !== '') {
        updateRole({
          'oldName': this.editForm.oldName,
          'roleName': this.editForm.roleName,
          'note': this.editForm.note
        })
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success(res.data.msg)
              this.putDialogFormVisible = false
              setTimeout(function () { location.reload() }, 1000)
            } else {
              this.$message.error(res.data.msg)
            }
          })
      } else {
        this.$message.error('角色名不能为空')
      }
    },
    handleDelete (row) {
      deleteRole({
        'roleName': row.roleName
      })
        .then(res => {
          this.$message.success(res.data.msg)
          setTimeout(function () { location.reload() }, 1000)
        })
    }
  }
}
</script>

<style scoped>

</style>
