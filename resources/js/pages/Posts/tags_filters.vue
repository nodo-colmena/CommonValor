<template>
  <div class="pad">
    <b-badge>Microeconomy:</b-badge>
    <hr>
    <b-nav>
     <!-- <b-nav-item class="rounded" v-on:click="indexing('all')">All Tags</b-nav-item>--->
      <b-nav-item class="rounded" v-on:click="indexing('faircoop')">faircoop</b-nav-item>
      <b-nav-item class="rounded" v-on:click="indexing('socialimpact')">socialimpact</b-nav-item>
      <b-nav-item class="rounded" v-on:click="indexing('circulareconomy')">circulareconomy</b-nav-item>
      <b-nav-item class="rounded" v-on:click="indexing('localnodes')">localnodes</b-nav-item>
      <b-nav-item class="rounded" v-on:click="indexing('ecological')">ecological</b-nav-item>
      <b-nav-item class="rounded" v-on:click="indexing('faircoin')">faircoin</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "tags_filters",
  methods: {
    ...mapActions({
      set_tag: "posts/tagged",
      set_contador: "posts/reset_counter"
    }),
    indexing(tagg) {
      console.log(tagg);
      this.set_tag(tagg);
      this.set_contador(4);
    }
  }
};
</script>

<style>
</style>
