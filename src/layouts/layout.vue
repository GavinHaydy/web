<!--
 * @Description: layout
 * @Author: zhu
 * @Date: 2021-01-04 10:03:14
 * @LastEditTime: 2021-01-04 11:36:39
 * @LastEditors: zhu
-->
<template>
  <div>
    <el-row>
      <el-col
        :span=4
      >
        <Left/>
      </el-col>
      <el-col
        :span=20
      >
        <Top/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Left from '../pages/navigation/left'
import Top from '../pages/navigation/top'
export default {
  components: {
    Left,
    Top
  }
}
</script>
