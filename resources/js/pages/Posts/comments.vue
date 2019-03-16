<template>
  <b-container fluid class="rowclass">
    <b-row>
      <b-col fluid>
        <card_comment v-for="comment in comments_l" :key="comment.id" :comment="comment"/>
      </b-col>
    </b-row>
  </b-container>  
</template>

<script>
import card_comment from "./card_comment.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
    name: "comments",
    data(){
        return{
            commentsNumber: 5
        };
    },

    components:{
        card_comment
    },


computed:{
    ...mapGetters({
      post_selected: "posts/selected_post",
      client: "auth/client",
      comments_l: "posts/comments_selected_post"
    })
},

methods: {
    ...mapActions({
        get_comments: "posts/get_comments"
    }),

charge_comments() {
    this.get_comments({
        author: this.post_selected.author,
        permlink: this.post_selected.permlink,
        client: this.client
      });
      console.log(this.comments);
    },
    
},

created(){

this.charge_comments();
/* window.addEventListener("scroll", this.handleScroll); */
},

/* destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }, */

};
</script>
<style>

</style>

