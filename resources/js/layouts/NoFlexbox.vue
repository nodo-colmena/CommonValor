<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: 'NoFlexbox',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">

</style>