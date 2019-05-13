<template>
    <b-container>
         <div class="space">
         <h1 class="msg"> <strong>Exchange value in a new economy based on cooperation, ethics and solidarity. </strong></h1>
         </div>
          <b-row>
            <b-col cols="4">
                <h5>Steem</h5>
                
                <b-form-group id="SteemForm"
                    label=""
                    label-for="InputSteem"
                    description="Cantidad de steem a cambiar por faircoin">
                    <b-form-input id="steem_to_faircoin"
                        type="number"
                        placeholder="Ingrese cantidad en steem"
                        v-model="Csteem"
                        >
                        
                    </b-form-input>
                </b-form-group>

            </b-col>
            <b-col cols="4">
                
            </b-col>
            <b-col cols="4">
                <h5>Faircoin</h5>
                <b-form-group id="FaircoinForm"
                    label=""
                    label-for="InputFaircoin"
                    description="Cantidad de Faircoin deseada">
                    <b-form-input id="faircoin_to_steem"
                        type="number"
                        placeholder="Cantidad deseada"
                        :value="Cfaircoin"
                        >
                    </b-form-input>
                </b-form-group>
            </b-col>
          </b-row>
          <b-row>
              <b-col>
                <b-form-group id="dir_deposito"
                    label="Direccion de Cartera destino"
                    label-for="Input_dir_ex"
                    description="Direccion de cuenta de receptor, Faircoin">
                    <b-form-input id="dir_hexa"
                        type="number"
                        placeholder="Direccion de cartera donde se recibiran Faircoins"
                        v-model="wallet_address"
                    >
                    </b-form-input>
                </b-form-group>
              </b-col>
          </b-row>
        </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
    name:'selector',
    data(){
        return{
            Csteem:0,
            wallet_address:'',
            steem_price:0,
        }
    },
    methods:{
        ...mapActions({
            inputSteem: "exchange/inputSteem",
            inputFaircoin: "exchange/inputFaircoin",
            inputDirW:"exchange/inputDirW",
            inputType:"exchange/inputType"
        })
    },
    watch:{
        Csteem(){
            this.inputSteem(this.Csteem)
        },
    },
    created(){  
        //Informacion sobre peticiones Cruzadas CORS aqui https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS
        //Soluci'on aqui: https://stackoverflow.com/questions/44232370/cors-error-even-after-setting-access-control-allow-origin-on-client-side
        //origenes https://www.karolisram.com/cors-from-anywhere/
        axios.get('https://cors-anywhere.herokuapp.com/https://api.coingecko.com/api/v3/coins/steem?localization=false&sparkline=false')
        .then(response => (
            //console.log(response.data.market_data.current_price.eur)
           this.steem_price=response.data.market_data.current_price.eur
        ));

    },
    computed:{
        Cfaircoin(){
            return this.Csteem*this.steem_price/0.07 // calculate faircoin
        }
    }
}
</script>
<style lang="scss">
.msg{
    font-size: 22px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-top: 30px;
}

</style>
