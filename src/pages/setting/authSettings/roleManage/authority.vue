<!--
 * @Description:权限配置页面
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-08-22 17:52
 * @LastEditTime: 2021-08-22 17:52
 * @LastEditors: the-ruffian
-->
<template>
  <div>
    <el-tree
      :data="form"
      :props="props"
      show-checkbox
    >
    </el-tree>
  </div>
</template>

<script>
import {permission} from '../../../../api/role'

export default {
  name: 'authority',
  data () {
    return {
      form: {},
      props: {
        label: 'permissionName',
        children: 'children'
      }
    }
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      permission({
      }).then(res => {
        if (res.data.code === 200) {
          this.form = res.data.result
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
