<template>
  <div>
    <div>
      <b-nav fill tabs>
        <b-nav-item active>Blog</b-nav-item>
        <b-nav-item>Comentarios</b-nav-item>
        <b-nav-item>Respuestas</b-nav-item>
        <b-nav-item-dropdown
          id="nav7_ddown"
          text="Recompensa"
          extra-toggle-classes="nav-link-custom"
          right
        >
          <b-dropdown-item>Recompensa de Curacion</b-dropdown-item>
          <b-dropdown-item>Recompensa de Autor</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Monedero</b-nav-item>
        <b-nav-item>Configuración</b-nav-item>
      </b-nav>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "tabs",

  methods: {
    ...mapActions({
      get_me: "auth/get_me"
    })
  },

  computed: {
    ...mapGetters({
      userInfo: "auth/client_data",
      apiCall: "auth/api"
    })
  },

  created() {
    this.get_me(this.apiCall); //obtiene datos de usuario logeado
  }
};
</script>

<style scoped>
</style>
