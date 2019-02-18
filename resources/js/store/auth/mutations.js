export default {

  set_user(state, user) {
    state.user = user
  },

  unset_user(state) {
    /* state.api.revokeToken(function(err,res){console.log(err+",,"+res)});*/
    state.api.me(function (err, res) {
      if (res) {
        const user = JSON.stringify(res, undefined, 2);
        console.log(user) //show datas of user client
      }
    });
  },

  set_client(state, client) { //generic public user for view posts
    state.client = client
  },

  initialize_api(state, api) {
    state.api = api
    console.log(api)
    state.loginURL = api.getLoginURL()
  },


}