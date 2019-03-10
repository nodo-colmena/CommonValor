<template>
  <b-navbar toggleable="md" variant="faded" type="light" class="border">
    <!-- Colapsa cuando breackpoin es alcanzado -->
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/LandPage">
      Common Valor
      <img src height="30" alt>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto mr-auto">
        <b-nav-item href="#/Posts">Posts</b-nav-item>
        <b-nav-item href="#/Exchange">Exchange</b-nav-item>
        <b-nav-item href="#/Investors">Investors</b-nav-item>
        <b-nav-item href="#/AboutUs">AboutUs</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <!-- comprobating if the user has been loged-->
        <b-nav-item-dropdown v-if="user.username!=null" right>
          <!-- FIXME:   ever true becouse in store/auth/user: is object idented != null-->
          <template slot="button-content">
            <em>{{user.username}}</em>
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </template>
          <b-dropdown-item href="#/panel_usr">Profile</b-dropdown-item>
          <b-dropdown-item @click="logout">Signout</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-button v-else href="#/login">Login</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters({ user: "auth/user" })
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    })
  }
};
</script>

<style lang="css" scoped>
</style>