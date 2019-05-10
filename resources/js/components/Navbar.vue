<template>
  <b-navbar toggleable="md" variant="faded" type="light" class="border">
    <!-- Colapsa cuando breackpoin es alcanzado -->
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <b-navbar-brand href="#/LandPage" class="appname">
      <img src="https://i.imgsafe.org/5c/5c6ab4d72a.png" height="30" alt>
      <strong>CommonValor</strong>
    </b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto mr-auto">
        <b-nav-item href="#/Posts">Contributions</b-nav-item>
        <b-nav-item href="#/Exchange">Exchange</b-nav-item>
        <b-nav-item href="#/Investors">Be part</b-nav-item>
        <b-nav-item href="#/AboutUs">About</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav>
        <b-button v-if="user===null || user.access_token === null" href="#/login">Login</b-button>
        <b-nav-item-dropdown v-else right>
          <template slot="button-content">
            <em>{{user.username}}</em>
            <span class="glyphicon glyphicon-align-left" aria-hidden="true"></span>
          </template>
          <b-dropdown-item href="#/panel_usr">Profile</b-dropdown-item>
          <b-dropdown-item href="#/panel_usr">Feed</b-dropdown-item>
          <b-dropdown-item href="#/panel_usr">Blog</b-dropdown-item>
          <b-dropdown-item href="#/panel_usr">Comments</b-dropdown-item>
          <b-dropdown-item href="#/panel_usr">Replys</b-dropdown-item>
          <b-dropdown-item href="#/panel_usr">Whallet</b-dropdown-item>
          <b-dropdown-item @click="logExit">SignOut</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",

  computed: {
    ...mapGetters({
      user: "auth/user",
      apiObject: "auth/api"
    })
  },
  methods: {
    ...mapActions({
      logout: "auth/logout"
    }),

    logExit() {
      this.logout(this.apiObject);
    }
  }
};
</script>

<style lang="css" scoped>
.appname{
  font-size: 16px;
}

</style>