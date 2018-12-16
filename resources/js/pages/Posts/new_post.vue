<template>
    <b-container>
        <b-row>
            <b-col>
                <h2>New Post</h2>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input id="title"
                              type="text"
                              v-model="post.title"
                              placeholder="title" />
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12" sm="12" md="12" lg="12"	xl="12">
                <mavon-editor v-model="post.body"></mavon-editor>
            </b-col>
        </b-row>
        <b-row>
            <b-col>
                <b-form-input id="tags"
                              type="text"
                              v-model="post.tags"
                              placeholder="tags" />
            </b-col>
        </b-row>
        <b-row>
            <b-col><b-button>Save</b-button></b-col>
            <b-col><b-button>Cancel</b-button></b-col>
        </b-row>
    </b-container>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {

  name: 'NewPost',

  data () {
    return {
        post: {title: "New Post", body: "Hello there", tags: ""}
    }
  },

  components: {
    mavonEditor
  }
}
</script>

<style lang="css" scoped>
</style>