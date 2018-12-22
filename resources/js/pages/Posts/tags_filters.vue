<template>
        <b-nav vertical class="border">
          <b-nav-item class="text-center" v-on:click="indexing('all')">All Tags</b-nav-item>
          <b-nav-item class="text-center" v-on:click="indexing('media')">Media</b-nav-item>
          <b-nav-item class="text-center" v-on:click="indexing('faircoindevelopment')">Faircoin Develepment</b-nav-item>
          <b-nav-item class="text-center" v-on:click="indexing('circulareconomy')">Circular Economy</b-nav-item>
          <b-nav-item class="text-center" v-on:click="indexing('localnodes')">Local Nodes</b-nav-item>
        </b-nav>               
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'tags_filters',
  methods:{
    ...mapActions({
      set_tag: 'posts/tagged',
      set_contador: 'posts/reset_counter'
    }),
    indexing(tagg){
      console.log(tagg);
      this.set_tag(tagg);
      this.set_contador(4);
    }
  }
}
</script>

<style>

</style>