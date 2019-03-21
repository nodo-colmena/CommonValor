export default {
  set_tag(state, tag) {
    state.tag = tag
  },
  set_filter(state, filter) {
    state.filter = filter
  },
  set_posts(state, posts) {
    state.posts = posts
  },
  set_contador(state, contadorPost) {
    state.contadorPost = contadorPost
  },
  set_details_post(state, post) {
    state.selected_post = post
  },
  set_comments_selected_post(state, comments) {
    state.comments_selected_post = comments
  },

  SET_AUTHOR_INFO(state, author) {
    state.author = author;
  }
}