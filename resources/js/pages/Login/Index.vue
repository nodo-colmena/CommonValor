<template>
  <b-card bg-variant="dark">
    <b-button :href="loginURL" variant="white">Login with Steem</b-button>
  </b-card>

  <!--<b-card text-variant="white">
    <b-button href="loginURL" variant="dark">Login with Steem</b-button>
  </b-card>-->
</template>

<script>
/**TODO:
    Los URI de redireccionamiento se usarán dentro de su aplicación para reenviar al usuario una vez
    que la autenticación sea exitosa. Puede especificar múltiples URL de devolución de llamada con
    cada nueva línea. La devolución de llamada en Steemconnect SDK debe coincidir exactamente con uno
    de los URI especificados en esta página. Debido a razones de seguridad, si los URI de
    redireccionamiento utilizados en el SDK no son los especificados, no funcionará.

    La función `getLoginURL`, devuelve la URL de inicio de sesión que
    redirigirá al usuario para que inicie sesión con la pantalla de conexión de Steem. El inicio de
    sesión exitoso da como resultado un inicio de sesión exitoso que devolverá la información de
    `access_token`,` expires_in` y `username`, qué su aplicación debera comenzará a utilizar.
 */
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "login",

  //data sesion of client from steemConnect
  props: {
    //receive parameters via URL from steam login page, Definition of params in Vue-Router, app.js/routes
    access_token: { default: "", type: String },
    expires_in: { default: "", type: String },
    username: { default: "", type: String }
  },

  data() {
    return {
      card_color: { true: "info", false: "success" } ///???
    };
  },

  computed: {
    ...mapGetters({ loginURL: "auth/loginURL" })
  },

  methods: {
    ...mapActions({
      login: "auth/login", //SteemConnect
      logout: "auth/logout", //SteemConnect
      initializeAPI: "auth/initializeAPI" //SteemConnect API
    })
  },

  created() {
    this.initializeAPI(); //charge loginUrl and api instance
    if (this.access_token) {
      this.login({ ///actionLogin
        //assign datas to Vuex
        access_token: this.access_token,
        username: this.username,
        expires_in: this.expires_in
      });
    }
  }
};
</script>

<style lang="scss">

</style>