export default {

  //User is a entity from SC2
  set_user(state, user) {
    state.user = user
    state.api.setAccessToken(user.access_token);
  },

  unset_user(state) {
    state.api.revokeToken(function (err, res) {
      if (res && res.success) {
        //TODO: vuex states api.setAccessToken and user.acess_token dont reference null
        //state.api.setAccessToken(null)
        //state.user.access_token = null
        state.user.name = null;
        console.log('unset' + Object.entries(res))
      }
    });
  },

  set_client(state, client) { //generic public user for view posts
    state.client = client
  },

  initialize_api(state, api) {
    state.api = api
    state.loginURL = api.getLoginURL();

  },
}