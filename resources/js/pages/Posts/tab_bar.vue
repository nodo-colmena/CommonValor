<template>
  <!-- Filters -->
  <div>
    <b-nav vertical>
      <b-nav-item v-on:click="tab_select('trending')">
        <font-awesome-icon icon="chart-line"/>
        <a class="spaces">Trending</a>
      </b-nav-item>
      <b-nav-item v-on:click="tab_select('created')">
        <font-awesome-icon icon="pencil-alt"/>
        <a class="spaces">Created</a>
      </b-nav-item>
      <b-nav-item v-on:click="tab_select('hot')">
        <font-awesome-icon icon="fire"/>
        <a class="spaces">Hot</a>
      </b-nav-item>
    </b-nav>
  </div>
</template>

<script>
import posts_list from "./posts_list.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "tab_bar",
  components: {
    posts_list
  },
  methods: {
    ...mapActions({
      set_filter: "posts/filtered",
      set_contador: "posts/reset_counter"
    }),
    tab_select(filter) {
      console.log(filter);
      this.set_filter(filter);
      this.set_contador(4);
    }
  }
};
</script>


<style>
.btabs {
  padding: 5px;
}
</style>
