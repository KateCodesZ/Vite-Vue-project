<script>
  import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>

<template>
  <div id="app">
    <Navbar></Navbar>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
