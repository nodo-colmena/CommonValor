export default {
    
  set_user(state, user) {
      state.user = user
  },

  unset_user(state){
      state.user = null
  },

  set_client(state,client){
    state.client =  client
  },
}