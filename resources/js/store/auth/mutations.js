export default {

  //User is a entity from SC2
  set_user(state, user) {
    state.user = user
    state.api.setAccessToken(user.access_token);
  },

  unset_user(state) {
    state.user = null;
    state.api.access_token = null;
  },

  set_client(state, client) { //generic public user for view posts
    state.client = client
  },

  initialize_api(state, api) {
    state.api = api
    state.loginURL = api.getLoginURL();
  },

  me_data(state, info) {
    if (state.user != null)
      state.user.meData = info;
  }
}