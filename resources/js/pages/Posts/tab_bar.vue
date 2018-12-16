<template> <!-- Filters -->
        <b-tabs>
            <b-tab title="Trending" v-on:click="tab_select('trending')"> 
            </b-tab>
            <b-tab title="Created" v-on:click="tab_select('created')"> 
            </b-tab>
            <b-tab title="Hot" v-on:click="tab_select('hot')">
            </b-tab>
            <b-tab title="Promoted" v-on:click="tab_select('promoted')">
            </b-tab>
        </b-tabs>                           
</template>


<script>
import posts_list from './posts_list.vue';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'tab_bar',  
  components:{
    posts_list
  },
  methods:{
    tab_select(filter){
      console.log(filter)
      this.set_filter(filter);
    },
    ...mapActions({set_filter: 'posts/filtered'})
  }
} 
</script>


<style>
</style>