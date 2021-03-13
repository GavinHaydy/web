<!--
 * @Description:Base.vue
 * @CreatedBy:WebStorm
 * @Author: BugP
 * @Date: 2021-01-10 23:52
 * @LastEditTime: 2021-03-10 23:52
 * @LastEditors: BugP
-->
<template>
  <div>
    <div>从头开始</div>
  </div>
</template>

<script>
export default {
  name: 'Base',
  data () {
    return {
      type: 1 // 1-深色，2-浅色
    }
  },
  methods: {
    handleChange (type) {
      if (type === 1) {
        this.type = 2
      } else {
        this.type = 1
      }
    }
  }
}
</script>

<style scoped>

</style>
