export default {
  tag: (state, getters) => state.tag,
  filter: (state, getters) => state.filter,
  posts: (state, getters) => state.posts,
  contadorPost: (state, getters) => state.contadorPost,
  selected_post: (state, getters) => state.selected_post,
  comments_selected_post: (state, getters) => state.comments_selected_post,
  author_information: (state, getters) => state.author_info,
}