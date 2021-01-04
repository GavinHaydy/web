<!--
 * @Description: layout
 * @Author: zhu
 * @Date: 2021-01-04 10:03:14
 * @LastEditTime: 2021-01-04 10:17:25
 * @LastEditors: zhu
-->
<template>
  <div>
    <Base v-if="$route.meta.keepAlive" />
    <Fooder v-if="$route.meta.keepAlive" />
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
