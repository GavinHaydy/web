<template>
<!--  <h1>404 页面正在加急制作</h1>-->
  <div id="Error">
    <div v-for="site in info" :key="site">
      {{site.name}}{{site.info}}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Error',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('../static/json_demo.json')
      .then(response => (this.info = response.data.sites))
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>

</style>
