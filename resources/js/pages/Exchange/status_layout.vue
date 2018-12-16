<template>
    <b-tabs>
        <b-tab title="Pendiente" :disabled="!transactions.pending.length">
            <div v-if="!user">
                <br>Necesita estar Logeado
            </div>
        </b-tab>
        <b-tab title="Completado" :disabled="!transactions.completed.length">
            <div v-if="!user">
                <br>Necesita estar Logeado
            </div>
        </b-tab>
        <b-tab title="fallido" :disabled="!transactions.failed.length">
            <div v-if="!user">
                <br >Necesita estar Logeado
            </div>
        </b-tab>
    </b-tabs>
</template>

<script>
///cantidad, tiempo, destino, status
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            transactions: {
                pending: [],
                failed: [],
                completed: [],
            },
            client:{
            },
            stream:{},
            state:{},
            blocks : [],
            block:{},
        }
    },
    computed: {
        ...mapGetters({user: 'auth/user'})
    },
    created(){
        this.client = new dsteem.Client('https://api.steemit.com');
    },
    methods:{
        startMonitor(){
            stream = client.blockchain.getBlockStream();
            stream.on('data', function(block) {
                    //console.log(block);
                    this.block=block;
                    this.blocks.unshift(this.block);
                    /*blocks.unshift(
                        `<div class="list-group-item"><h5 class="list-group-item-heading">Block id: ${
                            block.block_id
                        }</h5><p>Transactions in this block: ${
                            block.transactions.length
                        } <br>Witness: ${
                            block.witness
                        }</p><p class="list-group-item-text text-right text-nowrap">Timestamp: ${
                            block.timestamp
                        }</p></div>`
                    );*/
                    document.getElementById('blockList').innerHTML = blocks.join('');
                })
                .on('end', function() {
                    // done
                    console.log('END');
                });
            }
    }
}
</script>

<style>

</style>
