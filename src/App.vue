<template>
  <div id="app">
    <Base v-if="!$route.meta.keepAlive"></Base>
    <Fooder v-if="!$route.meta.keepAlive"></Fooder>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import Base from "./components/Base";
import Fooder from "./components/Fooder";
import Main from "./components/Main";
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
