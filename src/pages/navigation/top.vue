<!--
 * @Description:顶部导航
 * @CreatedBy:WebStorm
 * @Author: the-ruffian
 * @Date: 2021-03-13 18:43
 * @LastEditTime: 2021-4-8 17:23:10
 * @LastEditors: the-ruffian
-->
<template>
  <div
    class="topNV"
  >
    <el-row
      :span=24
    >
      <el-col
        :span=1
      >
        <el-button
          size="mini"
          class="left"
          :icon="$store.state.types.type ===1 ? 'el-icon-s-fold' : 'el-icon-s-unfold' "
          @click="$store.commit('handleClick')"
        ></el-button>
      </el-col>
      <el-col
        :span=1
        class="right"
      >
        <a @click="handleExit" v-if="login !== null">退出</a>
      </el-col>
      <el-col
        :span=3
        class="right"
        v-if="login !== null"
      >
        <a>{{username}}</a>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'topNV',
  data () {
    return {
      login: localStorage.getItem('is_login'),
      username: localStorage.getItem('username')
    }
  },
  methods: {
    handleExit () {
      localStorage.clear()
      location.replace('/login')
    }
  }
}
</script>

<style scoped>

</style>
