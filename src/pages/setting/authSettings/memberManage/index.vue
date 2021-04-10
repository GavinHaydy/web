<!--
 * @Description:index.vue
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-04-09 22:38
 * @LastEditTime: 2021-04-09 22:38
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
      </el-table>
    </div>
  </div>
</template>

<script>
import {userFindAll} from '../../../../api/user'

export default {
  name: 'index',
  data () {
    return {
      userList: []
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      userFindAll()
        .then(res => {
          this.userList = res.data
          console.log(res.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
