<template>
  <div id="app">
    <Base v-if="$route.meta.keepAlive"></Base>
    <Fooder v-if="$route.meta.keepAlive"></Fooder>
    <router-view v-if="$route.meta.app_view"></router-view>
  </div>
</template>

<script>
import Base from './components/Base'
import Fooder from './components/Fooder'
export default {
  name: 'App',
  components: {
    Base,
    Fooder
  }
}
</script>

<style>
</style>
