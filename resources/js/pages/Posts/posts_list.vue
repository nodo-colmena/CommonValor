<template>
    <b-container fluid class="rowclass">
        <b-row>
            <b-col fluid >
                <card_view v-for="post in posts" :key="post.id" :post="post" :tag="tag"/>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import card_view from "./card_view_item.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";


export default {
  name: "post_list",

  data(){
    return {
      client: null,
      postsNumber: 4
    }
  },

  components: {
    card_view
  },

  computed: {
    ...mapGetters({
      tag: "posts/tag",
      filter: "posts/filter",
      posts: "posts/posts"
    }),
/*
    poster: function(){
      return this.$store.getters.get_posts(ob);
    }*/
  },
  methods: {
    ...mapActions({
      get_client: "posts/get_client",
      get_posts: "posts/get_posts"
    }),
    get_filtered_posts() {
      this.get_posts({tag: this.tag, filter: this.filter, num:this.postsNumber, client: this.client})
    },
    //add scroll handling
    handleScroll() {
      var d = document.documentElement;
      var offset = d.scrollTop + window.innerHeight;
      var height = d.offsetHeight;

      if (offset === height) {
        this.postsNumber += 4
        this.get_filtered_posts()
      }
    }
  },
  watch: {
    filter(){
      this.get_filtered_posts()
    },
    tag(){
      this.get_filtered_posts()
    }
  },
  created(){
    const dsteem = require("dsteem");

    let opts = {};
    //connect to server which is connected to the network/production
    this.client = new dsteem.Client("https://api.steemit.com");

    this.get_filtered_posts()

    //scroll add event for charge more posts
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
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
