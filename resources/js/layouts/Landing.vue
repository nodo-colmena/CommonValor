<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: 'landing',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>