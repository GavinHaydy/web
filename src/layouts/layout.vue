<!--
 * @Description: layout
 * @Author: zhu
 * @Date: 2021-01-04 10:03:14
 * @LastEditTime: 2021-01-04 11:36:39
 * @LastEditors: zhu
-->
<template>
  <div>
    <Base />
    <router-view />
    <Fooder />
  </div>
</template>
<script>
import Base from '../components/Base'
import Fooder from '../components/Fooder'
export default {
  components: {
    Base,
    Fooder
  }
}
</script>
