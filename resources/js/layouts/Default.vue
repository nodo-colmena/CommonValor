<template>
<div>
    <navbar></navbar>
    <b-container>
        <b-row class="justify-content-md-center">
            <b-col col md="10">
                <router-view></router-view> <!--  Objeto Router es ventana renderizada de diferentes componentes-->
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
export default {
  name: 'Default',
  data () {
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<style lang="css" scoped>
</style>