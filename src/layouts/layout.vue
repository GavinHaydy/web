<!--
 * @Description: layout
 * @Author: zhu
 * @Date: 2021-01-04 10:03:14
 * @LastEditTime: 2021-07-17 17:45:25
 * @LastEditors: zhu
-->
<template>
  <div>
    <Left/>
    <router-view
      :style="{marginLeft: $store.state.types.type === 1 ? '201px!important' : '64px!important'}"
    />
  </div>
</template>
<script>
import Left from '../pages/navigation/left'
import Top from '../pages/navigation/top'
export default {
  data () {
    return {
      login: localStorage.getItem('is_login')
    }
  },
  components: {
    Left,
    Top
  },
  created () {
    this.ajaxFun()
  },
  methods: {
    ajaxFun () {
      if (this.login === null) {
        this.$message.warning('请先登录')
        setTimeout(function () { location.replace(`/?r=${Math.floor(Math.random() * 10000)}`) }, 1000)
      }
    }
  }
}
</script>
