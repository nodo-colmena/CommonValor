export default {
  set_tag(state, tag) {
      state.tag = tag
  },
  set_filter(state, filter){
      state.filter = filter
  },
  set_client(state,{client}){
      state.client =  client
  },
  set_posts(state, posts){
      state.posts=posts
  }
}