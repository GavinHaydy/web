<!--
 * @Description: 
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-01-04 10:03:54
 * @LastEditors: zhu
-->
<template>
  <div id="app">
    <router-view v-if="$route.meta.app_view"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
