<template>
  <b-card :bg-variant="card_color[!access_token]" text-variant="white">
    <p v-if="access_token">Welcome {{ access_token }}<br>
      {{expires_in}}<br>
      {{username}}
    </p>
    <b-button v-else :href="loginURL" variant="dark">Login with Steem</b-button>
</b-card>
</template>

<script>
/**TODO:
    Los URI de redireccionamiento se usarán dentro de su aplicación para reenviar al usuario una vez 
    que la autenticación sea exitosa. Puede especificar múltiples URL de devolución de llamada con 
    cada nueva línea. La devolución de llamada en Steemconnect SDK debe coincidir exactamente con uno
    de los URI especificados en esta página. Debido a razones de seguridad, si los URI de 
    redireccionamiento utilizados en el SDK no son los especificados, no funcionará.

    La función `getLoginURL` que se ve en el lado derecho, devuelve la URL de inicio de sesión que 
    redirigirá al usuario para que inicie sesión con la pantalla de conexión de Steem. El inicio de 
    sesión exitoso da como resultado de un inicio de sesión exitoso devolverá la información de 
    `access_token`,` expires_in` y `username`, qué aplicación comenzará a utilizar.
 */
import { mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    name:'login',
    props: {
        access_token: {default: "", type: String},
        expires_in: {default: "", type: String},
        username: {default: "", type: String},
    },
    data() {
        return {
            user: { username: "username" },
            link: '',
            card_color: {true: "info", false: "success"}
        }
    },
    computed: {
        ...mapGetters({ loginURL: 'steem_api/loginURL' }),
    },
    methods: {
        ...mapActions({ login: 'auth/login',
                        logout: 'auth/logout',
                        initializeAPI: 'steem_api/initializeAPI'  })
    },
    created(){
        this.initializeAPI()
        if(this.access_token){
            this.login({access_token: this.access_token,
                        username: this.username,
                        expires_in: this.expires_in })
        }
    }
}
</script>

<style lang="scss">

</style>


///VUEX