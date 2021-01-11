<!--
 * @Description:
 * @Author: zhu
 * @Date: 2020-12-31 15:29:35
 * @LastEditTime: 2021-01-04 10:16:02
 * @LastEditors: zhu
-->
<template>
  <div id="HelloWorld">
    <h1 v-for="i in 100" :key="i">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
