<template>
    <div>
        <selector></selector>
        <key_user_steem></key_user_steem>
        
    </div>
</template>

<script>
import selector from "./selector.vue";
import tab_status from "./status_layout.vue";
import key_user_steem from "./key_transaction.vue";

export default {
    name:'exchange',
    components:{
        selector,
        tab_status,
        key_user_steem,
        tab_status
    },
    created(){
    
    }
}
</script>

  
<style lang="scss">

</style>