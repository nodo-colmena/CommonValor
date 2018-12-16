<template>
        <b-nav vertical class="border">
        <b-nav-item v-on:click="indexing('all')">All Tags</b-nav-item>
        <b-nav-item v-on:click="indexing('art')">Art</b-nav-item>
        <b-nav-item v-on:click="indexing('eco')">Solidarity Economy</b-nav-item>
        <b-nav-item v-on:click="indexing('dev')">Blockchain Development</b-nav-item>
        </b-nav>               
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'tags_filters',
  methods:{
    indexing(tagg){
      console.log(tagg)
      this.set_tag(tagg);
    },
    ...mapActions({set_tag: 'posts/tagged'})
  }
} 
</script>

<style>

</style>