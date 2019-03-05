<template>
  <b-container>
    <b-row>
      <b-col>
        <h2>New Post</h2>
        <hr></hr>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input id="title" type="text" v-model="post.title" placeholder="title"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" sm="12" md="12" lg="12" xl="12">
        <mavon-editor v-model="post.body" language="en"></mavon-editor>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-input id="tags" type="text" v-model="post.tags" placeholder="tags"/>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <hr class="prueba"></hr>
        <b-button v-on:click="submit(post)">Post</b-button> 
       <!--  <b-button>Post</b-button> -->
      </b-col>
      <b-col>
        <hr></hr>
        <b-button>Cancel</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import { mapActions, mapGetters } from "vuex";
/* Example to configure mavon markdown editor: https://tech-blog.s-yoshiki.com/2018/10/687/
Documentation of props configuration, mvaon: https://github.com/hinesboy/mavonEditor */

export default {
  name: "NewPost",
  data() {
    return {
      post: { title: "New Post", body: "Hello there", tags: "" }
    };
  },

  components: {
    mavonEditor
  }, 

  computed: {
    ...mapGetters({
      client: "auth/client",
      user: "auth/user"
    })
  },

  methods:{
    ...mapActions({
      submitPost: "posts/submit_post",
      get_client: "auth/get_client"
    }), 
     submit(post){
      //console.log(post);
      //console.log(this.user);
      console.log(this.client);
      console.log(this.user.access_token);
      console.log(Object.entries(post));
      //this.submitPost(post,this.client);
    }
  },
  created(){
    this.get_client();
  }
};
</script>

<style lang="css" scoped>
.prueba{
  margin-top: 30px;
}
</style>
