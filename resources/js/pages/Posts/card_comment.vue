<template>
<div >
  <div class="card-header">
    {{comment.author}}
  </div>
  <div class="card-body">
      <div class="image-w-text" v-html="body_comment"></div>
  </div>
</div>    
</template>

<script>
export default {
name: "card_comment",
data() {
    return {
        body_comment: ""
    }
},
props: {
    comment: {
        type: Object,
        required: true
    },
},
methods: {
    get_body_comments() {
        const Remarkable = require("remarkable"); //Convert json to markdown
        const md = new Remarkable({ html: true, linkify: true });
        this.body_comment = md.render(this.comment.body);
        console.log("COMMENT" + this.comment.body);
    },
},
created(){
    this.get_body_comments();
},

}


</script>


<style>

</style>
