<template>
    <div>
        <b-form-group id="steem_data"
            label="Steem Username"
            label-for="Input username steem"
            description="Id de usuario">
            <b-form-input id="steem_username_id"
                type="text"
                placeholder="Ingrese nombre de usuaro steem"
                v-model="user"
                >
            </b-form-input>
        </b-form-group>
        <b-form-group id="steem_private_key"
            label="Steem active Key"
            label-for="Input_key_user"
            description="Contrase;a de la cuenta">
            <b-form-input id="user_private_key"
                type="text"
                placeholder="Ingrese llave privada de la cuenta"
                v-model="private_key"
                >
            </b-form-input>
        </b-form-group>
    <b-button size="lg" variant="outline-success" v-on:click="submitTransfer" >Exchange</b-button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { Client, PrivateKey } from 'dsteem';
import { Testnet as NetConfig } from './configuration'; //A Steem Testnet. Replace 'Testnet' with 'Mainnet' to connect to the main Steem blockchain.

export default {
    name:'key_transaction',
    methods:{
        submitTransfer(){
            let opts = { ...NetConfig.net };
            //create transfer object
            const transf = new Object();
            
            console.log('user:'+this.user)
            console.log('cantidad:'+this.cSteem)
            console.log('type:'+this.steem_type)
            
            let private_key=PrivateKey.fromString(this.private_key);
            console.log('pk:'+private_key)
            transf.from = this.user;
            transf.to = 'ed-castillo' //recipient; //Nuestra cuenta
            transf.amount = this.cSteem+' '+this.steem_type;
            console.log('amount:'+transf.amount)
            transf.memo = 'test';

            this.client.broadcast.transfer(transf, private_key).then(
                function(result) {
                   console.log(
                        'included in block: ' + result.block_num,
                        'expired: ' + result.expired
                    );
                    /*document.getElementById('transferResultContainer').style.display ='flex';
                    document.getElementById('transferResult').className ='form-control-plaintext alert alert-success';                    document.getElementById('transferResult').innerHTML = 'Success'; */
                    
                },
                function(error) {
                    console.error(error);
                    /*document.getElementById('transferResultContainer').style.display ='flex';
                    document.getElementById('transferResult').className ='form-control-plaintext alert alert-danger';
                    document.getElementById('transferResult').innerHTML =error.jse_shortmsg;*/
                }
            );
        },
    },
    created(){
        let opts = { ...NetConfig.net };
        console.log(NetConfig.url)
        this.client = new Client(NetConfig.url, opts);
        let user = this.auth_user
        this.user_recipient = user && user.username
    },
    watch: {
        auth_user() {
            if(! this.auth_user)
                this.user = "";
             else
                this.user = this.auth_user.username;
        }
    },
    computed:{
        ...mapGetters({
            cSteem: "exchange/cSteem",
            cFaircoin: "exchange/cFaircoin",
            dir_wallet: "exchange/dir_wallet",
            steem_type: "exchange/steem_type",
            auth_user: "auth/user"
        }),
    },
    data(){
        return {
            /*user: "cdemo",
            private_key: "5KaNM84WWSqzwKzY82fXPaUW43idbLnPqf5SfjGxLfw6eV2kAP3",*/
            user: "cti-buap",
            private_key: "PrivateKEY",
            client:{}
        }
    }
}
</script>

<style>

</style>
