<template>
  <div>
    <b-container fluid class="rowclass">
      <b-row>
        <b-col cols="2">
          <tab_bar/>
          <tags_filters/>
        </b-col>
        <b-col cols="8">
          <post_list/>
        </b-col>
        <b-col cols="2">
          <card_aside_links/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import tab_bar from "./tab_bar.vue";
import tags_filters from "./tags_filters.vue";
import card_aside_links from "./card_aside_links.vue";
import post_list from "./posts_list.vue";

export default {
  name: "indexPosts",
  components: {
    tab_bar,
    tags_filters,
    card_aside_links,
    post_list
  },
  data() {
    return {
      //client:null,
      //posts:[]
    };
  }
};
</script>

<style lang="scss">
.rowclass {
  padding-top: 2em;
}
</style>
