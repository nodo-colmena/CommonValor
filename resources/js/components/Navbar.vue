<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="#/LandPage">
      Common Valor
      <img src="" height="30" alt="">
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item href="#/posts"> Posts </b-nav-item>
        <b-nav-item href="#/exchange">Exchange</b-nav-item>
        <b-nav-item href="#/investors">Investors</b-nav-item>
        <b-nav-item href="#/aboutus">Aboutus</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown v-if="user" right> 
          <template slot="button-content">
            <em>{{user.username}}</em>
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-button href="#/login" v-else>Login</b-button>
      </b-navbar-nav>
    
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {

  name: 'Navbar',

  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({user: 'auth/user'})
  },
  methods: {
    ...mapActions({logout: 'auth/logout'})
  }
}
</script>

<style lang="css" scoped>

</style>