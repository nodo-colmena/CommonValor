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