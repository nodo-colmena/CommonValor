<template>
  <div>
    <navbar></navbar>
    <b-container class="bv-post-details">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="8">
          <router-view></router-view>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: "details",

  data() {
    return {};
  },
  components: {Navbar}
};
</script>

<style lang="css" scoped>
</style>