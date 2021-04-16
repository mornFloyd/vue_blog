<template>
  <div>
    <nav-bar />
    <router-view></router-view>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import NavBar from 'components/content/NavBar'
import BottomBar from 'components/common/footer/BottomBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    BottomBar
  }
}
</script>

<style>
@import url('assets/css/base.css');
</style>
