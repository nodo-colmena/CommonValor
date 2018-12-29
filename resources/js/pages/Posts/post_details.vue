<template>
  <div>
    <h2 center='true'>{{post_selected.title}}</h2>
    <h4>{{post_selected.author}} date: {{date}}</h4> <!-- TODO:Styles of structure post-->
    <div class='image-w-text' v-html="body"></div> <!--TODO: charge dimension of pictures -->
    <b-link v-for="link in tags":key="link.text">{{link}}</b-link > <!-- TODO: Style and link tags with filter tags in POST_LIST.vue-->
    <div>{{comments[0].author}}</div>  <!-- TODO: Render structure for comments-->
  </div>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from "vuex";

export default{
  name:"post_details",

  data(){
    return {
      body:null,
      date:'',
      tags:[],
    }
  },

  computed: {
    ...mapGetters({   //get post selected in the cardview
          post_selected:'posts/selected_post',
          client:'auth/client',
          comments:'posts/comments_selected_post'
        }),
  },

  methods:{

    ...mapActions({
        get_comments: "posts/get_comments"
    }),

    charge_post(){
      this.get_body_post()
      this.get_date()
      this.get_tags() 
    },

    charge_comments(){
      this.get_comments({author: this.post_selected.author,permlink: this.post_selected.permlink,client:this.client})
    },

    get_body_post(){
      const Remarkable = require('remarkable');  //Convert json to markdown
      const md = new Remarkable({ html: true, linkify: true })
      this.body= md.render(this.post_selected.body)
    },

    get_date(){
      this.date=this.post_selected.created
      console.log(this.date)
      this.date = new Date(this.date).toDateString();  //need implement Moments.js here
      console.log(this.date)
    },

    get_tags(){
      this.tags = JSON.parse(this.post_selected.json_metadata) //extract tags post
      this.tags=this.tags.tags
    }
  },

  created(){
    this.charge_post(),
    this.charge_comments()
  },
  
}
</script>

<style>
  
</style>