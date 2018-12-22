<template>
  <div>
    <h2>{{post_selected.title}}</h2>
    <h4>{{post_selected.author}} date: {{date}}</h4>
    <div class='image-w-text' v-html="body"></div>
    <!-- implementing route + params to get posts_filtered again-->
    <b-link v-for="link in tags":key="link.text">{{link}}</b-link >

  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default{
  name:"post_details",
  data(){
    return {
      body:null,
      date:'..',
      tags:[],
    }
  },
  computed: {
    ...mapGetters({   //get post selected in the cardview
          post_selected:'posts/selected_post'
        }),
  },
  mounted() {
    const Remarkable = require('remarkable');  //Convert json to markdown
    const md = new Remarkable({ html: true, linkify: true })
    this.body= md.render(this.post_selected.body)

    this.date=this.post_selected.created
    this.date = new Date(this.date).toDateString();  //need implement Moments.js here
    this.tags = JSON.parse(this.post_selected.json_metadata) //extract tags post
    this.tags=this.tags.tags
  },

}
</script>

<style>
  
</style>