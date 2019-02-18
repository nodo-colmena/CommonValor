<template>
  <b-container fluid class="rowclass">
    <b-row>
      <b-col fluid>
        <card_view v-for="post in posts" :key="post.id" :post="post" :tag="tag"/>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import card_view from "./card_view_item.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "post_list",

  data() {
    return {
      postsNumber: 4
    };
  },

  components: {
    card_view
  },

  computed: {
    ...mapGetters({
      tag: "posts/tag",
      filter: "posts/filter",
      posts: "posts/posts",
      postCounter: "posts/contadorPost",
      client: "auth/client"
    })
  },

  methods: {
    ...mapActions({
      get_client: "auth/get_client", //public generic client
      get_posts: "posts/get_posts",
      set_contador: "posts/reset_counter"
    }),

    get_filtered_posts() {
      //call action - bring posts
      //console.log(this.client) //TODO: BORRAR ESTO
      this.get_posts({
        tag: this.tag,
        filter: this.filter,
        num: this.postCounter,
        client: this.client
      });
    },

    //add scroll handling
    handleScroll() {
      //controll scroll
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight; //control scroll
      var height = d.offsetHeight; //control scroll

      if (offset === height) {
        //limit of the scroll
        this.set_contador(this.postCounter + 4);
        this.get_filtered_posts();
      }
    }
  },

  watch: {
    filter() {
      //when filter is changed or tag is change, call local function
      this.get_filtered_posts();
    },
    tag() {
      this.get_filtered_posts();
    }
  },

  created() {
    //request to public client
    this.get_client();
    //bring posts
    this.get_filtered_posts();
    //scroll add event for charge more posts
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style>
.rowclass {
  padding: 20px;
}
</style>

<!-- /*
        this.datas.forEach(post => {
          const json = JSON.parse(post.json_metadata); // body content
          const image = json.image ? json.image[0] : "";
          const title = post.title; //title
          const author = post.author; // author
          const catego = post.categoty; //categoty
          const votes = post.net_votes; //votes
          const commentaries = post.children; //commentaries
          const recauded = post.pending_payout_value; //steemPending
          const created = new Date(post.created).toDateString(); /// date
        });*/

        -->
